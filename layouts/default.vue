<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  transition: 0.3s;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  transition: 0.3s;
}

.button--white:hover {
  color: #000115;
  background-color: #f5f5f5;
}
</style>
