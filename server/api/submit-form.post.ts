const fieldLabels: Record<string, string> = {
  type: 'Tipo',
  name: 'Nombre',
  email: 'Correo electrónico',
  company: 'Empresa',
  website: 'Web',
  social: 'Redes sociales',
  niche: 'Temática',
  message: 'Mensaje'
}

const formTypeLabels: Record<string, string> = {
  brands: 'Marca',
  creators: 'Creador'
}

const escapeHtml = (value: unknown) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const runtimeEnv = (key: string, fallback?: unknown) => process.env[key] || String(fallback || '')

const brevoErrorMessage = (body: string) => {
  try {
    const parsed = JSON.parse(body)

    return parsed.message || parsed.code || body
  } catch {
    return body
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)

  const brevoApiKey = runtimeEnv('BREVO_API_KEY', config.brevoApiKey) || runtimeEnv('BREVO_API')
  const mailFromEmail = 'eric@lagamberra.xyz'
  const mailFromName = runtimeEnv('MAIL_FROM_NAME', config.mailFromName) || 'lagamberra'
  const mailTo = runtimeEnv('MAIL_TO', config.mailTo) || 'eric@lagamberra.xyz'
  const recipients = mailTo.split(',').map(email => ({ email: email.trim() })).filter(({ email }) => email)

  const missingConfig = [
    !brevoApiKey ? 'BREVO_API_KEY' : '',
    !mailFromEmail ? 'MAIL_FROM_EMAIL' : '',
    recipients.length === 0 ? 'MAIL_TO' : ''
  ].filter(Boolean)

  if (missingConfig.length > 0) {
    throw createError({
      statusCode: 500,
      statusMessage: `Faltan variables de Brevo: ${missingConfig.join(', ')}`
    })
  }

  const formType = formTypeLabels[body.type] || body.type || 'Formulario'
  const submittedAt = new Date().toLocaleString('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })

  const rows = Object.entries(body)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => `${fieldLabels[key] || key}: ${String(value).trim()}`)

  const text = [
    `Nuevo formulario de ${formType.toLowerCase()} recibido en lagamberra.`,
    '',
    `Fecha: ${submittedAt}`,
    '',
    ...rows
  ].join('\n')

  const htmlRows = Object.entries(body)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([key, value]) => `
      <tr>
        <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: 700; vertical-align: top;">${fieldLabels[key] || key}</td>
        <td style="padding: 8px 12px; border-bottom: 1px solid #eee; vertical-align: top;">${escapeHtml(value).replaceAll('\n', '<br>')}</td>
      </tr>
    `)
    .join('')

  console.log('[Form Submission]', {
    type: body.type,
    email: body.email,
    timestamp: new Date().toISOString()
  })

  const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': brevoApiKey,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      sender: {
        name: mailFromName,
        email: mailFromEmail
      },
      to: recipients,
      replyTo: body.email ? { email: body.email } : undefined,
      subject: `Nuevo formulario lagamberra: ${formType}`,
      textContent: text,
      htmlContent: `
      <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.5;">
        <h1 style="font-size: 22px; margin: 0 0 8px;">Nuevo formulario de ${formType.toLowerCase()}</h1>
        <p style="margin: 0 0 20px; color: #555;">Recibido el ${submittedAt}</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">${htmlRows}</table>
      </div>
    `
    })
  })

  if (!brevoResponse.ok) {
    const errorBody = await brevoResponse.text()
    const message = brevoErrorMessage(errorBody)

    console.error('[Brevo Email Error]', {
      status: brevoResponse.status,
      body: errorBody
    })

    throw createError({
      statusCode: 502,
      statusMessage: `Brevo: ${message}`
    })
  }

  return {
    success: true,
    message: 'Formulario recibido correctamente'
  }
})
