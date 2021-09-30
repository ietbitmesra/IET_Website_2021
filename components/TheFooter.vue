<template>
  <footer class="the-footer">
    <div class="footer-section">
      <div class="contact-details">
        <h3 class="section-heading">IET, BIT Mesra</h3>
        <p class="link">
          <a href="mailto:iet@bitmesra.ac.in"> iet@bitmesra.ac.in </a>
        </p>
      </div>
      <div class="site-map">
        <h3 class="section-heading">Sitemap</h3>
        <p class="link" @click="scrollToTop">Home</p>
        <p class="link" @click="scrollToSection('about')">About</p>
        <p class="link" @click="scrollToSection('workshops')">Workshops</p>
        <p class="link" @click="scrollToSection('events')">Events</p>
        <p class="link" @click="scrollToSection('gallery')">Gallery</p>
        <p class="link" @click="scrollToSection('team')">Team</p>
        <p class="link" @click="scrollToSection('contact')">Contact</p>
      </div>
      <div class="socials-section">
        <h3 class="section-heading">Social Links</h3>
        <p
          v-for="social in socialLinks"
          :key="social.link"
          class="link social-links"
        >
          <a :href="social.link" target="_blank" rel="noopener noreferrer">{{
            social.platform
          }}</a>
        </p>
      </div>
    </div>
    <div class="developed-by-section">
      <p class="developed-by">
        <a
          href="https://github.com/jash139"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Ayush Acharya (IET Webmaster)
        </a>
        <br />
        Developed by IET Web Team
      </p>
    </div>
  </footer>
</template>

<script>
import contactDetails from "~/assets/contactDetails";
import { scrollToTop, scrollToSection } from "~/assets/methods";

export default {
  data() {
    return {
      socialLinks: contactDetails,
    };
  },
  methods: {
    scrollToTop: () => scrollToTop(),
    scrollToSection: (id) => scrollToSection(id),
  },
};
</script>

<style scoped>
.the-footer {
  background-color: #121212;
  margin-top: 4rem;
}
.footer-section {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-areas: "contact sitemap socials socials socials";
  gap: 3rem;
  padding: 4rem 0;
}
.section-heading {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 1.5rem 0;
}
.link {
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0.6rem 0;
  opacity: 0.7;
}
.link:hover {
  opacity: 1;
}
.contact-details {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: contact;
}
.site-map {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: sitemap;
}
.socials-section {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: socials;
}
.social-links {
  text-transform: uppercase;
}
.developed-by-section {
  margin: auto;
  padding-bottom: 1rem;
  max-width: 1200px;
  text-align: right;
}
.developed-by {
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0.6rem 0;
  opacity: 0.7;
}
.developed-by:hover {
  opacity: 1;
}
@media only screen and (max-width: 1220px) {
  .footer-section {
    gap: 1.5rem;
    padding: 3rem 1rem;
  }
  .developed-by-section {
    padding: 1rem;
  }
}
@media only screen and (max-width: 720px) {
  .footer-section {
    grid-template-areas:
      "contact"
      "sitemap"
      "socials";
  }
  .developed-by-section {
    text-align: center;
  }
}
</style>