<template>
  <div class="events-section" id="events">
    <h1 class="events-heading primary-heading">Events</h1>
    <div class="events-gallery">
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/month_of_code.jpeg" />
          <div class="event-description">-</div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/brainfookers.jpg" />
          <div class="event-description">
            This event is a perfect blend of coding and treasure Hunt.It forces
            an individual to rack his/her minds as they try to unravel what the
            code tries to hide by deciphering the programs spread across the
            institute building.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/captureTheFlag.jpg" />
          <div class="event-description">
            Do you think you can overcome the most baffling situations? Can you
            work in a team to find the solution to any quagmire related to
            information security? If your answers are yes, 'Capture The Flag' is
            the event for you. Pantheon'18 brings to you a unique information
            security competition. Gear up for a jeopardy style three-day online
            event that will challenge your expertise in various fields. Form
            your teams, perform the tasks and lead the way to glory.
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/codec.jpg" />
          <div class="event-description">
            Codec is an event where people are challenged to break the seemingly
            impossible codes and some more nerve wracking challenge. Besides
            Teamwork it tests your skills of deciphering patters and connections
            before anyone else.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/codeItBlind.jpg" />
          <div class="event-description">
            Do you think you have what it takes to be a proficient coder? Can
            you write a simple program with the only catch being that you are
            blind-folded? If you think you have what it takes to solve this
            puzzle then you are welcome here! Come and be a part of this event
            as you compete through three intriguing rounds to emerge as the
            final winner!
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/dcrypt.jpeg" />
          <div class="event-description">
            Do you think you are good at surfing the Internet? Are you smart
            enough to break the decryptions? Get ready to use your grey matter
            to take you to the next level. Make sure you are familiar with
            language(s).
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/githeat.jpg" />
          <div class="event-description">
            Have you been thinking about learning something new, but just
            couldn't get started or decide what to learn? Well no worries, IET
            is here to help! We bring you Git Heat, a four week dev-a-thon to
            help you develop new skills with a chance to get featured, win
            prizes and more! Each week we will be providing you with a small
            project idea or let’s say a real life problem statement along with
            an extensive list of resources that'll help you gain the skills
            required for the project. You will have one week to learn the
            relevant technologies and solve the problem. At any time during this
            period, you can submit your code for review by filling the
            submission form and we will get back to you. Make sure you read and
            follow the coding instructions. If you have any doubts, you can
            reach out to us anytime on slack. So what are you waiting for? Jump
            right in !!!
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/google_it_out.jpg" />
          <div class="event-description">
            This is one of the most exciting online events in the whole Bitotsav
            where people are judged on their googling sills with each team
            consisting of a group of 2 members, asked to connect pair of photos
            in the best possible way and decipher the answer within a given
            constrained time.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/techdesk.jpg" />
          <div class="event-description">
            Technology has revolutionized our way of living, impacting every
            aspect of our lives. Thus, IET On Campus, BIT Mesra invites all the
            tech enthusiast out there to bring out their inner techie or
            developer to come up with articles and get a chance to get published
            on our website !! It could be anything from a tutorial to a review.
            Let’s see who plays the best with the words to bring out the best in
            tech !!
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img
            class="event-poster"
            src="~/assets/events/ultimate_engineer.jpg"
          />
          <div class="event-description">-</div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/walking_dead.jpg" />
          <div class="event-description">-</div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/blitzkreig.jpg" />
          <div class="event-description">-</div>
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
  transition: filter 0.4s;
}
.event-description {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 1.25rem;
  font-size: 0.8rem;
  text-align: justify;
  opacity: 0;
  transition: opacity 0.6s;
  cursor: pointer;
  color: #fff;
  overflow-y: auto;
  max-height: 100%;
}
.event-description::-webkit-scrollbar {
  width: 6px;
}
.event-description::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  border: 0px solid transparent;
  background-clip: content-box;
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
