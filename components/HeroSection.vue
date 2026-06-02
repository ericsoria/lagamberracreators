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
          Un lugar para crear colaboraciones más naturales, mejor enfocadas y con contenido que encaja de verdad en redes.
        </p>
        <div class="reveal-in reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#creadores" class="inline-flex cursor-pointer items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-text">
            Soy creador
          </a>
          <a href="#marcas" class="inline-flex cursor-pointer items-center justify-center rounded-full border border-line px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-text transition duration-300 hover:-translate-y-0.5 hover:border-text hover:bg-soft">
            Soy una marca
          </a>
        </div>
        <p class="reveal-in reveal-delay-3 mt-6 text-sm text-muted">
          
        </p>
      </div>

      <div class="reveal-in reveal-delay-2 relative" aria-label="Collage editorial de contenido creado por lagamberra">

        <div class="relative mx-auto max-w-[36rem] lg:mx-0 lg:ml-auto">
          <div class="absolute left-3 top-8 hidden w-44 -rotate-6 rounded-[1.4rem] border border-line bg-bg p-3 shadow-[0_18px_55px_rgba(17,17,17,0.1)] sm:block">
            <p class="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">Brief</p>
            <p class="mt-2 text-sm leading-5 text-text">Contenido natural para mostrar la marca como se vive.</p>
          </div>

          <figure class="relative mx-auto w-[72%] overflow-hidden rounded-[2rem] border border-text/10 bg-text p-2 shadow-[0_30px_90px_rgba(17,17,17,0.18)] sm:w-[62%]">
            <div class="relative overflow-hidden rounded-[1.45rem] bg-soft">
              <img
                src="https://static.lagamberra.xyz/public/landing/pro-pilates-thumb.jpg"
                alt="Poster vertical de una colaboración real entre creadora y marca."
                width="900"
                height="1600"
                class="aspect-[9/16] w-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-text/65 via-transparent to-text/25" />
            </div>
          </figure>

          <div class="absolute -right-1 top-10 w-[38%] rotate-6 overflow-hidden rounded-[1.5rem] border border-line bg-bg p-2 shadow-[0_20px_60px_rgba(17,17,17,0.12)] sm:right-4 sm:w-[34%]">
            <img
              src="https://static.lagamberra.xyz/public/landing/eva-666-thumb.jpg"
              alt="Poster vertical de una colaboración de estilo de vida."
              width="540"
              height="960"
              class="aspect-[9/16] rounded-[1rem] object-cover"
            >
            
          </div>

          <div class="absolute -left-1 bottom-12 w-[40%] -rotate-3 overflow-hidden rounded-[1.5rem] border border-line bg-bg p-2 shadow-[0_20px_60px_rgba(17,17,17,0.12)] sm:left-4 sm:w-[34%]">
            <img
              src="https://static.lagamberra.xyz/public/landing/kiosko-thumb.jpg"
              alt="Poster vertical de una colaboración para redes sociales."
              width="540"
              height="960"
              class="aspect-[9/16] rounded-[1rem] object-cover"
            >
            
          </div>

          <div class="absolute bottom-2 right-2 max-w-[15rem] rounded-[1.35rem] border border-line bg-bg/95 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.12)] backdrop-blur sm:right-10">
            <p class="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted">lagamberra x creators</p>
            <p class="mt-2 text-base font-semibold leading-5 tracking-[-0.03em] text-text">Colaboraciones que son contenido, no campañas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
