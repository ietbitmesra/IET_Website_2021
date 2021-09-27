<template>
  <div class="hack-a-bit-section">
    <div class="poster">
      <img
        class="event-poster"
        src="~/assets/hackABit/hackABIT.png"
        alt="Hack-A-BIT"
      />
    </div>
    <div class="event-details">
      <h1 class="primary-heading">Hack-A-BIT</h1>
      <p class="about-event">
        Hack-A-BIT has turned out to be one of the
        <b>Largest Student Organised Hackathons</b> in the country. The maiden
        edition of this venture saw great enthusiasm from both the industry and
        academia, and is set to grow bigger and bigger as the years progress.
        IET, on campus BIT Mesra is one of the Clubs involved in its
        organisation. Letting new ideas flow through young minds, and
        challenging students to build the next big thing is the prime focus of
        this endeavour.
      </p>
      <a
        class="website-btn"
        href="https://www.hackabit.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="btn secondary-btn">Hack-A-BIT Website</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hack-a-bit-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
}
.poster {
  flex: 1;
  margin-right: 2rem;
}
.event-poster {
  max-width: 530px;
  width: 100%;
}
.event-details {
  flex: 1;
  margin-left: 2rem;
}
.about-event {
  color: #656565;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: justify;
}
@media only screen and (max-width: 1220px) {
  .hack-a-bit-section {
    margin: 0 1rem;
  }
}
@media only screen and (max-width: 1080px) {
  .hack-a-bit-section {
    flex-direction: column;
  }
  .poster {
    flex: unset;
    margin: 2rem 0;
  }
  .event-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
}
</style>