<script setup lang="ts">
const props = withDefaults(defineProps<{
  show?: boolean
}>(), {
  show: false
})

const emit = defineEmits<{
  close: []
}>()

const modalRef = ref<HTMLElement | null>(null)
const closeBtnRef = ref<HTMLButtonElement | null>(null)

const close = () => emit('close')

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
  if (e.key === 'Tab' && modalRef.value) trapFocus(e)
}

function trapFocus(e: KeyboardEvent) {
  const focusable = modalRef.value!.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  if (focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

watch(() => props.show, (val) => {
  if (!import.meta.client) return
  document.body.style.overflow = val ? 'hidden' : ''
  if (val) nextTick(() => closeBtnRef.value?.focus())
}, { immediate: true })
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
        aria-label="Formulario"
        class="fixed inset-0 z-[60] flex items-end justify-center bg-bg/80 p-0 backdrop-blur-sm sm:items-center sm:p-5"
        @click.self="close"
      >
        <div
          class="relative w-full max-w-3xl rounded-t-[2.25rem] border border-line bg-bg shadow-[0_28px_80px_rgba(17,17,17,0.12)] sm:rounded-[2.25rem]"
        >
          <button
            ref="closeBtnRef"
            class="absolute right-5 top-5 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted transition duration-300 hover:bg-soft hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30 sm:right-6 sm:top-6"
            aria-label="Cerrar formulario"
            @click="close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .modal-enter-active {
    transition: opacity 0.25s ease;
  }
  .modal-enter-active > div {
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .modal-leave-active {
    transition: opacity 0.2s ease;
  }
  .modal-leave-active > div {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .modal-enter-from {
    opacity: 0;
  }
  .modal-enter-from > div {
    opacity: 0;
    transform: scale(0.95) translateY(16px);
  }
  .modal-leave-to {
    opacity: 0;
  }
  .modal-leave-to > div {
    opacity: 0;
    transform: scale(0.97) translateY(8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal-enter-active,
  .modal-leave-active {
    transition: none;
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
}
</style>
