<template>
  <div class="what-is-iet">
    <div class="content">
      <div class="iet-svg">
        <h1>IET SVG</h1>
      </div>
      <div class="about-iet">
        <h2 class="sub-heading">What is IET?</h2>
        <div class="shift-right">
          <div class="stroke" />
          <div>
            <p class="about">
              From the foundation of the Society of Telegraph Engineers in 1871
              to the creation of the Institution of Engineering and Technology,
              the primary motive of the world renowned organization has been to
              <span class="highlighted-text"
                >“Inspire, Inform and Influence the global engineering community
                to engineer a better world”</span
              >.
            </p>
            <p class="about">
              The IET On Campus, BIT Mesra has been an ardent supporter of this
              cause, with its indefatigable efforts to deliver information to
              the masses about the latest cutting edge technologies and
              scientific advancements. At the same time, we try to stimulate and
              rouse innovation and curiosity in the minds of students.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.what-is-iet {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.about-iet {
  max-width: 700px;
}
.sub-heading {
  color: #8c0087;
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0;
  text-transform: uppercase;
}
.shift-right {
  display: flex;
}
.stroke {
  background-color: #8c0087;
  border-radius: 5rem;
  height: 0.2rem;
  margin: 1.5rem 1rem 0 0;
  min-width: 2.5rem;
}
.about {
  color: #656565;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 3rem;
  margin: 1rem 0 2rem;
  text-align: justify;
}
.highlighted-text {
  color: #8c0087;
  font-weight: 700;
}
</style>