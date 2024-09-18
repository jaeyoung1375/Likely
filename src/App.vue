<template>
 <Home></Home>

<router-view/>



</template>

<script>
import Home from './components/Home.vue'


export default {
  components: { Home },
  name: 'App',
  data(){
    return{

    }
  
  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
