<template>
  <div class="workshop-card">
    <div class="workshop-icon">
      <WorkshopIcons :iconType="workshop.iconType" />
    </div>
    <h4 class="workshop-heading">{{ workshop.name }}</h4>
    <p class="workshop-details">{{ workshop.details }}</p>
  </div>
</template>

<script>
import WorkshopIcons from "~/components/WorkshopIcons.vue";
export default {
  props: {
    workshop: {
      type: Object,
      default: function () {
        return {
          name: "",
          details: "",
          iconType: "",
        };
      },
    },
  },
  components: {
    WorkshopIcons,
  },
};
</script>

<style scoped>
.workshop-card {
  background-image: linear-gradient(135deg, #8198fc, #923ceb);
  box-shadow: 0 5px 15px rgba(146, 60, 235, 0.75);
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem auto;
  padding: 1rem 1.5rem 0.75rem;
  width: 260px;
}
.workshop-icon {
  margin-top: 1rem;
}
.workshop-heading {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0.75rem;
  text-align: center;
}
.workshop-details {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 0.75rem;
}
.workshop-details {
  max-height: 200px;
  overflow-y: auto;
}
.workshop-details::-webkit-scrollbar {
  width: 6px;
}
.workshop-details::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  border: 0px solid transparent;
  background-clip: content-box;
}
</style>