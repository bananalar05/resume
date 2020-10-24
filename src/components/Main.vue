<template>
  <main class="main">
<!--     <Home />    
    <AboutMe />
    <Experience />
    <Skills /> -->
    <router-view></router-view>
  </main>  
  
</template>

<script>
/* import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills"; */
export default {
  name: "Main",
/*   components: {
    Home,    
    AboutMe,
    Experience,
    Skills,
  } */
}
</script>

<style lang='scss'>
@import '@/assets/styles/_mainbody.scss';

</style>