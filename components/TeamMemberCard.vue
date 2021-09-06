<template>
  <div class="team-member-card">
    <div class="avatar-circle">
      <img
        class="avatar"
        src="https://images.unsplash.com/photo-1630538456232-5a62fa7605d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt="Avatar"
      />
    </div>
    <h3 class="member-name">Team Member</h3>
    <p class="position">Position</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.team-member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.avatar-circle {
  border: 2px solid #e2e2e2;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 160px;
}
.avatar {
  border-radius: 100%;
  object-fit: cover;
  height: 155px;
  width: 155px;
}
.member-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0 0;
}
.position {
  color: #787878;
  font-size: 1rem;
  margin: 1px 0;
}
</style>