<template>
  <navbar></navbar>
  <h1>{{ title }}</h1>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  data () {
    return {
      title: 'Hello world'
    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
  @import './styles/style.scss'
</style>