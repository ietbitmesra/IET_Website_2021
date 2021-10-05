<template>
  <div class="what-is-iet">
    <div class="about-iet">
      <h2 class="sub-heading">What is IET?</h2>
      <p class="about">
        From the foundation of the Society of Telegraph Engineers in 1871 to the
        creation of the Institution of Engineering and Technology, the primary
        motive of the world renowned organization has been to “Inspire, Inform
        and Influence the global engineering community to engineer a better
        world”. The IET On Campus, BIT Mesra has been an ardent supporter of
        this cause, with its indefatigable efforts to deliver information to the
        masses about the latest cutting edge technologies and scientific
        advancements. At the same time, we try to stimulate and rouse innovation
        and curiosity in the minds of students.
      </p>
      <p class="about">
        We are a congregation of tech aficionado trying to inculcate
        technological knowledge and programming skills in the student community.
        We have a vehement commitment towards new technologies and programming
        for the advancement of the society. Our ultimate goal is to feed the
        grey matter of our learners and aggrandize their dexterity in
        programming and other technical fields.
      </p>
    </div>
    <div class="quotation">
      <svg
        width="125"
        height="100"
        viewBox="0 0 145 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.4909 104.542L12.5567 104.623L12.6267 104.701C18.0738 110.753 24.9077 113.889 32.9017 113.889C40.6 113.889 47.1676 110.91 52.3598 105.128C57.6527 99.5241 60.4951 93.0807 60.4951 85.9025C60.4951 79.1529 58.1707 73.0308 53.7035 67.6536C50.3391 63.4048 46.4024 60.4185 41.8954 59.0793C43.1276 53.9447 45.3254 49.822 48.3929 46.5741L48.4299 46.5349L48.4658 46.4947C52.7187 41.7415 58.0252 36.9302 64.4206 32.0697L67.1079 30.0273L65.5466 27.0348L56.1092 8.94649L54.2671 5.41579L50.7283 7.24227C42.0918 11.6998 34.2297 18.0692 27.1264 26.2653L27.1195 26.2733C20.2843 34.2021 14.8198 43.0856 10.7279 52.9062L10.7169 52.9325L10.7063 52.9591C6.86773 62.5554 4.91504 72.1026 4.91504 81.5771C4.91504 90.4778 7.37435 98.2211 12.4909 104.542Z"
          stroke="#8C0087"
          stroke-width="7"
        />
        <path
          d="M85.1261 104.542L85.1919 104.623L85.2619 104.701C90.7091 110.753 97.5429 113.889 105.537 113.889C113.235 113.889 119.803 110.909 124.995 105.128C130.288 99.524 133.13 93.0806 133.13 85.9025C133.13 79.1528 130.806 73.0308 126.339 67.6535C122.974 63.4048 119.038 60.4185 114.531 59.0793C115.763 53.9447 117.961 49.822 121.028 46.5741L121.065 46.5349L121.101 46.4947C125.354 41.7415 130.66 36.9302 137.056 32.0697L139.743 30.0273L138.182 27.0348L128.744 8.94649L126.902 5.41579L123.364 7.24227C114.727 11.6998 106.865 18.0692 99.7616 26.2653L99.7616 26.2653L99.7547 26.2733C92.9196 34.2021 87.455 43.0856 83.3631 52.9062L83.3521 52.9325L83.3415 52.9591C79.503 62.5554 77.5503 72.1026 77.5503 81.5771C77.5503 90.4778 80.0096 98.2211 85.1261 104.542Z"
          stroke="#8C0087"
          stroke-width="7"
        />
      </svg>
      <div class="stroke" />
      <p class="quote">
        “Inspire, Inform and Influence the global engineering community to
        engineer a better world.”
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.what-is-iet {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}
.about-iet {
  max-width: 700px;
}
.quotation {
  max-width: 350px;
}
.sub-heading {
  color: #8c0087;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0;
  text-transform: uppercase;
}
.stroke {
  background-color: #8c0087;
  border-radius: 5rem;
  height: 0.2rem;
  margin: 1.5rem 0;
  max-width: 200px;
}
.about {
  color: #656565;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 1rem 0;
  text-align: justify;
}
.quote {
  color: #8c0087;
  font-size: 1.1rem;
  font-weight: 600;
}
@media only screen and (max-width: 1220px) {
  .what-is-iet {
    flex-direction: column-reverse;
    padding: 1rem;
  }
  .quotation {
    max-width: unset;
  }
  .about-iet {
    max-width: unset;
  }
}
</style>