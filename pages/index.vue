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
        <a href="mailto:mahir@molai.dev" target="_blank"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>
    </nav>
    <div @click="redirect('https://irusa.org/middle-east/palestine/')" style="
          padding: 10px;
          background-color: #ce1126;
          border-radius: 4px;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <span @click="redirect('https://irusa.org/middle-east/palestine/')">🇵🇸 Support Palestine</span>

        
      </div>
      <div @click="redirect('https://www.unfpa.org/donate/Ukraine-a?utm_campaign=HO-UA-22-Ukraine&utm_content=evergreen&gclid=Cj0KCQjwjN-SBhCkARIsACsrBz65paHPw1RQMRIKQc-qNSzG2ZIW1mhtzD6oLuaCXRMmSsB4BAtk_pIaAr0iEALw_wcB')" style="
          padding: 10px;
          background-color: #005bbb;
          border-radius: 4px;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <span @click="redirect('https://www.unfpa.org/donate/Ukraine-a?utm_campaign=HO-UA-22-Ukraine&utm_content=evergreen&gclid=Cj0KCQjwjN-SBhCkARIsACsrBz65paHPw1RQMRIKQc-qNSzG2ZIW1mhtzD6oLuaCXRMmSsB4BAtk_pIaAr0iEALw_wcB')">🇺🇦 Support Ukraine</span>

        
      </div>

    <main class="about">
      <img class="av small" src="../assets/av.png" alt="Avatar" />
      <svg
        class="withLogo"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#33354B"
          d="M57.6,-14.1C64,1.1,51.3,27.1,33.2,38.6C15.1,50.1,-8.4,47,-29.2,33.4C-50.1,19.9,-68.3,-4.1,-63,-17.8C-57.7,-31.5,-28.8,-34.9,-1.6,-34.3C25.6,-33.8,51.1,-29.4,57.6,-14.1Z"
          transform="translate(100 100)"
        />
      </svg>
      <h1 class="pname">Mahir Molai</h1>
      <h1 class="name">Mahir Molai</h1>
      <p class="description">
        A Developer With The Dream To <br />
        Change The World.
      </p>
    </main>
    <br />
    <main id="projects" class="main">
      <h1>Projects</h1>
      <div
        style="
          padding: 10px;
          background-color: #041b5c;
          border-radius: 4px;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <span>New projects are on the way 🚀 </span>
      </div>
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
          <div class="card card-info" v-on:click="redirect('/projects/djspg')">
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
          <div class="card card-info" v-on:click="redirect('/projects/ijspg')">
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
      <h1>Links</h1>
      <div class="row">
        <div class="col">
          <div
            class="card card-info"
            v-on:click="redirect('https://s.molai.dev/ig')"
          >
            <p class="card-title">Instagram</p>
            <div class="card-data">
              <div class="difficulty card-sub">
                <i class="fab fa-instagram"></i>
                <p class="data">molai.dev</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card card-info"
            v-on:click="redirect('https://twitter.com/DevMolai')"
          >
            <p class="card-title">Twitter</p>
            <div class="card-data">
              <div class="difficulty card-sub">
                <i class="fab fa-twitter"></i>
                <p class="data">DevMolai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
document.querySelectorAll('a[href^="#projects"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

export default {
  methods: {
    redirect: function (link) {
      if (!link === String) return console.log('Not a string...')

      if (link.startsWith('/')) {
        const redirect = window.location.hostname + link

        const r = redirect.slice(window.location.hostname.length)

        location = r
      } else location = link
    },
    r: function (link) {
      if (!link === String) return console.log('Dumbass thats not a string')

      const l = 'https://' + link
      location = l
    },
  },
}
</script>

<style>
@import url('https://cdn.molai.dev/theme.css');

.container {
  height: 100vh;
}

.big {
  font-size: 72px;
}

span > a {
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

.withLogo {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.name {
  position: absolute;
  top: 36.25%;
  left: 33%;
  transform: translate(-50%, -50%);
  color: #f84364;
}

.description {
  position: absolute;
  top: 51.25%;
  left: 40.5%;
  transform: translate(-50%, -50%);
  font-size: 23px;
  color: #12e1e4;
}

.pname {
  position: absolute;
  display: none;
  transform: translate(-50%, -50%);
}

.link {
  position: absolute;
  height: 40%;
  top: 30%;
  left: 50%;
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

  .withLogo {
    display: none;
  }
}
</style>
