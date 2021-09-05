<template>
  <footer class="the-footer">
    <div class="footer-section">
      <div class="contact-details">
        <h3 class="section-heading">IET, BIT Mesra</h3>
        <p>
          <a class="email-address" href="mailto:iet@bitmesra.ac.in">
            iet@bitmesra.ac.in
          </a>
        </p>
      </div>
      <div class="site-map">
        <h3 class="section-heading">Sitemap</h3>
        <p class="nav-link">Home</p>
        <p class="nav-link">About</p>
        <p class="nav-link">Workshops</p>
        <p class="nav-link">Events</p>
        <p class="nav-link">Hack A Bit</p>
        <p class="nav-link">Gallery</p>
        <p class="nav-link">Team</p>
        <p class="nav-link">Contact</p>
      </div>
      <div class="socials-section">
        <h3 class="section-heading">Social Links</h3>
        <p v-for="social in socialLinks" :key="social.link">
          <a
            class="social-links"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            >{{ social.platform }}</a
          >
        </p>
      </div>
    </div>
    <div class="developed-by-section">
      <p>Designed and developed by</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          link: "https://www.instagram.com/ietbitmesra",
          platform: "Instagram",
        },
        {
          link: "https://www.facebook.com/ietbitmesra",
          platform: "Facebook",
        },
        {
          link: "https://www.linkedin.com/company/iet-on-campus-bit-mesra",
          platform: "Linkedin",
        },
        {
          link: "https://github.com/ietbitmesra",
          platform: "Github",
        },
      ],
    };
  },
};
</script>

<style scoped>
.the-footer {
  background-color: #121212;
}
.footer-section {
  max-width: 1140px;
  margin: auto;
  display: grid;
  grid-template-areas: "contact sitemap socials socials";
  gap: 3rem;
  padding: 4rem 0;
}
.section-heading {
  color: #ffffff;
}
.contact-details {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: contact;
}
.email-address {
  color: #ffffff;
  text-decoration: none;
}
.site-map {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: sitemap;
}
.nav-link {
  color: #ffffff;
}
.socials-section {
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  grid-area: socials;
}
.social-links {
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.6;
  text-decoration: none;
  text-transform: uppercase;
}
.social-links:hover {
  opacity: 1;
}
.developed-by-section {
  color: #ffffff;
  margin: auto;
  padding-bottom: 1rem;
  max-width: 1140px;
  text-align: right;
}
@media only screen and (max-width: 1200px) {
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