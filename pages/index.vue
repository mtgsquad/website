<template>
<div class="container">
    <section class="main">
      <h1 class="heading"><b>Mahir Molai</b></h1>
      <br>
      <h5 class="white alilbig">I'm a full-stack developer, graphic designer, animator and writer.</h5>
      <br>
      <h5 class="white proj">Projects</h5>
      <br>
      <ul class="underproj">
        <li><a class="white" href="https://bot.molai.dev">MolaiBOT</a></li>
        <li><a class="white" href="https://freedom.molai.dev">Freedom App</a></li>
      </ul>
      <br>
      <a href="https://instagram.com/molai.dev" class="white ig">
        <i class="fab fa-instagram"></i>
      </a>
      <br>
      <a href="https://discord.com/users/763767239018938368" class="white disc">
        <i class="fab fa-discord"></i>
      </a>
      <br>
      <a class="white git" href="https://github.com/mtgsquad">
        <i class="fab fa-github"></i>
      </a>
    </section>
    <div class="footer">
      <p class="white"><a class="white link" href="/">Mahir Molai</a> © 2021</p>
    </div>
</div>
</template>

<script>
 export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: orange; 
}

::-webkit-scrollbar-thumb {
  background: #2a2b2b; 
}

::-webkit-scrollbar-thumb:hover {
  background: black; 
}

.container{
  font-family: "Poppins", sans-serif;
  height: 100vh;
  background: #000115;
  cursor: url('./img/cursor3.svg'), auto;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main{
  height: 90vh;
  position: relative;
}

.heading{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 65px;
  transition: 0.3s ease-in;
  text-decoration: none;
}

.heading:hover{
  color: orange;
  text-decoration: underline;
  cursor: url('./img/cursor4.svg'), auto;
}

h5:hover {
  cursor: url('./img/cursor4.svg'), auto;
  text-decoration: underline;
  color: orange;
}

.alilbig {
  margin-left: 30px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
}

.footer {
  top: 92%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.link:hover {
  cursor: url('./img/cursor4.svg'), auto;
}

.ig {
  position: absolute;
  top: 89%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  transition: 0.3s ease-in-out;
}

.ig:hover {
  color: orange;
  cursor: url('./img/cursor4.svg'), auto;
}

.disc {
  position: absolute;
  top: 89%;
  left: 55%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  transition: 0.3s ease-in-out;
}

.disc:hover {
  color: orange;
  cursor: url('./img/cursor4.svg'), auto;
}

.git {
  position: absolute;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  transition: 0.3s ease-in-out;
}

.git:hover {
  color: orange;
  cursor: url('./img/cursor4.svg'), auto;
}

.proj {
  margin-left: 30px;
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
}

.underproj {
  margin-left: 30px;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: white;
}
</style>
