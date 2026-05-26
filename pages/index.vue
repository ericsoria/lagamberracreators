<script setup lang="ts">
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "lagamberra",
  url: "https://lagamberra.xyz",
  description: "Lugar donde marcas y creadores conectan para crear contenido social natural.",
  sameAs: ["https://instagram.com/lagamberracreators"]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "lagamberra",
  url: "https://lagamberra.xyz",
  description: "Landing de lagamberra, lugar donde marcas y creadores conectan para crear contenido social."
}

useHead({
  title: "lagamberra — donde marcas y creadores conectan",
  meta: [
    {
      name: "description",
      content: "Lagamberra conecta marcas y creadores para crear contenido social natural, real y alineado con cada marca."
    },
    {
      property: "og:title",
      content: "lagamberra — donde marcas y creadores conectan"
    },
    {
      property: "og:description",
      content: "Un lugar para crear collaborations entre marcas y creadores con contenido social real."
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
      content: "lagamberra — donde marcas y creadores conectan"
    },
    {
      name: "twitter:description",
      content: "Conectamos marcas y creadores para crear contenido social real."
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
  <main>
    <Navbar />
    <HeroSection />
    <CreatorsSection />
    <BrandsSection />
    <CollabsSection />
    <FooterSection />
  </main>
</template>
