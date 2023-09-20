<template>
    <div class="projects">
        <TextAnimated class="mitextanimated" />
        <TextWebApp class="texwebapp" />
       <ProjectsSlider />
     <!-- scroll icon -->
     <nuxt-link to="/contact">
        <BotonScroll />
    </nuxt-link>
       
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
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
</style>