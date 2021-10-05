<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <Logo />
      </div>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style scoped>
.header {
  background: transparent;
  border-bottom: 2px solid #ffffff;
  backdrop-filter: blur(0.5rem);
  position: sticky;
  top: 0;
  z-index: 5;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  min-height: 9vh;
  width: 95%;
  position: relative;
}
.logo {
  display: flex;
  align-items: center;
}
</style>
