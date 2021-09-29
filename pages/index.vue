<template>
  <div>
    <HeroSection />
    <AboutSection />
    <Team />
    <Workshops />
    <Events />
    <Gallery id="event-gallery" />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import Team from "~/components/Team.vue";
import Workshops from "~/components/Workshops.vue";
import Events from "~/components/Events.vue";
import Gallery from "~/components/Gallery.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    Team,
    Workshops,
    Gallery,
    Events,
    ContactSection,
  },
};
</script>
