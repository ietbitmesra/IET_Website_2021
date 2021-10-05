<template>
  <div class="workshops" id="workshops">
    <h1 class="workshop-heading primary-heading">Workshops</h1>
    <div class="workshop-content">
      <WorkshopCard
        v-for="workshop in workshopDetails"
        :key="workshop.name"
        :workshop="workshop"
      />
    </div>
  </div>
</template>

<script>
import workshopDetails from "~/assets/workshopDetails";
import WorkshopCard from "./WorkshopCard.vue";

export default {
  data() {
    return {
      workshopDetails,
    };
  },
  components: {
    WorkshopCard,
  },
};
</script>

<style scoped>
.workshops {
  margin: auto;
  max-width: 1200px;
  padding: 5rem 1rem;
}
.workshop-heading {
  text-align: center;
}
.workshop-content {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: auto auto auto;
}
@media only screen and (max-width: 1220px) {
  .workshop-content {
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 720px) {
  .workshop-content {
    grid-template-columns: auto;
  }
}
</style>