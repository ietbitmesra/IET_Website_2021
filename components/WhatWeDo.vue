<template>
  <div class="what-we-do">
    <h2 class="sub-heading">What We Do</h2>

    <!-- Move all the texts to constants file -->

    <p class="paragraph">
      Our progressive vision is materialized through the multi faceted and
      proliferated seminars and workshops, well spaced throughout the academic
      year.
    </p>
    <div class="features">
      <div class="feature-card">
        <p class="number-indicator">01</p>
        <p class="feature">
          We provide active contributions to the annual techno-cultural fests of
          our institute, <span class="highlighted-text">“Pantheon”</span> and
          <span class="highlighted-text">“Bitotsav”</span>.
        </p>
      </div>
      <div class="feature-card">
        <p class="number-indicator">02</p>
        <p class="feature">
          Since 2018, we have been an organizer to East India’s largest student
          hackathon, <span class="highlighted-text">“Hack-A-BIT”</span>.
        </p>
      </div>
      <div class="feature-card">
        <p class="number-indicator">03</p>
        <p class="feature">
          We continuously strive to bring the academia in contact with the
          experience of the industry to create a perfect blend of theoretical
          and practical knowledge.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.what-we-do {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.sub-heading {
  color: #8c0087;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0;
  text-transform: uppercase;
  text-align: center;
}
.paragraph {
  color: #656565;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 3rem;
  max-width: 750px;
  text-align: center;
}
.features {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.feature-card {
  background-color: #ffe7fe;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  color: #656565;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  margin: 1.5rem;
  padding: 1rem 1.5rem;
  width: 250px;
  transition: all 0.3s ease;
}
.highlighted-text {
  color: #8c0087;
  font-weight: 700;
}
.feature-card:hover {
  color: #ffffff;
  background-color: #8c0087;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
}
.feature-card:hover .highlighted-text {
  color: #ffffff;
}
@media only screen and (max-width: 1220px) {
  .what-we-do {
    padding: 3rem 1rem;
  }
}
@media only screen and (max-width: 1080px) {
  .features {
    flex-direction: column;
  }
}
</style>