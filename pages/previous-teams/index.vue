<template>
  <div class="previous-teams">
    <h1 class="primary-heading">Previous Teams</h1>
    <div class="team-members">
      <p class="year">2024 - 2025</p>
      <TeamMemberCard v-for="member_2024 in teamMembers_2024" :key="member_2024.name" :memberDetails="member_2024" />
    </div>
    <div class="team-members">
      <p class="year">2022 - 2023</p>
      <TeamMemberCard v-for="member_2022 in teamMembers_2022" :key="member_2022.name" :memberDetails="member_2022" />
    </div>
    <div class="team-members">
      <p class="year">2021 - 2022</p>
      <TeamMemberCard
        v-for="member_2021 in teamMembers_2021"
        :key="member_2021.name"
        :memberDetails="member_2021"
      />
    </div>
    <div class="team-members">
      <p class="year">2020 - 2021</p>
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
import team_2024 from "~/assets/teamDetails/team_2024";
import team_2022 from "~/assets/teamDetails/team_2022";
import team_2021 from "~/assets/teamDetails/team_2021";
import team_2020 from "~/assets/teamDetails/team_2020";

export default {
  layout: "secondary",
  data() {
    return {
      teamMembers_2024: team_2024.members,
      teamMembers_2022: team_2022.members,
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
  padding: 3rem 1rem;
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