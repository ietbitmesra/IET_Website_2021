<template>
  <header class="header">
    <nav class="nav">
      <div class="logo" @click="scrollToTop">
        <Logo />
      </div>
      <ul class="ul ul--hidden">
        <li class="homelink">
          <p class="links" @click="scrollToTop">Home</p>
        </li>
        <li>
          <p class="links" @click="scrollToSection('about')">About</p>
        </li>
        <li>
          <p class="links" @click="scrollToSection('events')">Events</p>
        </li>
        <li>
          <p class="links" @click="scrollToSection('workshops')">Workshops</p>
        </li>
        <li>
          <p class="links" @click="scrollToSection('team')">Team</p>
        </li>
        <li>
          <p class="links" @click="scrollToSection('contact')">Contact</p>
        </li>
      </ul>

      <div class="menu" @click="toggleNav">
        <div class="menu__line line"></div>
        <div class="menu__line line"></div>
        <div class="menu__line menu__cross cross1"></div>
        <div class="menu__line menu__cross cross2"></div>
        <div class="menu__line line"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import { scrollToTop, scrollToSection } from "~/assets/methods";
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
  methods: {
    scrollToTop: () => scrollToTop(),
    scrollToSection: (id) => scrollToSection(id),
    toggleNav() {
      document.querySelector(".ul").classList.toggle("ul--hidden");
      document.querySelector(".menu").classList.toggle("menu--open");
    },
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
.ul {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  opacity: 1;
  transition: opacity 0.4s;
}
.links {
  display: block;
  color: #656565;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
}

.menu {
  display: none;
  position: relative;
}
.menu__line {
  opacity: 1;
  transition: all 0.35s;
}
.menu__cross {
  position: absolute;
}
.menu--open .cross1 {
  transform: rotate(45deg);
}
.menu--open .cross2 {
  transform: rotate(-45deg);
}
.menu--open .line {
  opacity: 0;
}
@media only screen and (max-width: 720px) {
  .ul {
    flex-direction: column;
    position: absolute;
    top: 9vh;
    right: 10px;
    background-color: #fbfbfb;
    width: 12rem;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  }

  .ul li:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }

  .ul--hidden {
    opacity: 0;
    pointer-events: none;
  }
  .menu {
    display: flex;
    height: 3rem;
    width: 3rem;
    background: #f3f3f3;
    border-radius: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .menu__line {
    width: 50%;
    height: 2px;
    border-radius: 10px;
    background-color: #656565;
    margin-block: 3px;
  }
}
</style>
