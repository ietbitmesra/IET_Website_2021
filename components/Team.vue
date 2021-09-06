<template>
  <div class="team">
    <h1 class="primary-heading">Team</h1>
    <div class="team-members">
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
      <TeamMemberCard />
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
.team {
  margin: auto;
  max-width: 1140px;
  text-align: center;
}
.team-members {
  margin: 2rem 0;
  max-height: 75vh;
  overflow-y: auto;
}
.team-members::-webkit-scrollbar {
  width: 1.5rem;
}
.team-members::-webkit-scrollbar-thumb {
  background-color: #eaeaea;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
</style>