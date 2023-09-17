import component from '../.nuxt/types/vue-shim';
<template>
    <div>
        <nav class="social">
           <br><br><br><br><br>
      <ul>
        <NuxtLink to="/"> <li>Home<Icon id="icon" name="fa:home"></Icon></li></NuxtLink>
         <NuxtLink to="/about"> <li>About Me<Icon id="icon" name="fa:user-circle"></Icon></li></NuxtLink>
         <NuxtLink to="/projects"> <li id="i-projects">My Projects<Icon id="icon" name="fa:heart"></Icon></li></NuxtLink>
         <NuxtLink to="/contact"> <li>Contact Me<Icon id="icon" name="fa:whatsapp"></Icon></li></NuxtLink>
         
        </ul>
      </nav>
      <ColorMode/>

    </div>
</template>

<script setup>


</script>

<style scoped>

    a{
        color: white; 
        text-decoration: none;
        font-size: 20px;
      }
      .social {
         position: fixed;
         top: 35%;
         z-index: 2;
      }
      .social ul {
        padding: 0px;
        transform: translate(-270px, 0);
      }
      .social ul li{
        display: block;
        margin: 5px;
        background: rgb(0, 0, 0,0.3);
        width: 300px;
        text-align: right;
        padding: 3px;
        border-radius: 0 30px 30px 0;
        transition: all 1s;
      }
      .social ul li:hover {
        transform: translate(110px, 0);
        background: #f9005f;
      }
  
      .social ul li:hover #icon {
        content:'';
        color: #f9005f;
        background: white; 
        transform: rotate(360deg);
        transition: all 1s;
      }
      .social ul li #icon{
        margin-left: 20px;
        color: #fff;
      /* background: white; */
        padding: 5px;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        font-size: 20px;
        transform: rotate(0deg);
      }

      
  
      /* media querys */
   @media (width <= 800px) {
  .social{
    top: 0%;
    }
  }

  @media (width <= 800px) {
    .social ul li #icon {
      width: 20px;
      height: 20px;
    }


  }
  
</style>