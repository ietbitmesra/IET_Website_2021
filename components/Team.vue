<template>
  <div class="team" id="team">
    <h1 class="primary-heading">Team</h1>
    <h3 class="sub-heading">Governing Faculty</h3>
    <div class="faculty-members">
      <TeamMemberCard
        v-for="member in facultyMembers"
        :key="member.name"
        :memberDetails="member"
        :hasSocials="false"
      />
    </div>
    <h3 class="sub-heading">Executive Members</h3>
    <div class="team-members">
      <TeamMemberCard
        v-for="member in teamMembers"
        :key="member.name"
        :memberDetails="member"
      />
    </div>
    <div class="team-members-mobile" id="team-members-mobile-carousel">
      <TeamMemberCard
        v-for="member in teamMembers"
        :key="member.name"
        :memberDetails="member"
      />
    </div>
    <div class="scroll-btns">
      <div class="scroll-btn" @click="handleScroll('left')">
        <svg
          width="20"
          height="35"
          viewBox="0 0 24 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.446 5.33641C24.1516 3.48165 22.836 0.484375 20.3162 0.484375V0.484375C19.5068 0.484375 18.7344 0.823404 18.1865 1.41917L1.99687 19.0227C0.589132 20.5534 0.589132 22.9074 1.99687 24.4381L18.1865 42.0417C18.7344 42.6374 19.5068 42.9764 20.3162 42.9764V42.9764C22.836 42.9764 24.1516 39.9792 22.446 38.1244L7.36993 21.7304L22.446 5.33641Z"
            fill="#923CEB"
          />
        </svg>
      </div>
      <div class="scroll-btn" @click="handleScroll('right')">
        <svg
          width="20"
          height="35"
          viewBox="0 0 24 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55401 5.33641C-0.151642 3.48165 1.16401 0.484375 3.68381 0.484375V0.484375C4.49322 0.484375 5.26563 0.823404 5.81354 1.41917L22.0031 19.0227C23.4109 20.5534 23.4109 22.9074 22.0031 24.4381L5.81354 42.0417C5.26563 42.6374 4.49322 42.9764 3.68381 42.9764V42.9764C1.16401 42.9764 -0.151644 39.9792 1.55401 38.1244L16.6301 21.7304L1.55401 5.33641Z"
            fill="#923CEB"
          />
        </svg>
      </div>
    </div>
    <NuxtLink to="/previous-teams">
      <button class="btn secondary-btn">Previous Teams</button>
    </NuxtLink>
  </div>
</template>

<script>
import TeamMemberCard from "~/components/TeamMemberCard.vue";
import facultyMembers from "~/assets/teamDetails/facultyMembers";
import team_2022 from "~/assets/teamDetails/team_2022";

export default {
  data() {
    return {
      teamMembers: team_2022.members,
      facultyMembers,
    };
  },
  components: {
    TeamMemberCard,
  },
  methods: {
    handleScroll(direction) {
      if (direction === "left") {
        document.getElementById(
          "team-members-mobile-carousel"
        ).scrollLeft -= 400;
      } else if (direction === "right") {
        document.getElementById(
          "team-members-mobile-carousel"
        ).scrollLeft += 400;
      }
    },
  },
};
</script>

<style scoped>
.team {
  margin: auto;
  max-width: 1200px;
  padding-top: 10vh;
  text-align: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
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
.team-members-mobile {
  display: none;
  overflow-x: auto;
  max-width: 100%;
  scroll-behavior: smooth;
}
.scroll-btns {
  display: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.scroll-btn {
  box-shadow: 0 6px 8px rgba(146, 60, 235, 0.2);
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 0 0.75rem;
  padding: 0.5rem;
  width: 45px;
}
@media only screen and (max-width: 720px) {
  .team-members {
    display: none;
  }
  .team-members-mobile {
    display: flex;
  }
  .scroll-btns {
    display: flex;
  }
  .team-members-mobile::-webkit-scrollbar {
    display: none;
  }
}
</style>