<script setup lang="ts">
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "lagamberra",
  url: "https://lagamberra.xyz",
  description: "Lugar donde marcas y creadores conectan para crear contenido natural para redes sociales.",
  sameAs: ["https://instagram.com/lagamberracreators"]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "lagamberra",
  url: "https://lagamberra.xyz",
  description: "Página de lagamberra, un lugar donde marcas y creadores conectan para crear contenido para redes sociales."
}

useHead({
  title: "lagamberra x creators — Donde marcas y creadores conectan",
  meta: [
    {
      name: "description",
      content: "Lagamberra conecta marcas y creadores para crear contenido natural, real y alineado con cada marca."
    },
    {
      property: "og:title",
      content: "lagamberra x creators — Donde marcas y creadores conectan"
    },
    {
      property: "og:description",
      content: "Un lugar para crear colaboraciones entre marcas y creadores con contenido real para redes sociales."
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://lagamberra.xyz/"
    },
    {
      property: "og:image",
      content: "https://lagamberra.xyz/og-image.jpg"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "lagamberra x creators — Donde marcas y creadores conectan"
    },
    {
      name: "twitter:description",
      content: "Conectamos marcas y creadores para crear contenido real para redes sociales."
    },
    {
      name: "twitter:image",
      content: "https://lagamberra.xyz/og-image.jpg"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://lagamberra.xyz/"
    }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(organizationSchema)
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(websiteSchema)
    }
  ]
})
</script>

<template>
  <a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[60] focus:rounded-full focus:bg-text focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-bg">
    Saltar al contenido
  </a>
  <main id="contenido">
    <Navbar />
    <HeroSection />
    <CreatorsSection />
    <BrandsSection />
    <CollabsSection />
    <FooterSection />
  </main>
</template>
