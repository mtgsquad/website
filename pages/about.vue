<template>
  <div class="container">
    <div>
      <h1 class="title">
         About Me
      </h1>
      <br>
      <p class="about">I'm a 13 year old developer, who wants to change the world with the power of programming, i also dream to get a job at google one day.</p>
      <br>
      <a href="/">Go back home</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
*{
  font-family: "Source Code Pro", monospace;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: bold;
  font-size: 74px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.about {
    font-size: 24px;
}
</style>
