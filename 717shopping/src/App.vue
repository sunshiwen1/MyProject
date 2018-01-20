<template>
  <div id="app">
    	<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
body,html, #app{
	width: 100%;height: 100%;
	background:#f0f0f0;
	min-width: 320px;
	color: #999;
}
*{box-sizing: border-box;}
#app{display: flex;flex-direction: column;}

input{
	appearance:none;border:none;background: none;
	outline:none;
}


</style>
