<template>
  <div class="layout">
    <Header />
    <Main class="main" ></Main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style scoped>
.layout{
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll;
}
.main{
  flex-grow: 1;
}
</style>