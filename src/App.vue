<template>
  <div id="app">
    <Header/>
    <Top />
  </div>
</template>

<script>
import Top from './pages/Top.vue'
import Header from './components/Header.vue'




export default {
  name: 'App',
  components: {
    Top,
    Header
  }
}
</script>

<style>

</style>
