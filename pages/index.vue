<template>
  <div>
    <h1>IET Website 2021</h1>
    <Team />
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import Team from "~/components/Team.vue";
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    Team,
    Gallery,
    ContactSection,
  },
};
</script>
