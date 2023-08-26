<template>
  <div id="app">
    <div>
      <b-container>
        <tasks-page/>
      </b-container>
    </div>
  </div>
</template>

<script>
import TasksPage from './components/TasksPage.vue';


export default {
  name: "App",
  components: {
    TasksPage
},
};
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
