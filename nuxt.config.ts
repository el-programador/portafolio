

export default defineNuxtConfig({
  appConfig: {
    nuxtIcon: {size: '50px'},
  },
  modules: [ 'nuxt-icon',
  '@vueuse/nuxt',],
  css: ['~/assets/css/main.css',
    // '~/assets/css/animate-headlines.css',
  ],
  app: {
    head: {
      title: 'Portafolio Rob Mejia',
  
      meta: [{
       charset: 'utf-8',
       name: 'description',
       content: 'Mi portafolio donde me mustro al mundo quien soy y mis proyectos que he hecho'
    }],
    
  },
  
  },

/*****************************************
          ssr: true, or false 
********************************************/
routeRules: {
  '/': { prerender: true },
  '/about': { ssr: false },
  '/projects': { ssr: true },
  '/contact': { ssr: false },
/* recuerda hacer el comando yarn run generate */
}

})
