<template>
  <div class="container">
    <div>
      <h1 class="title">
         Mahir Molai
      </h1>
      <br>
      <div class="links">
        <a
          href="https://www.youtube.com/channel/UC2VmvzguTHSq232VFAhJGrQ"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          YouTube
        </a>
        <a
          href="/about"
          rel="noopener noreferrer"
          class="button--grey"
        >
          About Me
        </a>
        <a
          href="/projects"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Projects
        </a>
        <a
          href="https://github.com/mtgsquad"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <br>
      <p><i>Made by developer Mahir in 30 minutes</i></p>
      <br>
      <img src="https://i.imgur.com/GGZG46J.gif" alt="NotePad Image">
      <br>
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

.links {
  padding-top: 15px;
}
</style>
