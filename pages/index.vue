<template>
<div class="container">
    <section class="main">
      <h1 class="heading"><b>Mahir Molai</b></h1>
      <br>
      <a class="discord" href="https://discord.com/users/763767239018938368">Discord</a>
      <br>
      <a class="yt" href="https://www.youtube.com/channel/UC2VmvzguTHSq232VFAhJGrQ">YouTube</a>
      <br>
      <a class="bot" href="https://bot.molai.dev">MolaiBOT</a>
    </section>
</div>
</template>

<script>
 export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

.container{
  font-family: "Poppins", sans-serif;
  height: 100vh;
  background: #000115;
  cursor: url('./img/cursor3.svg'), auto;
  position: relative;
}

.main{
  height: 100vh;
  position: relative;
}

.heading{
  position: absolute;
  top: 35%;
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

.discord {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 42px;
  transition: 0.3s ease-in;
  text-decoration: none;
}

.discord:hover { 
  color: orange;
  text-decoration: underline;
  cursor: url('./img/cursor4.svg'), auto;
}

.yt {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 42px;
  transition: 0.3s ease-in;
  text-decoration: none;
}

.yt:hover { 
  color: orange;
  text-decoration: underline;
  cursor: url('./img/cursor4.svg'), auto;
}

.bot {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 42px;
  transition: 0.3s ease-in;
  text-decoration: none;
}

.bot:hover { 
  color: orange;
  text-decoration: underline;
  cursor: url('./img/cursor4.svg'), auto;
}
</style>
