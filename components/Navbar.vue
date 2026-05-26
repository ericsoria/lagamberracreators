<script setup lang="ts">
const isScrolled = ref(false)

const updateNavbar = () => {
  isScrolled.value = window.scrollY > 12
}

onMounted(() => {
  updateNavbar()
  window.addEventListener("scroll", updateNavbar, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener("scroll", updateNavbar)
})
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300',
      isScrolled ? 'border-b border-line bg-bg/95 backdrop-blur' : 'border-b border-transparent bg-transparent'
    ]"
  >
    <nav class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Navegación principal">
      <a href="#hero" class="font-headline text-lg font-semibold tracking-tight text-text">
        <img src="~/assets/images/logo-trans.png" alt="logo lagamberra x creators" width="250px">
      </a>

      <div class="flex items-center gap-5 text-sm font-medium text-text sm:gap-8">
        <a href="#creadores" class="group relative hidden sm:inline-flex">
          Creadores
          <span class="absolute -bottom-1 left-0 h-px w-0 bg-text transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#marcas" class="group relative hidden sm:inline-flex">
          Marcas
          <span class="absolute -bottom-1 left-0 h-px w-0 bg-text transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="#creadores"
          class="rounded-full border border-text px-4 py-2 text-xs uppercase tracking-[0.18em] transition duration-300 hover:bg-text hover:text-bg"
          aria-label="Aplicar como creador o marca"
        >
          Aplicar
        </a>
      </div>
    </nav>
  </header>
</template>
