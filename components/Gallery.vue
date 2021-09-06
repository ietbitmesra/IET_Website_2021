<template>
  <div class="gallery">
    <h1 class="primary-heading">Gallery</h1>
    <div class="carousel" :id="id">
      <img
        class="image"
        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt="event"
      />
      <img
        class="image"
        src="https://images.unsplash.com/photo-1625062798671-a2b45295b6e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="event-2"
      />
    </div>
    <div class="scroll-btns">
      <div class="scroll-btn" @click="handleScroll('left')">
        <svg
          width="35"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM40 7L1 7V9L40 9V7Z"
            fill="#8C0087"
          />
        </svg>
      </div>
      <div class="scroll-btn" @click="handleScroll('right')">
        <svg
          width="35"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.7071 7.29289C40.0976 7.68342 40.0976 8.31658 39.7071 8.70711L33.3431 15.0711C32.9526 15.4616 32.3195 15.4616 31.9289 15.0711C31.5384 14.6805 31.5384 14.0474 31.9289 13.6569L37.5858 8L31.9289 2.34315C31.5384 1.95262 31.5384 1.31946 31.9289 0.928932C32.3195 0.538408 32.9526 0.538408 33.3431 0.928932L39.7071 7.29289ZM0 7L39 7V9L0 9L0 7Z"
            fill="#8C0087"
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
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  text-align: center;
}
.carousel {
  display: flex;
  overflow-x: auto;
  margin: 5rem 0 3rem;
  max-width: 100%;
  scroll-behavior: smooth;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.image {
  object-fit: cover;
  height: 230px;
  margin: 0.5rem;
  width: 350px;
}
.scroll-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.scroll-btn {
  border: 1.5px solid #8c0087;
  border-radius: 5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45px;
  margin: 0 0.75rem;
  transition: all 0.3s ease;
  width: 45px;
}
.scroll-btn:hover {
  transform: scale(1.1, 1.1);
}
</style>