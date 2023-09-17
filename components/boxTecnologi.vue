<template>
    <section class="box2">
       <div class="box2">
            <h2> </h2>
            <span class="b2" style="--i:1;" ><img class="bx2" src="~/assets/img/nuxt.svg" alt="Nuxt js"></span>
            <span class="b2" style="--i:2;" ><img class="bx2" src="~/assets/img/html.svg" alt="html 5"></span>
            <span class="b2" style="--i:3;" ><img class="bx2" src="~/assets/img/css.svg" alt="Css 3"></span>
            <span class="b2" style="--i:4;" ><img class="bx2" src="~/assets/img/vue.svg" alt="Vue js3"></span>
            <span class="b2" style="--i:5;" ><img class="bx2" src="~/assets/img/php.svg" alt="PHP"></span>
            <span class="b2" style="--i:6;" ><img class="bx2" src="~/assets/img/angular.svg" alt="Angular"></span>
            <span class="b2" style="--i:7;" ><img class="bx2" src="~/assets/img/flutter.svg" alt="Flutter"></span>
            <span class="b2" style="--i:8;" ><img class="bx2" src="~/assets/img/nodejs.svg" alt="NodeJs"></span>
        </div> 
        <div class="box3">        
            <span class="b3" style="--i:1;" ><img class="bx3" src="~/assets/img/tailwindcss.svg" alt="Tailwind Css"></span>
            <span class="b3" style="--i:2;" ><img class="bx3" src="~/assets/img/laravel.svg" alt="Laravel"></span>
            <span class="b3" style="--i:3;" ><img class="bx3" src="~/assets/img/graphql.svg" alt="GraphQl"></span>
            <span class="b3" style="--i:4;" ><img class="bx3" src="~/assets/img/javascript.svg" alt="Javascript"></span>
            <span class="b3" style="--i:5;" ><img class="bx3" src="~/assets/img/github.svg" alt="Github"></span>
            <span class="b3" style="--i:6;" ><img class="bx3" src="~/assets/img/ionic.svg" alt="Ionic"></span>
            <span class="b3" style="--i:7;" ><img class="bx3" src="~/assets/img/mysql.svg" alt="MySql"></span>
            <span class="b3" style="--i:8;" ><img class="bx3" src="~/assets/img/wordpress.svg" alt="Wordpress"></span>
        </div> 
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

/* section 2 */
section.box2 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50VH;
}
div.box2{
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: animate 20s linear infinite;
    /* animation-play-state: paused; */
}
@keyframes animate {
    0%{
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
    100%{
        transform: perspective(1000px) rotateX(360deg) rotateY(0deg);
    }
}
div.box2 span.b2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 60%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateX(calc(var(--i) * 45deg)) translateZ(200px);
 
}
/* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: 0.5s;
} */
div.box2 span.b2 img.bx2 {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 70%;
    object-fit: cover;
}

h2{
    color: white;
    font-size: 50px;
    font-family: 'Poiret One', cursive;
    text-transform: uppercase;
}   

 i {
    color: white;
    font-size: 20px;
    z-index: 100;
    top: 120%;
    position: relative;
    margin-left: 50px;
    display: none;   
}
span:hover i{
    display: block;
}


/* section 3 */
div.box3{
    margin-left: -110px;
    
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: animate3 25s linear infinite;
    /* animation-play-state: paused; */
}
@keyframes animate3 {
    0%{
        transform: perspective(1000px) rotateX(360deg) rotateY(90deg);
    }
    100%{
        transform: perspective(1000px) rotateX(0deg) rotateY(90deg);
    }
}
div.box3 span.b3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 60%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateX(calc(var(--i) * 45deg)) translateZ(200px);
}
div.box3 span.b3 img.bx3 {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 70%;
    object-fit: cover;
}


</style>