<template>
  <div>
    <Team />
    <Workshops />
    <Events />
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import Team from "~/components/Team.vue";
import Workshops from "~/components/Workshops.vue";
import Events from "~/components/Events.vue";
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    Team,
    Workshops,
    Gallery,
    Events,
    ContactSection,
  },
};
</script>
