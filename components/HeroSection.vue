<template>
  <div class="hero-section" id="home">
    <div class="cta-div">
      <IETHomeSvg />
      <h2 class="tagline">Learn. Grow. Excel</h2>
      <button class="btn primary-btn contact-btn">Contact</button>
    </div>
    <div class="icons-div">
      <IconTilesSvg />
    </div>
  </div>
</template>

<script>
import IETHomeSvg from "~/components/IETHomeSvg.vue";
import IconTilesSvg from "~/components/IconTilesSvg.vue";

export default {
  components: {
    IETHomeSvg,
    IconTilesSvg,
  },
};
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  margin: auto;
  max-width: 1300px;
}
.cta-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tagline {
  color: #adadad;
  font-weight: 300;
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
}
.contact-btn {
  margin-top: 2rem;
  min-width: 60%;
}
@media only screen and (max-width: 1220px) {
  .hero-section {
    padding: 0 1rem;
  }
}
@media only screen and (max-width: 1000px) {
  .hero-section {
    flex-direction: column;
    justify-content: space-evenly;
  }
  .icons-div {
    margin-bottom: 4rem;
  }
  .cta-div {
    margin-top: 2rem;
  }
  .contact-btn {
    margin-top: 1rem;
  }
}
</style>