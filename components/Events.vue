<template>
  <div class="events-section" id="events">
    <h1 class="events-heading primary-heading">Events</h1>
    <div class="events-gallery">
      <div class="column">
        <img class="event-poster" src="~/assets/events/month_of_code.jpeg" />
        <img class="event-poster" src="~/assets/events/brainfookers.jpg" />
        <img class="event-poster" src="~/assets/events/captureTheFlag.jpg" />
      </div>
      <div class="column">
        <img class="event-poster" src="~/assets/events/codec.jpg" />
        <img class="event-poster" src="~/assets/events/codeItBlind.jpg" />
        <img class="event-poster" src="~/assets/events/dcrypt.jpeg" />
      </div>
      <div class="column">
        <img class="event-poster" src="~/assets/events/githeat.jpg" />
        <img class="event-poster" src="~/assets/events/google_it_out.jpg" />
        <img class="event-poster" src="~/assets/events/techdesk.jpg" />
      </div>
      <div class="column">
        <img class="event-poster" src="~/assets/events/ultimate_engineer.jpg" />
        <img class="event-poster" src="~/assets/events/walking_dead.jpg" />
        <img class="event-poster" src="~/assets/events/blitzkreig.jpg" />
      </div>
    </div>
    <HackABIT />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.events-section {
  margin: auto;
  max-width: 1200px;
}
.events-heading {
  text-align: center;
}
.events-gallery {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
  margin: 4rem 0;
}
.column {
  -ms-flex: 25%;
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  box-sizing: border-box;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>