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
          width="35"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM40 7L1 7V9L40 9V7Z"
            fill="#8C0087"
          />
        </svg>
      </div>
      <div class="scroll-btn" @click="handleScroll('right')">
        <svg
          width="35"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.7071 7.29289C40.0976 7.68342 40.0976 8.31658 39.7071 8.70711L33.3431 15.0711C32.9526 15.4616 32.3195 15.4616 31.9289 15.0711C31.5384 14.6805 31.5384 14.0474 31.9289 13.6569L37.5858 8L31.9289 2.34315C31.5384 1.95262 31.5384 1.31946 31.9289 0.928932C32.3195 0.538408 32.9526 0.538408 33.3431 0.928932L39.7071 7.29289ZM0 7L39 7V9L0 9L0 7Z"
            fill="#8C0087"
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
import team_2021 from "~/assets/teamDetails/team_2021";

export default {
  data() {
    return {
      teamMembers: team_2021.members,
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
  border: 1.5px solid #8c0087;
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 0 0.75rem;
  transition: all 0.3s ease;
  width: 45px;
}
.scroll-btn:hover {
  transform: scale(1.1, 1.1);
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