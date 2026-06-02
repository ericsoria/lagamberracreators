<script setup lang="ts">
interface Question {
  key: string
  label: string
  type: 'text' | 'email' | 'url' | 'textarea'
  placeholder?: string
  required?: boolean
}

const props = defineProps<{
  questions: Question[]
  formType: 'brands' | 'creators'
}>()

const emit = defineEmits<{
  close: []
}>()

const currentStep = ref(0)
const formData = reactive<Record<string, string>>({})
const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')
const inputRef = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)

props.questions.forEach(q => {
  formData[q.key] = ''
})

const totalSteps = computed(() => props.questions.length)
const isLastStep = computed(() => currentStep.value === totalSteps.value - 1)
const currentQuestion = computed(() => props.questions[currentStep.value])
const progressPercent = computed(() => ((currentStep.value) / totalSteps.value) * 100)

const completedQuestions = computed(() =>
  props.questions.slice(0, currentStep.value)
)

const canProceed = computed(() => {
  const q = currentQuestion.value
  if (!q) return false
  if (!q.required) return true
  return formData[q.key]?.trim().length > 0
})

function truncate(val: string, max = 48) {
  if (val.length <= max) return val
  return val.slice(0, max) + '…'
}

function nextStep() {
  if (!canProceed.value || !currentQuestion.value) {
    errorMsg.value = 'Este campo es obligatorio'
    return
  }

  const q = currentQuestion.value
  const val = formData[q.key]

  if (q.type === 'email' && val.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(val.trim())) {
      errorMsg.value = 'Correo electrónico no válido'
      return
    }
  }

  if (q.type === 'url' && val.trim()) {
    try {
      new URL(val.trim())
    } catch {
      errorMsg.value = 'URL no válida'
      return
    }
  }

  errorMsg.value = ''

  if (isLastStep.value) {
    submitForm()
  } else {
    currentStep.value++
    nextTick(() => inputRef.value?.focus())
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
    errorMsg.value = ''
    nextTick(() => inputRef.value?.focus())
  }
}

async function submitForm() {
  submitting.value = true
  errorMsg.value = ''

  try {
    await $fetch('/api/submit-form', {
      method: 'POST',
      body: {
        type: props.formType,
        ...formData
      }
    })
    submitted.value = true
  } catch {
    errorMsg.value = 'Ha habido un error al enviar. Inténtalo de nuevo.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="p-6 sm:p-8">
    <template v-if="!submitted">
      <div class="mb-6 flex items-center gap-3">
        <div class="h-1 flex-1 overflow-hidden rounded-full bg-line">
          <div
            class="h-full rounded-full bg-text transition-all duration-500 ease-out"
            :style="{ width: `${progressPercent}%` }"
          />
        </div>
        <span class="shrink-0 font-body text-xs font-semibold tracking-[0.12em] text-muted">
          {{ currentStep + 1 }} / {{ totalSteps }}
        </span>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div
          v-if="completedQuestions.length > 0"
          class="order-2 lg:order-1 lg:border-r lg:border-line lg:pr-8"
        >
            <p class="mb-4 font-body text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
              Tus respuestas
            </p>
            <TransitionGroup
              name="summary-item"
              tag="ul"
              class="space-y-4"
            >
              <li
                v-for="q in completedQuestions"
                :key="q.key"
                class="flex items-start gap-3"
              >
                <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-text/10">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" class="text-text/60" />
                  </svg>
                </span>
                <div class="min-w-0">
                  <p class="truncate font-body text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    {{ q.label }}
                  </p>
                  <p class="truncate font-body text-base text-text">
                    {{ truncate(formData[q.key]) }}
                  </p>
                </div>
              </li>
            </TransitionGroup>
          </div>

        <div class="order-1 lg:order-2">
          <Transition name="step" mode="out-in">
            <div :key="currentStep" class="min-h-[260px]">
              <p class="font-headline text-[1.65rem] font-semibold leading-tight tracking-[-0.04em] text-text sm:text-3xl">
                {{ currentQuestion?.label }}
              </p>

              <div class="mt-8" :class="{ 'animate-shake': errorMsg }">
                <input
                  v-if="currentQuestion?.type !== 'textarea'"
                  :ref="(el) => { inputRef = el as HTMLInputElement }"
                  v-model="formData[currentQuestion!.key]"
                  :type="currentQuestion?.type || 'text'"
                  :placeholder="currentQuestion?.placeholder"
                  class="w-full border-0 border-b-2 bg-transparent pb-3 font-body text-lg leading-snug text-text placeholder:text-muted/40 transition-colors duration-200 hover:border-text/30 focus:border-text focus:outline-none focus-visible:outline-none"
                  :class="errorMsg ? 'border-muted/60' : 'border-line'"
                  @keydown.enter="nextStep"
                >
                <textarea
                  v-else
                  :ref="(el) => { inputRef = el as HTMLTextAreaElement }"
                  v-model="formData[currentQuestion!.key]"
                  :placeholder="currentQuestion?.placeholder"
                  rows="4"
                  class="w-full resize-none border-0 border-b-2 bg-transparent pb-3 font-body text-lg leading-snug text-text placeholder:text-muted/40 transition-colors duration-200 hover:border-text/30 focus:border-text focus:outline-none focus-visible:outline-none"
                  :class="errorMsg ? 'border-muted/60' : 'border-line'"
                />
              </div>

              <p v-if="errorMsg" class="mt-3 flex items-center gap-2 font-body text-sm text-muted">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" class="shrink-0">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.2" />
                  <path d="M7 4.5V7.5M7 9V9.01" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
                </svg>
                {{ errorMsg }}
              </p>
            </div>
          </Transition>

          <div class="mt-8 flex items-center justify-between">
            <button
              v-if="currentStep > 0"
              class="cursor-pointer font-body text-sm font-semibold uppercase tracking-[0.16em] text-muted transition duration-300 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30"
              @click="prevStep"
            >
              Atrás
            </button>
            <div v-else />

            <button
              class="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bg transition duration-300 hover:-translate-y-0.5 hover:bg-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30 disabled:pointer-events-none disabled:opacity-40"
              :disabled="submitting || !canProceed"
              @click="nextStep"
            >
              <template v-if="submitting">
                <svg
                  class="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                </svg>
                Enviando…
              </template>
              <template v-else-if="isLastStep">Enviar</template>
              <template v-else>Siguiente</template>
            </button>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <Transition appear name="thanks">
        <div class="flex min-h-[320px] flex-col items-center justify-center text-center">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-text text-bg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p class="mt-6 font-headline text-3xl font-semibold tracking-[-0.04em] text-text">
            ¡Gracias!
          </p>
          <p class="mt-3 max-w-xs font-body text-base leading-6 text-muted">
            Hemos recibido tu información. Te escribiremos pronto.
          </p>
          <button
            class="mt-8 inline-flex cursor-pointer rounded-full border border-line px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-text transition duration-300 hover:-translate-y-0.5 hover:border-text hover:bg-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/30"
            @click="$emit('close')"
          >
            Cerrar
          </button>
        </div>
      </Transition>
    </template>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: no-preference) {
  .step-enter-active,
  .step-leave-active {
    transition: all 0.2s ease;
  }
  .step-enter-from {
    opacity: 0;
    transform: translateY(14px);
  }
  .step-leave-to {
    opacity: 0;
    transform: translateY(-14px);
  }

  .thanks-enter-active {
    transition: all 0.35s ease;
  }
  .thanks-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }

  .summary-item-enter-active {
    transition: all 0.3s ease;
  }
  .summary-item-enter-from {
    opacity: 0;
    transform: translateX(-10px);
  }
  .summary-item-move {
    transition: transform 0.3s ease;
  }
}

@media (prefers-reduced-motion: reduce) {
  .step-enter-active,
  .step-leave-active,
  .thanks-enter-active,
  .summary-item-enter-active,
  .summary-item-move {
    transition: none;
  }
  .step-enter-from,
  .step-leave-to,
  .thanks-enter-from,
  .summary-item-enter-from {
    opacity: 0;
  }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}

.animate-shake {
  animation: shake 0.35s ease;
}
</style>
