<template>
  <div class="previous-teams">
    <h1 class="primary-heading">Previous Teams</h1>
    <div class="team-members">
      <p class="year">2020 - 2021</p>
      <TeamMemberCard
        v-for="member_2021 in teamMembers_2021"
        :key="member_2021.name"
        :memberDetails="member_2021"
      />
    </div>
    <div class="team-members">
      <p class="year">2019 - 2020</p>
      <TeamMemberCard
        v-for="member_2020 in teamMembers_2020"
        :key="member_2020.name"
        :memberDetails="member_2020"
      />
    </div>
  </div>
</template>

<script>
import TeamMemberCard from "~/components/TeamMemberCard.vue";
import team_2021 from "~/assets/teamDetails/team_2021";
import team_2020 from "~/assets/teamDetails/team_2020";

export default {
  layout: "secondary",
  data() {
    return {
      teamMembers_2021: team_2021.members,
      teamMembers_2020: team_2020.members,
    };
  },
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