import { Modo } from '../.nuxt/components';


<template>
    <div>
      <div id="home" class="header-top" >
        <div class="canvas_go">
            <div id="particles-js"></div>
            <div class="count-particles">
                <span class="js-count-particles"></span>
            </div>
        </div>
        
    

        <div class="text-start-center">
            <div class="content">
              
                <h1>I am <span id="typing-text"> Rob</span> 
               <TextAnimated class="mitextanimated" />
              <MyTextAnimated class="mitextanimated" />
                </h1>
               
            </div>
           
        </div>

       
        
        
        <!-- scroll icon -->
            <nuxt-link to="/about">
                <BotonScroll/>
             </nuxt-link>
       
      
        <!-- social media -->
     
     
 </div>
       
  

    </div>
</template>

<script setup lang="ts">


useHead({
    title: 'My Portafolio',
    meta: [
        {
            name: 'description',
            content: 'Portafolio de Rob Mejia'
        }
    ],
    link: [
        {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        }
    ],
    script: [
        {
            src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
        },       
        {
            src: 'js/particles.min.js',
            body: true,         
        },
        {
            src: 'js/particles.js',
            body: true,
        },
        
        
    ]
})


</script>

<style scoped>
.mitextanimated{
    margin-top: 50px;
}

html, div.header-top{
    position: absolute;
    margin:0px;
    padding: 0px;
    background-image: url(img/bg-1.png);
    background-size: cover;
    background-position: center;
    z-index: 1;
    background-repeat: no-repeat;    
}


</style>