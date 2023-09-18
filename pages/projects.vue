<template>
    <div class="projects">
        <TextAnimated class="mitextanimated" />
        <TextWebApp class="texwebapp" />
       
        <section class="box1">
        <div class="box">
            <h2 class="text">Last Projects </h2>
            <span style="--i:1;" ><NuxtLink to="http://iluseo.com" target="_blank"><img src="~/assets/img/iluseo.png"><div class="card-text"><i>Mi pagina web con mis servicios y ofertas <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:2;" ><NuxtLink to="http://espatris.com" target="_blank"><img src="~/assets/img/espatris.png"><div class="card-text"><i>Blog especializado life-style <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:3;" ><NuxtLink to="http://fisbanda.com" target="_blank"><img src="~/assets/img/fisbanda.png"><div class="card-text"><i>Página creada para un cliente <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:4;" ><NuxtLink to="https://karczma-zakopane.com" target="_blank"><img src="~/assets/img/karczma.png"><div class="card-text"><i>Página creada para una clienta <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:5;" ><NuxtLink to="https://iluseo-films.web.app" target="_blank"><img src="~/assets/img/app-films.png"><div class="card-text"><i>APP. De peliculas <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:6;" ><NuxtLink to="https://iluseo.com/blog?pagina=1" target="_blank"><img src="~/assets/img/paja-web.png"><div class="card-text"><i>Un Blog personalizado para una clienta <p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:7;" ><NuxtLink to="https://iluseo-pokemon.netlify.app" target="_blank"><img src="~/assets/img/pokemon.png"><div class="card-text"><i>APP. Demuestra cuánto sabes sobre Pokemons<p class="visitar"> VISITAR -></p></i></div></NuxtLink></span>
            <span style="--i:8;" ><NuxtLink to="https://iluseo-indecision.netlify.app" target="_blank"><img src="~/assets/img/si-no.png"><div class="card-text"><i>App. Preguntale Lo que quieras <p class="visitar">VISITAR -></p></i></div></NuxtLink></span>
       
        </div>      
    </section>
     <!-- scroll icon -->
     <nuxt-link to="/contact">
        <BotonScroll />
    </nuxt-link>
       
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');

.mitextanimated {
    margin-top: 100px;
}
@media (width <= 800px) {
    .mitextanimated {
    margin-top: 50px;
}
  }
.texwebapp{
    margin-top: 50px;
}
@media (width <= 800px) {
    div.projects{
   position: fixed;
  width: 100%; 
   min-height: 100VH; 
}
}
section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70VH; 
}
@media (width <= 800px) {
    section{
    min-height: 50VH; 
}
}
.box{
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
     animation: animate 20s linear infinite; 
}
@media (width <= 500px) {
    .box{
   
    width: 130px;
    height: 130px;
}
}


.box:hover{
    animation-play-state: paused;
    cursor: pointer;
}


@keyframes animate {
    0%{
        transform: perspective(1000px) rotateY(0deg);
    }
    100%{
        transform: perspective(1000px) rotateY(360deg);
    }
}

.box span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
    -webkit-box-reflect: below 0px linear-gradient(transparent,transparent,#0004) ;
}
.box span img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


h2{  
    font-size: 50px;
    font-family: 'Poiret One', Arial;
    text-transform: uppercase;
}   
@media (width <= 800px) {
    h2{  
    font-size: 35px;

}   
}
@media (width <= 500px) {
    h2{  
    font-size: 25px;
}   
}
 div.card-text {
    color: white;
    font-size: 20px;
    z-index: 100;
    top: 0%;
    position: relative;
    display: none; 
    width: 100%;
    height: 100%;
    background-color: rgb(56, 55, 55, 0.5);
    padding: 0%;
    margin: 0%;

}
span:hover div.card-text{
    display: block;
}
p.visitar{
    font-size: 16px;
    font-family: 'Poiret One', Arial !important;
    /* background-color: rgb(182, 186, 188); 
    border-radius: 25px;
    padding: 2px; */
}
p.movil{
    display: none;
}
i {
position: absolute; 
margin-top: 30%;
text-align: center;
padding: 10px; 
font-family: 'Poiret One', Arial !important;

}
@media (width <= 500px) {
    i{  
    margin-top: 0;
}   
}

@media (width <= 500px) { 
 div.card-text {  
    font-size: 15px;  
}
}
@media (width <= 500px) { 
 p {  
    font-size: 12px;  
}
}


</style>