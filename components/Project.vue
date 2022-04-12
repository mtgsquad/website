<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <div class="logo">
          <a href="/">
            <span class="molai">molai</span
            ><span class="function">.dev</span></a
          >
        </div>
      </div>
      <div class="nav-middle">
        <span data-toggle="modal"><a href="/">Home</a></span>
        <span data-toggle="modal"
          ><a href="https://blog.molai.dev">Blog</a></span
        >
      </div>
      <div class="nav-right">
        <a href="https://twitter.com/@DevMolai" target="_blank"
          ><i class="fab fa-twitter"></i></a
        ><a
          href="https://www.youtube.com/channel/UC2VmvzguTHSq232VFAhJGrQ"
          target="_blank"
          ><i class="fab fa-youtube"></i
        ></a>
      </div>
    </nav>
    <div class="main">
      <h1>{{ name }}</h1>
      <h2>
        <a class="red" :href="link">Visit</a>
      </h2>
      <p class="twenty8">
        {{ description }}
      </p>
      <img :src="img" :alt="name" />
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-info" v-on:click="redirect('/')">
          <p class="card-title">Go back home</p>
          <div class="card-data">
            <div class="difficulty card-sub">
              <i class="fas fa-arrow-left"></i>
              <p class="data"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Component = {
  props: ['name', 'description', 'link', 'img'],
  methods: {
    redirect: function (link) {
      if (!link === String) return console.log('Not a string...')

      if (link.startsWith('/')) {
        const redirect = window.location.hostname + link

        const r = redirect.slice(window.location.hostname.length)

        location = r
      } else location = link
    },
  },
}

export default Component
</script>

<style>
@import url('https://cdn.molai.dev/theme.css');
</style>
