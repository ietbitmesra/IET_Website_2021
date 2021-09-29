<template>
  <div class="hero-section" id="home">
    <div class="cta-div">
      <IETHomeSvg />
      <h2 class="tagline">Learn. Grow. Excel</h2>
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
.tagline {
  color: #adadad;
  font-weight: 300;
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
}
</style>