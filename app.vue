<template>
  <NuxtPage />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f7f3ed;
  color: #111111;
  font-family: "Anonymous Pro", monospace;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #1f2a20;
  color: #f7f3ed;
}

a,
button {
  outline-offset: 4px;
}

a:focus-visible,
button:focus-visible {
  outline: 2px solid #1f2a20;
}

.reveal-in {
  animation: reveal-in 780ms ease both;
}

.reveal-delay-1 {
  animation-delay: 120ms;
}

.reveal-delay-2 {
  animation-delay: 240ms;
}

.reveal-delay-3 {
  animation-delay: 360ms;
}

@keyframes reveal-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}
</style>
