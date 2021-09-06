<template>
  <div>
    <h1>IET Website 2021</h1>
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    Gallery,
    ContactSection,
  },
};
</script>
