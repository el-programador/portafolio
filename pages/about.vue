<template>
            <TextAnimated class="mitextanimated" />
            <TextWebApp class="texwebapp" />
             <div class="container">
    
                <div class="div-text">
                    <div class="xs-modal-header">
							<h2 class="person-title white">Mi nombre es: Robert Mejia</h2>
							<span class="perosn-designation">Programador, diseñador  y Creador  FULL-STACK</span>
					</div>
						<!-- .xs-modal-header END -->
					<div class="xs-modal-body">
							
						
						<p class=" white pt-2">	Con más de 7 años de experiencia en el mundo de la Programación y Master en dirección y administración de empresas</p>
						<p class=" white pt-2">	 Soy especialista NUXT Js y VUE js.	</p>
                            <p class=" white pt-2">	
                            Poseo conocimientos y uso en proyectos de lenguajes como: Javascript, PHP y Dart.</p>
                        <p class=" white pt-2">	  
                            BASE DE DATOS como: MySql, MongoDb, Supabase, Firebase.</p>
                        <p class=" white pt-2">	 uso de Node js, y framenworks como: Angular, Vue, typeScript, Laravel. </p>
                        <p class=" white pt-2">	Desarrollo de aplicaciones para Android e IOS con IONIC y FLUTER.</p>
                            <p class=" white pt-2">	Además del trabajo a diario con HTML, CSS, Wordpress, Bootstrap, Tailwind, y Jquery </p>
                            <p class=" white pt-2">	Acopañadas de las mejores prácticas en programación para beneficio de todo aquel que necesite mis servicios como profesional.</p>
					</div>
                
                </div>
                <br><br>
                <div class="div-img">
                     <BoxTecnologi />
                    
                </div>
            </div>
    

           
        
        <!-- scroll icon -->


            <nuxt-link to="/projects" >
               <BotonScroll  />
            </nuxt-link>
      
   
    

  
</template>

<script setup lang="ts">

</script>

<style scoped>
.mitextanimated {
    margin-top: 100px;
}
.texwebapp{
    margin-top: 50px;
}
@media (width <= 800px) {
    .mitextanimated {
    margin-top: 50px;
}
}
.container {
    display: flex;
    justify-content: space-between;
    align-items:center;
   
}   
p { 
   font-size: 20px;
  
   font-family: 'Poiret One';
}
.div-text{
    width: 50%;
    margin: 20px 20px 20px 100px;
}
.div-img{
    width: 50%;
    margin: 50px;
}
 

      /* media querys */
      @media (width <= 800px) {
        .container {
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap; 
}   
}
 @media (width <= 800px) {
    .div-text {
        width: 100%;
        margin: 10px 10px 10px  50px;               
    }
}
@media (width <= 800px) {
        .div-img {
            width: 90%;
            margin: 0px 10px 10px  10px;
               
    }
}



</style>