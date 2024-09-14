<template>
  <div class="gallery">
    <div class="carousel" :id="id">
      <img
        class="image"
        v-for="image in images"
        :key="image.path"
        :src="image.path"
        alt="image"
      />
    </div>
    <div class="scroll-btns">
      <div class="scroll-btn" @click="handleScroll('left')">
        <svg
          width="20"
          height="35"
          viewBox="0 0 24 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.446 5.33641C24.1516 3.48165 22.836 0.484375 20.3162 0.484375V0.484375C19.5068 0.484375 18.7344 0.823404 18.1865 1.41917L1.99687 19.0227C0.589132 20.5534 0.589132 22.9074 1.99687 24.4381L18.1865 42.0417C18.7344 42.6374 19.5068 42.9764 20.3162 42.9764V42.9764C22.836 42.9764 24.1516 39.9792 22.446 38.1244L7.36993 21.7304L22.446 5.33641Z"
            fill="#923CEB"
          />
        </svg>
      </div>
      <div class="scroll-btn" @click="handleScroll('right')">
        <svg
          width="20"
          height="35"
          viewBox="0 0 24 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.55401 5.33641C-0.151642 3.48165 1.16401 0.484375 3.68381 0.484375V0.484375C4.49322 0.484375 5.26563 0.823404 5.81354 1.41917L22.0031 19.0227C23.4109 20.5534 23.4109 22.9074 22.0031 24.4381L5.81354 42.0417C5.26563 42.6374 4.49322 42.9764 3.68381 42.9764V42.9764C1.16401 42.9764 -0.151644 39.9792 1.55401 38.1244L16.6301 21.7304L1.55401 5.33641Z"
            fill="#923CEB"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: "gallery-carousel",
    },
  },
  methods: {
    handleScroll(direction) {
      if (direction === "left") {
        document.getElementById(this.id).scrollLeft -= 400;
      } else if (direction === "right") {
        document.getElementById(this.id).scrollLeft += 400;
      }
    },
  },
  data() {
    return {
      images: [
        { path: require("../assets/gallery/p1.jpg") },
        { path: require("../assets/gallery/p2.jpg") },
        { path: require("../assets/gallery/p3.jpg") },
        { path: require("../assets/gallery/p4.jpg") },
        { path: require("../assets/gallery/p5.jpg") },
        { path: require("../assets/gallery/p6.jpg") },
        // { path: require("../assets/gallery/galleryimg2.jpg") },
        // { path: require("../assets/gallery/galleryimg3.jpg") },
        // { path: require("../assets/gallery/galleryimg4.jpg") },
        // { path: require("../assets/gallery/galleryimg5.jpg") },
        // { path: require("../assets/gallery/galleryimg6.jpg") },
        // { path: require("../assets/gallery/galleryimg7.jpg") },
        // { path: require("../assets/gallery/galleryimg8.jpg") },
        // { path: require("../assets/gallery/galleryimg9.jpg") },
        // { path: require("../assets/gallery/galleryimg10.jpg") },
        // { path: require("../assets/gallery/galleryimg11.jpg") },
        // { path: require("../assets/gallery/galleryimg12.jpg") },
        // { path: require("../assets/gallery/galleryimg13.jpg") },
        // { path: require("../assets/gallery/galleryimg14.jpg") },
        // { path: require("../assets/gallery/galleryimg15.jpg") },
        // { path: require("../assets/gallery/galleryimg16.jpg") },
        // { path: require("../assets/gallery/galleryimg17.jpg") },
        // { path: require("../assets/gallery/galleryimg18.jpg") },
        // { path: require("../assets/gallery/galleryimg19.jpg") },
        // { path: require("../assets/gallery/galleryimg20.jpg") },
        // { path: require("../assets/gallery/galleryimg21.jpeg") },
        // { path: require("../assets/gallery/galleryimg22.jpeg") },
        // { path: require("../assets/gallery/galleryimg23.jpeg") },
        // { path: require("../assets/gallery/galleryimg24.jpeg") },
        // { path: require("../assets/gallery/galleryimg25.jpeg") },
        // { path: require("../assets/gallery/galleryimg26.jpeg") },
        // { path: require("../assets/gallery/galleryimg27.jpeg") },
        // { path: require("../assets/gallery/galleryimg28.jpeg") },
        // { path: require("../assets/gallery/galleryimg29.jpeg") },
        // { path: require("../assets/gallery/galleryimg30.jpeg") },
        // { path: require("../assets/gallery/galleryimg31.jpeg") },
        // { path: require("../assets/gallery/galleryimg32.jpeg") },
        // { path: require("../assets/gallery/galleryimg33.jpeg") },
        // { path: require("../assets/gallery/galleryimg34.jpeg") },
        // { path: require("../assets/gallery/galleryimg35.jpeg") },
        // { path: require("../assets/gallery/galleryimg36.jpeg") },
        // { path: require("../assets/gallery/galleryimg37.jpeg") },
        // { path: require("../assets/gallery/galleryimg38.jpeg") },
        // { path: require("../assets/gallery/galleryimg39.jpeg") },
      ],
    };
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: center;
  margin-bottom: 10rem;
}
.carousel {
  display: flex;
  overflow-x: auto;
  margin: 2.5rem 0;
  max-width: 100%;
  scroll-behavior: smooth;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.image {
  object-fit: cover;
  height: 230px;
  margin: 0.25rem;
  width: 350px;
}
.scroll-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-btn {
  box-shadow: 0 6px 8px rgba(146, 60, 235, 0.2);
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 0 0.75rem;
  padding: 0.5rem;
  width: 45px;
}
</style>