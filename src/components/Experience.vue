<template>
  <div class="experience">
    <section class="experience__title">
      <span class="experience__title__1">MY  </span>
      <span class="experience__title__2">  EXPERIENCE</span>
    </section>
    <section class="experience__description">
      <router-link
        class="button btn-experience"
        active-class="active"
        to="/experience/One"
        >BDO - Perú <br> (2014 - 2015)</router-link
      >
      <router-link
        class="button btn-experience"
        active-class="active"
        to="/experience/Two"
        >PwC - Perú <br> (2015 - 2017)</router-link
      >
      <router-link
        class="button btn-experience"
        active-class="active"
        to="/experience/Three"
        >Quorum Soho Square - Mi Manzana <br> (2018 - 2020)</router-link
      >
    </section> 
    <section class="experience__container">
      <router-view></router-view>      
    </section>
    <section class="experience__wsp">
      <a href="https://api.whatsapp.com/send?phone=51960482053&text=Hola,%20Ruth,%20deseo%20conocer%20m%C3%A1s%20de%20tus%20servicios.">
      <svg color="#ffffff" height="35" width="35" viewBox="0 0 31.878 32.087" xmlns="http://www.w3.org/2000/svg" class="SVGIcon__CustomIcon-sc-1qhadx1-0 cNiDnv">
        <g transform="translate(3 2)"><g transform="translate(0 0)">
        <path fill="#00d56b" d="M11.686,0a11.627,11.627,0,0,1,0,23.254c-3.114,0-7.84.663-10.119-1.518C-.458,19.806.059,14.934.059,11.627A11.627,11.627,0,0,1,11.686,0Z" transform="translate(1.717 1.279)"></path>
        <g transform="matrix(1, 0, 0, 1, -3, -2)">
        <path d="M12.306.015a12.943,12.943,0,0,0-10.9,18.8L.035,25.481a.5.5,0,0,0,.609.592l6.534-1.548A12.939,12.939,0,1,0,12.306.015ZM20.1,20.1A10.138,10.138,0,0,1,8.43,22.012l-.91-.453-4.006.949.843-4.093-.448-.878A10.139,10.139,0,0,1,5.775,5.775,10.131,10.131,0,1,1,20.1,20.1Z" transform="translate(3 2)"></path>
        </g>
        <path d="M12.3,9.426,9.89,8.676A.85.85,0,0,0,9,8.93l-.589.651a.829.829,0,0,1-.954.218A13.253,13.253,0,0,1,3.311,5.832a1.018,1.018,0,0,1,.069-1.055l.514-.722a1.042,1.042,0,0,0,.111-.989L2.992.58A.865.865,0,0,0,1.59.232,4.437,4.437,0,0,0,.024,2.824c-.171,1.83.553,4.138,3.289,6.909,3.161,3.2,5.693,3.624,7.341,3.191a4.171,4.171,0,0,0,2.153-2.037A1,1,0,0,0,12.3,9.426Z" transform="translate(6.693 6.438)"></path>
        </g></g>
      </svg>          
      </a>      
    </section>    
  </div>  
</template>

<script>
export default {
  name:
    "Experience",
}
</script>

<style lang='scss'>
@import '@/assets/styles/_experience.scss';
</style>