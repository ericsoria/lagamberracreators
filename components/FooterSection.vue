<template>
  <footer class="border-t border-line px-5 py-12 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 rounded-[2rem] bg-accent px-6 py-12 text-bg sm:px-10 lg:px-14 lg:py-16">
        <h2 class="font-headline text-4xl font-semibold leading-none tracking-[-0.045em] sm:text-6xl">
          ¿Creamos algo juntos?
        </h2>
        <p class="mt-5 max-w-xl text-lg leading-8 text-bg/75">
          Si eres creador o marca, este es el sitio para empezar.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#creadores" class="inline-flex justify-center rounded-full bg-bg px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-text transition duration-300 hover:-translate-y-0.5 hover:bg-soft">
            Soy creador
          </a>
          <a href="#marcas" class="inline-flex justify-center rounded-full border border-bg/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-bg hover:text-text">
            Soy una marca
          </a>
        </div>
      </div>

      <div class="grid gap-10 md:grid-cols-2">
        <div>
          <p class="font-headline text-2xl font-semibold tracking-tight">lagamberra</p>
          <p class="mt-3 max-w-sm text-muted">Donde marcas y creadores conectan.</p>
        </div>
        <nav class="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium md:justify-end" aria-label="Navegación de footer">
          <a href="#creadores" class="hover:underline">Creadores</a>
          <a href="#marcas" class="hover:underline">Marcas</a>
          <a href="https://instagram.com/lagamberra" rel="noreferrer" target="_blank" class="hover:underline">Instagram</a>
          <a href="mailto:hola@lagamberra.xyz" class="hover:underline">Contacto</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
