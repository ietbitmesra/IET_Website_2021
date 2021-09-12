<template>
  <div>
    <AboutSection />
    <Team />
    <Workshops />
    <Events />
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import AboutSection from "~/components/AboutSection.vue";
import Team from "~/components/Team.vue";
import Workshops from "~/components/Workshops.vue";
import Events from "~/components/Events.vue";
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    AboutSection,
    Team,
    Workshops,
    Gallery,
    Events,
    ContactSection,
  },
};
</script>
