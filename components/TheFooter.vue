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
.section-heading {
  color: #ffffff;
}
.contact-details {
  border-top: 1px solid #ffffff;
}
.email-address {
  color: #ffffff;
  text-decoration: none;
}
.site-map {
  border-top: 1px solid #ffffff;
}
.socials-section {
  border-top: 1px solid #ffffff;
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
</style>