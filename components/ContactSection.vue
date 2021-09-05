<template>
  <div class="contact-section">
    <div class="socials">
      <h1 class="primary-heading">Contact Us</h1>
      <p class="">Feel free to reach out to us.</p>
    </div>
    <div class="message-div">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Message" />
      <button class="btn primary-btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-section {
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto;
  margin: auto;
  max-width: 1140px;
  padding: 4rem 0;
}
.message-div {
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 1200px) {
  .contact-section {
    gap: 1.5rem;
    padding: 3rem 1rem;
  }
}
@media only screen and (max-width: 720px) {
  .contact-section {
    grid-template-columns: auto;
  }
}
</style>