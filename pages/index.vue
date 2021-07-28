<template>
<div class="container">
  <h1 class="heading"><b>Mahir Molai</b></h1>
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
  /*background: #000115;*/
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('../assets/bg.gif');
  background-repeat: repeat;
}

.heading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 74px;
  transition: 0.7s ease;
  text-decoration: none;
}
</style>
