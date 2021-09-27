<template>
  <div class="team" id="team">
    <h1 class="primary-heading">Team</h1>
    <h3 class="sub-heading">Governing Faculty</h3>
    <div class="faculty-members">
      <TeamMemberCard :hasSocials="false" />
      <TeamMemberCard :hasSocials="false" />
    </div>
    <h3 class="sub-heading">Executive Members</h3>
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
    <NuxtLink to="/previous-teams">
      <button class="btn secondary-btn">Previous Teams</button>
    </NuxtLink>
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
  max-width: 1200px;
  text-align: center;
}
.sub-heading {
  font-size: 1.2rem;
  font-weight: 500;
}
.faculty-members {
  margin-bottom: 4rem;
}
.team-members {
  margin: 2rem 0;
  max-height: 70vh;
  overflow-y: auto;
}
.team-members::-webkit-scrollbar {
  width: 1.5rem;
}
.team-members::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 1rem;
  border: 9px solid transparent;
  background-clip: content-box;
}
</style>