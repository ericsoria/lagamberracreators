<script setup lang="ts">
const showForm = ref(false)

const questions = [
  { key: 'name', label: '¿Cuál es tu nombre?', type: 'text' as const, placeholder: 'Tu nombre', required: true },
  { key: 'email', label: '¿Cuál es tu correo electrónico?', type: 'email' as const, placeholder: 'tu@email.com', required: true },
  { key: 'company', label: '¿Cuál es el nombre de tu empresa?', type: 'text' as const, placeholder: 'Nombre de la empresa', required: true },
  { key: 'website', label: '¿Cuál es la web de tu marca?', type: 'url' as const, placeholder: 'https://tumarca.com', required: false },
  { key: 'message', label: 'Cuéntanos sobre tu proyecto', type: 'textarea' as const, placeholder: 'Háblanos de tu marca, qué tipo de contenido buscas…', required: true },
]
</script>

<template>
  <section id="marcas" class="scroll-mt-24 bg-soft px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="font-soft text-sm font-semibold uppercase tracking-[0.26em] text-muted">Para marcas</p>
        <h2 class="mt-5 font-headline text-4xl font-semibold leading-none tracking-[-0.045em] text-text sm:text-6xl">
          Contenido para redes sin hacerlo todo tú.
        </h2>
        <p class="mt-7 max-w-xl text-lg leading-8 text-muted">
          Conectamos tu marca con creadores que entienden tu estética, tu público y el tipo de contenido que funciona en redes sociales.
        </p>
        <button class="mt-9 inline-flex cursor-pointer rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-text" @click="showForm = true">
          Quiero creadores para mi marca
        </button>
      </div>

      <div class="relative mx-auto w-full max-w-[35rem] lg:mx-0 lg:ml-auto" aria-label="Razones para marcas">
        <div class="absolute -left-6 top-8 hidden h-36 w-36 rounded-full border border-line lg:block" />
        <div class="relative rounded-[2.25rem] border border-line bg-bg p-5 shadow-[0_28px_80px_rgba(17,17,17,0.08)] sm:p-7">
          <div class="flex items-center justify-between border-b border-line pb-5">
           
          </div>

          <ol class="divide-y divide-line">
            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">01</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Creadores alineados.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Voces que encajan con tu estética y tu público.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">02</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Contenido natural.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Piezas para redes que no parecen anuncios.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">03</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Gestión más fácil.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Menos ruido, brief más sencillo y expectativas bien definidas.</p>
              </div>
            </li>

            <li class="grid grid-cols-[3.5rem_1fr] gap-4 py-6">
              <span class="font-headline text-4xl font-semibold leading-none tracking-[-0.08em] text-text/25">04</span>
              <div>
                <p class="text-lg font-semibold leading-6 tracking-[-0.04em] text-text">Más contenido.</p>
                <p class="mt-2 text-sm leading-6 text-muted">Sin depender siempre de tu producción interna.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>

  <TypeformModal :show="showForm" @close="showForm = false">
    <TypeformForm :questions="questions" form-type="brands" @close="showForm = false" />
  </TypeformModal>
</template>
