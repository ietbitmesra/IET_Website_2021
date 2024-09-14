<template>
  <div class="events-section" id="events">
    <h1 class="events-heading primary-heading">Events</h1>
    <div class="events-gallery">
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/monthOfCode.jpeg" />
          <div class="event-description">
            IET BIT Mesra brings you the 'Month of Code' in the month of
            October. Along with chances of showing your coding skills, you will
            come across lots of brain teasers that will blow your mind off.
            Events in the basket:
            <br />
            👉 Capture the flag<br />
            👉 IET Dev-A-Thon<br />
            👉 Code Golf<br />
            along with cash prizes worth <b>25k</b>
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/captureTheFlag.jpg" />
          <div class="event-description">
            Stuck reading Algorithms and submitting assignments? IET BIT Mesra
            has got you covered with <b>"Capture the Flag"</b> to get you in on
            some Cyberspace Brawls! Make your own team of 2-3 compatriots in a
            race-against-time. <br />Get READY to Capture the World...
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
          <img class="event-poster" src="~/assets/events/blindcoding.jpg" />
          <div class="event-description">
            Blind coding is the ultimate test of a programmer's skill, where logic, speed, and precision are pushed to the limits. Without the ability to see or debug in real time, coders rely purely on their understanding of syntax and problem-solving prowess. It's a thrilling challenge that not only sharpens coding expertise but also builds confidence in thinking algorithmically under pressure. For those seeking to master their craft and truly elevate their abilities, blind coding is an exhilarating exercise that separates the great from the best. Ready to code without a safety net?
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
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/hackADuck.jpg" />
          <div class="event-description">
            IET BIT Mesra, in association with Psyberduck presents a one of its
            kind hackathon named <b>"Hack-a-Duck"</b>. To all the techies, geeks
            and nerds out there, buckle up, cause you have an amazing
            opportunity to let your brainy skills do the talking. You also have
            a golden chance to win cash prizes worth 5k and goodies for bonafide
            performers that can be flaunted off in style!
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/googleItOut.jpg" />
          <div class="event-description">
            This is one of the most exciting online events in the whole Bitotsav
            where people are judged on their googling sills with each team
            consisting of a group of 2 members, asked to connect pair of photos
            in the best possible way and decipher the answer within a given
            constrained time.
          </div>
        </div>
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/bitguesser.jpg" />
          <div class="event-description">
            IET Club Present   : "Bit Guesser: Coordinates Edition" challenges participants to decode pictures 📷  leading to  geographical coordinates 📍. In this fast-paced event, participants must unravel binary puzzles  to uncover clues that guide them to specific locations. With quick thinking 🤔 and sharp binary manipulation skills 🔥, contestants race against the clock 🕐 to pinpoint the mystery locations and claim victory. Join us for an exhilarating adventure  of code-breaking and geographical exploration!  🚀🚀🚀 
          </div>
        </div>
      </div>
      <div class="column">
        <div class="event-card">
          <img class="event-poster" src="~/assets/events/codeGolf.png" />
          <div class="event-description">
            IET, BIT Mesra's brain teasing event, CodeGolf, is an individual
            event. Buckle up to perform some serious optimization and win
            exciting prizes worth <b>5k!</b>
          </div>
        </div>
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
          <img class="event-poster" src="~/assets/events/brainfookers.jpg" />
          <div class="event-description">
            This event is a perfect blend of coding and treasure Hunt.It forces
            an individual to rack his/her minds as they try to unravel what the
            code tries to hide by deciphering the programs spread across the
            institute building.
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
  padding-top: 10vh;
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
