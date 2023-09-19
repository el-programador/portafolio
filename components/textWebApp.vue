<template>
    <div class="loader">
        <span style="--i:1;">A</span>
        <span style="--i:2;">P</span>
        <span style="--i:3;">P</span>
        <span style="--i:4;">S </span>
        <span style="--i:5;">-</span>
        <span style="--i:6;">W</span>
        <span style="--i:7;">E</span>
        <span style="--i:8;">B</span>        
        <span style="--i:9;">S</span>        
        <span style="--i:10;">I</span>        
        <span style="--i:11;">T</span>        
        <span style="--i:12;">E</span>        
        <span style="--i:13;">S</span>        
        
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
        animation-play-state:paused; 
    }
  }
  @media (width <= 500px) {
        .loader:hover span {
        animation-play-state:  running;  
    }
  }
  @media (width >= 500px) and (width <= 800px) {
        .loader span {
          font-size: 25px;
          letter-spacing: 0.4cm;
      }
    }

</style>