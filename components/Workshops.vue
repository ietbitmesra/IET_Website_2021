<template>
  <div class="workshops">
    <h1 class="workshop-heading primary-heading">Workshops</h1>
    <div class="all-workshops">
      <div class="col-1">
        <h3 class="name">Linux Workshop</h3>
        <p class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tef mpor incididunt ut labore et dolore mags s na aliqua. Ut
          enim ad minim veniam
        </p>
        <h3 class="name">Web Development Workshop</h3>
        <p class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tef mpor incididunt ut labore et dolore mags s na aliqua. Ut
          enim ad minim veniam
        </p>
        <h3 class="name">Python Workshop</h3>
        <p class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tef mpor incididunt ut labore et dolore mags s na aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div class="col-2">
        <h3 class="name">Git Workshop</h3>
        <p class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tef mpor incididunt ut labore et dolore mags s na aliqua. Ut
          enim ad minim veniam
        </p>
        <h3 class="name">DSA Workshop</h3>
        <p class="details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tef mpor incididunt ut labore et dolore mags s na aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.workshops {
  margin: auto;
  max-width: 1200px;
  padding: 10rem 0 5rem;
  display: flex;
  justify-content: space-between;
}
.workshop-heading {
  flex: 0.6;
}
.all-workshops {
  flex: 1;
  display: grid;
  grid-template-columns: auto auto;
  gap: 4rem;
}
.name {
  color: #8c0087;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0;
}
.details {
  color: #656565;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 3rem;
  text-align: justify;
}
@media only screen and (max-width: 1220px) {
  .workshops {
    padding: 3rem 1rem;
  }
}
@media only screen and (max-width: 1000px) {
  .workshops {
    flex-direction: column;
  }
}
@media only screen and (max-width: 720px) {
  .all-workshops {
    grid-template-columns: auto;
    gap: 0;
  }
}
</style>