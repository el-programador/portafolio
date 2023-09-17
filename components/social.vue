<template>
     <div class="r-social">
        
            <p class="social-media">
                <NuxtLink to="https://www.linkedin.com/in/robert-mej%C3%ADa-gallardo-15241bb4/" title="Linkedin" target="_blank"> <Icon name="fa:linkedin"></Icon> </NuxtLink>
                <NuxtLink to="https://github.com/el-programador" title="GitHub" target="_blank"> <Icon name="fa:github"></Icon> </NuxtLink>
                <NuxtLink to="https://www.instagram.com/iluseoo" title="Instagram" target="_blank"> <Icon name="fa:instagram"></Icon> </NuxtLink>
                <NuxtLink to="https://www.youtube.com/@espatris3781" title="Youtube" target="_blank"> <Icon name="fa:youtube"></Icon> </NuxtLink>              
            
            </p>
        </div>
</template>
<style scoped>

/* r-social */
svg {
    width: 15px;
    height: 15px;
}
.r-social{
   position: fixed;
   bottom: 0;
    right: 0;
   z-index: 10;
}

.r-social a{
    font-size: 15px;
    padding: 10px;
 }

 i{
    color: #f9005f;
    font-style: normal;
}
.social-media {
    text-align: center;
    font-size: 18px;
    margin: 0 20px;
    padding: 15px 0;

}

@media(width <= 900px) {
    .social-media{
        writing-mode: vertical-lr;
}
}
.social-media  a {
    color: white;
    text-decoration: none;
    outline: 0 none;
    padding: 0 10px;
}
.social-media  a:hover {
    color: #f9005f;
}

@media(width <= 900px) {
    .r-social  a svg{
  
    padding: 10px;
 }
}

.social-media .tooltip.bottom .tooltip-arrow {
    border-bottom: #f9005f;
} 
.social-media .tooltip-inner {
    background-color: transparent;
    border-bottom: #f9005f;
    font-size: 16px;
} 

@media(width <= 500px) and (width <= 800px) {
    svg {
    width: 12px;
    height: 12px;
    padding: 0;
}
}

</style>