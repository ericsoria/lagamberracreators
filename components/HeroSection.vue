<template>
  <section id="hero" class="relative min-h-screen scroll-mt-24 overflow-hidden px-5 pt-28 sm:px-8 lg:px-12">
    <div class="mx-auto grid max-w-7xl items-center gap-12 pb-16 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
      <div class="max-w-3xl">
        <p class="reveal-in font-soft text-sm font-semibold uppercase tracking-[0.26em] text-muted">
          Creadores × Marcas
        </p>
        <h1 class="reveal-in reveal-delay-1 mt-6 font-headline text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-text sm:text-7xl lg:text-8xl">
          Donde marcas y creadores conectan.
        </h1>
        <p class="reveal-in reveal-delay-2 mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">
          Un lugar para crear colaboraciones más naturales, más claras y con contenido que sí encaja en redes.
        </p>
        <div class="reveal-in reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#creadores" class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-text">
            Soy creador
          </a>
          <a href="#marcas" class="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-text transition duration-300 hover:-translate-y-0.5 hover:border-text hover:bg-soft">
            Soy una marca
          </a>
        </div>
        <p class="reveal-in reveal-delay-3 mt-6 text-sm text-muted">
          
        </p>
      </div>

      <div class="reveal-in reveal-delay-2 relative">
        <div class="absolute -left-5 top-10 hidden h-28 w-28 rounded-full bg-soft lg:block" />
        <figure class="relative overflow-hidden rounded-[2rem] border border-line bg-soft shadow-sm">
          <img
            src="~/assets/images/hero-editorial.jpg"
            alt="Creadora grabando contenido para una marca de lifestyle."
            width="1280"
            height="1600"
            class="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.02]"
          >
        </figure>
      </div>
    </div>
  </section>
</template>
