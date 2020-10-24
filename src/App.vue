<template>
  <div class="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
  Layout,
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';

.app {
	overflow: hidden;
}
</style>
