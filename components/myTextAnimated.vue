<template>
    <div class="loader">
        <span style="--i:1;">F</span>
        <span style="--i:2;">U</span>
        <span style="--i:3;">L</span>
        <span style="--i:4;">L </span>
        <span style="--i:5;">-</span>
        <span style="--i:6;">S</span>
        <span style="--i:7;">T</span>
        <span style="--i:8;">A</span>
        <span style="--i:9;">C</span>
        <span style="--i:10;">K</span>
        
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .loader {
       display: flex;
       justify-content: center;
       align-items: center;
       position: relative;
      
    }

    .loader span {
       position: relative;
       font-size: 1.5rem;
       /* color: #fff; */
       font-family: 'Poiret One', cursive;
       display: inline-block;
       text-transform: uppercase;
       animation: animate 2s ease-in-out infinite;
       animation-delay: calc(0.1s * var(--i));
       animation-play-state: paused;
         letter-spacing: 0.5cm; 
    }
    .loader:hover  span{
        animation-play-state:running ;
    }

    @keyframes animate {
         0%,40%,100%{
             transform: translateY(0);
         }
         20% {
            transform: translateY(-50px);
         }
        
    }

    /* medias querys */
    @media (width <= 500px) {
        .loader span{
        font-size: 20px;
        letter-spacing: 0.2cm; 
    }
  }
  @media (width >= 500px) and (width <= 800px) {
        .loader span {
          font-size: 25px;
          letter-spacing: 0.4cm;
      }
    }

</style>