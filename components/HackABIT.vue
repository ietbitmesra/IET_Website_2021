<template>
  <div class="hack-a-bit-section">
    <div class="event-details">
      <h1 class="hack-a-bit-heading primary-heading">Hack-A-BIT</h1>
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
    <div class="poster">
      <img
        class="event-poster"
        src="~/assets/hackABit/hackABIT.png"
        alt="Hack-A-BIT"
      />
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
.event-poster {
  width: 100%;
}
.event-details {
  max-width: 550px;
  margin-right: 1.5rem;
}
.hack-a-bit-heading {
  margin: 0;
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
  .event-poster {
    max-width: 550px;
  }
}
@media only screen and (max-width: 1080px) {
  .hack-a-bit-section {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  .poster {
    margin: 2rem 0;
  }
  .event-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
}
</style>