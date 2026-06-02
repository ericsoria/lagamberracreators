<script setup lang="ts">
const showForm = ref(false)

const questions = [
  { key: 'name', label: '¿Cuál es tu nombre?', type: 'text' as const, placeholder: 'Tu nombre', required: true },
  { key: 'email', label: '¿Cuál es tu correo electrónico?', type: 'email' as const, placeholder: 'tu@email.com', required: true },
  { key: 'social', label: '¿Cuáles son tus redes sociales?', type: 'text' as const, placeholder: '@usuario en Instagram, TikTok…', required: true },
  { key: 'niche', label: '¿Cuál es tu temática?', type: 'text' as const, placeholder: 'Ej.: moda, estilo de vida, fitness…', required: true },
  { key: 'message', label: 'Cuéntanos sobre ti', type: 'textarea' as const, placeholder: 'Tu estilo, tu audiencia, qué tipo de marcas te interesan…', required: true },
]
</script>

<template>
  <section id="creadores" class="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div class="relative order-2 mx-auto w-full max-w-[35rem] lg:order-1 lg:mx-0" aria-label="Razones para creadores">
        <div class="absolute -right-6 top-8 hidden h-36 w-36 rounded-full border border-line lg:block" />
        <div class="relative rounded-[2.25rem] border border-line bg-soft p-5 shadow-[0_28px_80px_rgba(17,17,17,0.08)] sm:p-7">
          <div class="flex items-center justify-between border-b border-line pb-5">
      
          </div>

          <ol class="divide-y divide-line">
            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">01</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Marcas afines.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Colaboraciones que tienen sentido con tu estilo.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">02</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Menos caos.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Menos mensajes perdidos y todo más directo desde el inicio.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">03</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Briefs bien definidos.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Sabes qué se espera, qué se entrega y para qué.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">04</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Libertad creativa.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Contenido natural, con margen para que siga siendo tuyo.</p>
              </div>
            </li>
          </ol>

          <p class="border-t border-line pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
            
          </p>
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <p class="font-soft text-sm font-semibold uppercase tracking-[0.26em] text-muted">Para creadores</p>
        <h2 class="mt-5 font-headline text-4xl font-semibold leading-none tracking-[-0.045em] text-text sm:text-6xl">
          Colabora con marcas que van contigo.
        </h2>
        <p class="mt-7 max-w-xl text-lg leading-8 text-muted">
          Si haces contenido con gusto, tienes una estética cuidada y quieres trabajar con marcas que encajen con tu estilo, lagamberra es para ti.
        </p>
        <p class="mt-8 max-w-md border-t border-line pt-5 text-base leading-7 text-text">
          Una forma más sencilla de colaborar con marcas sin perder tu voz, tu criterio ni tu manera de crear.
        </p>
        <button class="mt-9 inline-flex cursor-pointer rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-text" @click="showForm = true">
          Quiero unirme
        </button>
      </div>
    </div>
  </section>

  <TypeformModal :show="showForm" @close="showForm = false">
    <TypeformForm :questions="questions" form-type="creators" @close="showForm = false" />
  </TypeformModal>
</template>
