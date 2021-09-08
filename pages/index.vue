<template>
  <div>
    <h1>IET Website 2021</h1>
    <Team />
    <Workshops />
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import Team from "~/components/Team.vue";
import Workshops from "~/components/Workshops.vue";
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    Team,
    Workshops,
    Gallery,
    ContactSection,
  },
};
</script>
