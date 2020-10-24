<template>
  <div class="header">
    <img>
    <nav class="header__nav">
      <ul class="header__nav__ul ">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about-me">About</router-link></li>
        <li><router-link to="/experience">Experience</router-link></li>
        <li><router-link to="/skills">Skills</router-link></li>          
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name:
    "Header",
}
</script>

<style lang='scss'>
@import '@/assets/styles/_header.scss';

</style>