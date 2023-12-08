<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
span {
  color: #FF540B;
}

:root {
  color-scheme: light dark;
  background-color: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #2A2929;
  text-decoration: inherit;
  font-family: BrinnanRegular;
  font-size: 18px;

}

a:hover {
  color: #2A2929;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: #FF540B;
}

nav a.router-link-exact-active {
  color: #2A2929;
  text-decoration: underline;
  text-decoration-color: #FF540B;
}

body {
  scroll-behavior: smooth;
}

.secondarybtn {
  width: 131px;
  padding: 20px;
  border-radius: 34px;
  border: 1px solid #2A2929;
  gap: 20px;
  background-color: #ffffff;
  height: 64px;
  font-family: BrinnanRegular;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  font-size: 18px;

}

.secondarybtn:hover {
  background-color: #FF540B;
  color: #ffffff;
  transition-property: background-color;
  transition-timing-function: linear;
  transition-delay: 0.3s;
}

#app {
  max-width: 1440px;
  margin: 0 auto;
  /* font-family: BrinnanRegular !important; */

}

@font-face {
  font-family: ReportFont;
  src: url("./assets/Fonts/ReportSchoolW00-Heavy.ttf");
}

@font-face {
  font-family: BrinnanRegular;
  src: url("./assets//Fonts/BrinnanRegular.ttf");
}

@font-face {
  font-family: BrinnanBlackOblique;
  src: url("./assets/Fonts/BrinnanBlackOblique.ttf");
}

@font-face {
  font-family: BrinnanBold;
  src: url("./assets/Fonts/BrinnanBold.ttf");
}

@font-face {
  font-family: BrinnanBoldOblique;
  src: url("./assets/Fonts/BrinnanBoldOblique.ttf");
}

@font-face {
  font-family: BrinnanLight;
  src: url("./assets/Fonts/BrinnanLight.ttf");
}

@font-face {
  font-family: BrinnanLightOblique;
  src: url("./assets/Fonts/BrinnanLightOblique.ttf");
}





/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} */
</style>
