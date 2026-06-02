<script setup lang="ts">
const collabs = [
  {
    poster: "https://static.lagamberra.xyz/public/landing/pro-pilates-thumb.jpg",
    video: "https://static.lagamberra.xyz/public/landing/pro-pilates.mp4",
    label: "Reel",
    platform: "instagram.com/",
    brand: "@propilates.bcn",
    creator: "@iwesmendieta",
    collaborationUrl: "https://www.instagram.com/p/DYjVptPtQ7O/",
    alt: "Colaboración entre Pro Pilates e Iwes Mendieta"
  },
  {
    poster: "https://static.lagamberra.xyz/public/landing/eva-666-thumb.jpg",
    video: "https://static.lagamberra.xyz/public/landing/eva-666.mp4",
    label: "Reel",
    platform: "instagram.com/",
    brand: "@666.labuenamuerte",
    creator: "@evaevaristax",
    collaborationUrl: "https://www.instagram.com/p/DMsYFSgixa1/",
    alt: "Colaboración entre 666 La Buena Muerte y Eva Evarista"
  },
  {
    poster: "https://static.lagamberra.xyz/public/landing/kiosko-thumb.jpg",
    video: "https://static.lagamberra.xyz/public/landing/kiosko.mp4",
    label: "Reel",
    platform: "instagram.com/",
    brand: "@kioskobox",
    creator: "@rachel9___",
    collaborationUrl: "https://www.instagram.com/p/CxyKKs4ogtb/",
    alt: "Colaboración entre Rachel9 y Kioskobox"
  },
  {
    poster: "https://static.lagamberra.xyz/public/landing/iwes-movanna-thumb.jpg",
    video: "https://static.lagamberra.xyz/public/landing/iwes-movanna.mp4",
    label: "Reel",
    platform: "instagram.com/",
    brand: "@movanastudio",
    creator: "@iwesmendieta",
    collaborationUrl: "https://www.instagram.com/reel/DShXRn0DGhu/",
    alt: "Colaboración entre Iwes Mendieta y Movana Studio."
  }
]

const mediaUrl = (path: string, folder: "images" | "videos") => {
  if (path.startsWith("http") || path.startsWith("/")) {
    return path
  }

  return `/${folder}/${path}`
}

const socialUrl = (platform: string, handle: string) => `https://${platform}${handle.replace("@", "")}`
const externalUrl = (url: string) => url.startsWith("http") ? url : `https://${url}`

const videoEls = ref<HTMLVideoElement[]>([])
const playing = ref<Record<number, boolean>>({})
const muted = ref<Record<number, boolean>>({ 0: true })

const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
  if (el) {
    videoEls.value[index] = el
    muted.value[index] = el.muted
  }
}

const togglePlayback = async (index: number) => {
  const video = videoEls.value[index]

  if (!video) {
    return
  }

  if (video.paused) {
    await video.play()
    return
  }

  video.pause()
}

const toggleMute = (index: number) => {
  const video = videoEls.value[index]

  if (!video) {
    return
  }

  video.muted = !video.muted
  muted.value[index] = video.muted
}
</script>

<template>
  <section id="colabos" class="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="max-w-3xl">
        <p class="font-soft text-sm font-semibold uppercase tracking-[0.26em] text-muted">Nuestras colaboraciones</p>
        <h2 class="mt-5 font-headline text-4xl font-semibold leading-none tracking-[-0.045em] text-text sm:text-6xl">
          Contenido que se siente de aquí.
        </h2>
        <p class="mt-7 max-w-2xl text-lg leading-8 text-muted">
          Reels, TikToks, historias y posts listos para mostrar cómo se vive una marca en la calle, en la mesa y en cámara.
        </p>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <figure
          v-for="(collab, index) in collabs"
          :key="collab.video || collab.poster"
          :class="[
            'group relative overflow-hidden rounded-[2rem] border border-text/10 bg-text p-2 shadow-[0_24px_70px_rgba(17,17,17,0.14)]',
            index === 1 || index === 3 ? 'lg:translate-y-12' : ''
          ]"
        >
          <div class="relative overflow-hidden rounded-[1.5rem] bg-soft">
            <video
              v-if="collab.video"
              :ref="(el) => setVideoRef(el as HTMLVideoElement | null, index)"
              :src="mediaUrl(collab.video, 'videos')"
              :poster="mediaUrl(collab.poster, 'images')"
              muted
              loop
              playsinline
              preload="none"
              tabindex="0"
              :aria-label="`${collab.label} de ${collab.brand} con ${collab.creator}. Clic para reproducir o pausar.`"
              @play="playing[index] = true"
              @pause="playing[index] = false"
              @click="togglePlayback(index)"
              @keydown.enter.prevent="togglePlayback(index)"
              @keydown.space.prevent="togglePlayback(index)"
              class="aspect-[9/16] h-full w-full cursor-pointer object-cover"
            />
            <img
              v-else
              :src="mediaUrl(collab.poster, 'images')"
              :alt="collab.alt"
              width="900"
              height="1600"
              loading="lazy"
              class="aspect-[9/16] h-full w-full object-cover"
            >

            <div class="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 text-bg">
              <span class="max-w-[48%] rounded-full bg-text/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <a
                  :href="socialUrl(collab.platform, collab.brand)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pointer-events-auto block cursor-pointer truncate rounded-sm"
                  :aria-label="`Abrir Instagram de ${collab.brand}`"
                  @click.stop
                >
                  {{ collab.brand }}
                </a>
              </span>
              <span class="max-w-[48%] rounded-full bg-text/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                <a
                  :href="socialUrl(collab.platform, collab.creator)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="pointer-events-auto block cursor-pointer truncate rounded-sm"
                  :aria-label="`Abrir Instagram de ${collab.creator}`"
                  @click.stop
                >
                  {{ collab.creator }}
                </a>
              </span>
            </div>

            <a
              v-if="collab.collaborationUrl"
              :href="externalUrl(collab.collaborationUrl)"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute bottom-4 left-4 z-10 cursor-pointer rounded-full bg-text/55 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-bg backdrop-blur transition duration-300 hover:bg-text"
              :aria-label="`Ver colaboración de ${collab.brand} con ${collab.creator}`"
              @click.stop
            >
              Ver colaboración
            </a>

            <div v-if="collab.video" class="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
              <button
                v-if="!playing[index]"
                type="button"
                class="pointer-events-auto grid size-16 cursor-pointer place-items-center rounded-full border border-bg/70 bg-transparent text-bg shadow-[0_18px_50px_rgba(17,17,17,0.28)] backdrop-blur-[2px] transition duration-300 hover:scale-105 hover:border-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bg"
                aria-label="Reproducir vídeo"
                @click.stop="togglePlayback(index)"
              >
                <svg class="ml-1 size-7" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M8 5.4v13.2L18.5 12 8 5.4Z" />
                </svg>
              </button>

              <button
                type="button"
                class="pointer-events-auto absolute bottom-4 right-4 grid size-11 cursor-pointer place-items-center rounded-full border border-bg/60 bg-transparent text-bg shadow-[0_12px_30px_rgba(17,17,17,0.22)] backdrop-blur-[2px] transition duration-300 hover:border-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bg"
                :aria-label="muted[index] ? 'Activar sonido' : 'Silenciar vídeo'"
                @click.stop="toggleMute(index)"
              >
                <svg v-if="muted[index]" class="size-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 9.5v5h3.2l4.8 3.8V5.7L7.7 9.5H4.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8" />
                  <path d="m16.2 10.2 4.1 4.1m0-4.1-4.1 4.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />
                </svg>
                <svg v-else class="size-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.5 9.5v5h3.2l4.8 3.8V5.7L7.7 9.5H4.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8" />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />
                  <path d="M17.8 6.2a8 8 0 0 1 0 11.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" />
                </svg>
              </button>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>
