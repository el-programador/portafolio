<template>
    <div class="loader">
        <span style="--i:1;"><img class="tecnologi" src="~/assets/img/nuxt.svg" alt="Nuxt js"></span>
        <span style="--i:2;"><img class="tecnologi" src="~/assets/img/html.svg" alt="html 5"></span>
        <span style="--i:3;"><img class="tecnologi" src="~/assets/img/css.svg" alt="Css 3"></span>
        <span style="--i:4;"><img class="tecnologi" src="~/assets/img/vue.svg" alt="Vue js3"></span>
        <span style="--i:5;"><img class="tecnologi" src="~/assets/img/php.svg" alt="PHP"></span>
        
    </div>
    <div class="loader">
        <span style="--i:6;"><img class="tecnologi" src="~/assets/img/angular.svg" alt="Angular"></span>
        <span style="--i:7;"><img class="tecnologi" src="~/assets/img/flutter.svg" alt="Flutter"></span>
        <span style="--i:8;"><img class="tecnologi" src="~/assets/img/nodejs.svg" alt="NodeJs"></span>
        <span style="--i:9;"><img class="tecnologi" src="~/assets/img/tailwindcss.svg" alt="Tailwind Css"></span>
        <span style="--i:10;"><img class="tecnologi" src="~/assets/img/laravel.svg" alt="Laravel"></span>
        
    </div>
    <div class="loader">
        <span style="--i:11;"><img class="tecnologi" src="~/assets/img/graphql.svg" alt="GraphQl"></span>
        <span style="--i:12;"><img class="tecnologi" src="~/assets/img/javascript.svg" alt="Javascript"></span>
        <span style="--i:13;"><img class="tecnologi" src="~/assets/img/github.svg" alt="Github"></span>
        <span style="--i:14;"><img class="tecnologi" src="~/assets/img/ionic.svg" alt="Ionic"></span>
        <span style="--i:15;"><img class="tecnologi" src="~/assets/img/mysql.svg" alt="MySql"></span>
        
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
       display: inline-block;
       animation: animate 2s ease-in-out infinite;
       animation-delay: calc(0.1s * var(--i));
       animation-play-state: running;
       letter-spacing: 0.5cm;
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
    img.tecnologi{
        width: 25px;
        padding: 5px 10px;
    }

</style>