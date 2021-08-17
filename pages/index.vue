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
          <span data-toggle="modal"><a href="#projects">Projects</a></span>
          <span data-toggle="modal"><a href="https://blog.molai.dev">Blog</a></span>
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
  <main class="about">
    <img class="av small" src="../assets/av.png" alt="Avatar">
    <h1 class="name">Mahir Molai</h1>
    <p class="description">A Developer With The Dream To Change The World.</p>
  </main>
  <br>
  <div id="projects" class="main">
        <h1>Projects</h1>
        <div class="row">
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://bot.molai.dev')"
            >
              <p class="card-title">MolaiBOT</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://freedomapp.cc')"
            >
              <p class="card-title">Freedom</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://github.com/mtgsquad/gitterish')"
            >
              <p class="card-title">Gitterish</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://podcasts.molai.dev')"
            >
              <p class="card-title">Molai's Podcasts</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://npmjs.com/package/djspg')"
            >
              <p class="card-title">djspg</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://quickshadow.js.org')"
            >
              <p class="card-title">quickshadow.js</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('https://npmjs.com/package/ijspg')"
            >
              <p class="card-title">ijspg</p>
              <div class="card-data">
                <div class="difficulty card-sub">
                  <i class="fas fa-bolt"></i>
                  <p class="data">JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    redirect: function (link) {
      location = link;
    }
  }
}
</script>

<style>
<<<<<<< HEAD
@import url("https://cdn.molai.dev/theme.css");
=======
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
>>>>>>> 8701db2304c234fcf08341ad5d79ff5981ae13b4

.container {
  height: 100vh;
}

.big {
  font-size: 72px;
}

span > a{
  margin: 25px;
}

main {
  height: 50%;
}

.small {
  border-radius: 50%;
  width: 17%;
  height: auto;
}

.about {
  position: relative;
}

.av {
  position: absolute;
  top: 50%;
  left: 9%;
  transform: translate(-50%, -50%);
}

.name {
  position: absolute;
  top: 43%;
  left: 29%;
  transform: translate(-50%, -50%);
}

.description {
  position: absolute;
  top: 57%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-size: 23px;
}
</style>
