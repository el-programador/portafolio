<script setup lang="ts">
//NO HACE FALTA IMPORTAT  useColorMode, useCycleList, watchEffect  from "@vueuse/nuxt";

const mode = useColorMode({
  emitAuto: true,
  modes: {
    contrast: "dark contrast",
    cooffe: "cooffe",
  },
});

const { state, next } = useCycleList(["dark", "light", "cooffe"], {
  initialValue: mode,
});

watchEffect(() => (mode.value = state.value as any));
</script>

<template>
  
    <span @click="next()" class="boton">
      <p class="estado"> {{ state }}</p>
    </span>

   

</template>

<style>
html.cooffe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
  color: #917676;
}
html.dark {
  background-color: black;
  color: white;
}

html.light {
  background-color: white;
  color: black;
}


  p.estado{
  position: absolute;
    bottom: 20%;
    left: 30px;
    z-index: 19;
    letter-spacing: 1px;
    font-size: 14px;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    font-weight: 400;
    line-height: 16px;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
}
p.estado {
  border: #fff solid 1px;
  margin: 10px 5px;
  padding: 10px 5px;
  border-radius: 10px;
  cursor: pointer;
  position: fixed;
}

p.estado{ 
  margin: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
}

html.contrast {
  filter: contrast(2);
}
@media (width <= 800px) {
  p.estado{
  position: fixed;
  bottom: 25%;
}   
}
</style>
