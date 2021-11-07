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
          <span data-toggle="modal"><a href="#projects">Projects</a> | </span>
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
          <a
            href="mailto:mahir@molai.dev"
            target="_blank"
            ><i class="fas fa-envelope"></i></a>
        </div>
  </nav>
  <main class="about">
    <img class="av small" src="../assets/av.png" alt="Avatar">
    <h1 class="pname">Mahir Molai</h1>
    <h1 class="name">Mahir Molai</h1>
    <p class="description">A Developer With The Dream To Change The World.</p>
  </main>
  <br>
  <main id="projects" class="main">
        <h1>Projects</h1>
        <div class="row">
          <div class="col">
            <div
              class="card card-info"
              v-on:click="redirect('/projects/molaibot')"
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
              v-on:click="redirect('/projects/freedom')"
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
              v-on:click="redirect('/projects/gitterish')"
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
              v-on:click="redirect('/projects/podcasts')"
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
              v-on:click="redirect('/projects/djspg')"
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
              v-on:click="redirect('/projects/ballthatfalls')"
            >
              <p class="card-title">BallThatFalls</p>
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
              v-on:click="redirect('/projects/quickshadow')"
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
              v-on:click="redirect('/projects/ijspg')"
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
  </main>
</div>
</template>

<script>
document.querySelectorAll('a[href^="#projects"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


export default {
  methods: {
    redirect: function (link) {
      if(!link === String) return console.log('Not a string...');

      if(link.startsWith("/")) {
        const redirect = window.location.hostname + link;

        const r = redirect.slice(window.location.hostname.length);

        location = r;

      } else location = link;
    },
    r: function (link) {
      if(!link === String) return console.log('Dumbass thats not a string');

      const l = 'https://' + link;
      location = l;
    }
  }
}
</script>

<style>
@import url("https://cdn.molai.dev/theme.css");

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
  height: 55%;
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

.pname {
  position: absolute;
  display: none;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 10px;
  }

  .name {
    display: none;
  }

  .description {
    display: none;
  }

  .av {
    width: 35%;
    height: auto;
    left: 50%;
    top: 45%;
  }

  .pname {
    display: block;
    top: 75.75%;
    left: 50.9%;
    font-size: 34px;
    white-space: nowrap;
  }
}
</style>
