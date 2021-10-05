<template>
  <div>
    <HeroSection />
    <AboutSection />
    <Events />
    <Workshops />
    <Team />
    <ContactSection />
  </div>
</template>

<script>
import HeroSection from "~/components/HeroSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import Events from "~/components/Events.vue";
import Workshops from "~/components/Workshops.vue";
import Team from "~/components/Team.vue";
import ContactSection from "~/components/ContactSection.vue";

export default {
  components: {
    HeroSection,
    AboutSection,
    Events,
    Workshops,
    Team,
    ContactSection,
  },
};
</script>
