<template>
  <div class="events-section" id="events">
    <h1 class="events-heading primary-heading">Events</h1>
    <div class="events-gallery">
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/month_of_code.jpeg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/brainfookers.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/captureTheFlag.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/codec.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/codeItBlind.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/dcrypt.jpeg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/githeat.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/google_it_out.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/techdesk.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img
            class="event-poster"
            src="~/assets/events/ultimate_engineer.jpg"
          />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/walking_dead.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/blitzkreig.jpg" />
          <div class="event-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            dolor dolores quaerat nobis optio ea alias error eum unde fugiat.
          </div>
        </div>
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
  vertical-align: middle;
  width: 100%;
}

.event-card {
  margin-top: 8px;
  position: relative;
  overflow: hidden;
}

.event-poster {
  cursor: pointer;
  transition: filter 0.6s;
}
.event-description {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1.25rem;
  text-align: justify;
  opacity: 0;
  transition: opacity 0.6s;
  cursor: pointer;
  color: #fff;
}
.event-card:hover .event-poster {
  filter: blur(0.75rem) brightness(70%);
}
.event-card:hover .event-description {
  opacity: 1;
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
