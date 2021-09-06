<template>
  <div class="previous-teams">
    <h1 class="primary-heading">Previous Teams</h1>
    <div class="team-members">
      <p class="year">2020 - 2021</p>
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
    </div>
    <div class="team-members">
      <p class="year">2019 - 2020</p>
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
    </div>
  </div>
</template>

<script>
import TeamMemberCard from "~/components/TeamMemberCard.vue";

export default {
  components: {
    TeamMemberCard,
  },
};
</script>

<style scoped>
.previous-teams {
  margin: auto;
  max-width: 1200px;
  padding: 3rem 0;
  text-align: center;
}
.year {
  font-size: 1rem;
  font-weight: 500;
}
.team-members {
  margin: 3rem 0;
}
</style>