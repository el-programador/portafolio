<template>
    <div class="loader">
      
        <span style="--i:5;">P</span>
        <span style="--i:6;">R</span>
        <span style="--i:7;">O</span>
        <span style="--i:8;">G</span>
        <span style="--i:9;">R</span>
        <span style="--i:10;">A</span>
        <span style="--i:11;">M</span>
        <span style="--i:12;">M</span>
        <span style="--i:13;">E</span>
        <span style="--i:14;">R</span>
        <span style="--i:15;">-</span>
        
        <span style="--i:20;">D</span>
        <span style="--i:21;">E</span>
        <span style="--i:22;">V</span>
        <span style="--i:23;">E</span>
        <span style="--i:24;">L</span>
        <span style="--i:25;">O</span>
        <span style="--i:26;">P</span>
        <span style="--i:27;">E</span>
        <span style="--i:28;">R</span>
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
        font-family: consolas;
    }

    .loader span {
       position: relative;
       font-size: 2rem;
       /* color: #fff; */
       font-family: 'Poiret One', cursive;
       display: inline-block;
       text-transform: uppercase;
       animation: animate 2s ease-in-out infinite;
       animation-delay: calc(0.1s * var(--i));
       animation-play-state: paused;
        letter-spacing: 0.5cm;
    }
    .loader span {
        animation-play-state: running;
    }

    @keyframes animate {
         0%,40%,100%{
             transform: translate(0);
         }
         20% {
            transform: translate(-50%);
         }
        
    }

    /* medias querys */
        @media (width <= 500px) {
        .loader span {
          font-size: 18px;
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