<template>
  <div class="events-section">
    <h1 class="events-heading primary-heading">Events</h1>
    <div class="events-gallery">
      <div class="column">
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1531127999375-2c19c97f7819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwYmxhY2slMjBjaXR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1491001224967-2c0ee18a7c42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHJlZCUyMGJsYWNrJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1494894324626-f9727ea724ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlZCUyMGJsYWNrJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="column">
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1616242757089-edeb1774709a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG55Y3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1616832880334-b1004d9808da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fG55Y3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1542931287-023b922fa89b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFwYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="column">
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1527068589345-b736a7de9cc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlZCUyMGJsYWNrJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphcGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1519121785383-3229633bb75b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div class="column">
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1519121785383-3229633bb75b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1490761668535-35497054764d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGphcGFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          class="event-poster"
          src="https://images.unsplash.com/photo-1546229656-1e0cbe59e1ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG55Y3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
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
.event-poster {
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