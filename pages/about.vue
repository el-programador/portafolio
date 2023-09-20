<template>
            <TextAnimated class="mitextanimated" />
            <TextWebApp class="texwebapp" />
             <div class="container">
    
                <div class="div-text">
                    <div class="xs-modal-header">
							<h2 class="person-title white">Hi 👋 soy: Robert Mejia</h2>
							<span class="perosn-designation">Programador, diseñador  y Creador  FULL-STACK</span>
					</div>
						<!-- .xs-modal-header END -->
					<div class="xs-modal-body">
							
						
						<p class="text-p">	Con más de 7 años de experiencia en el mundo de la Programación y Master en dirección y administración de empresas</p>
						<p class="text-p">	 Soy especialista NUXT Js y VUE js.	</p>
                            <p class="text-p">	
                            Poseo conocimientos y uso en proyectos de lenguajes como: Javascript, PHP y Dart.</p>
                        <p class="text-p">	  
                            BASE DE DATOS como: MySql, MongoDb, Supabase, Firebase.</p>
                        <p class="text-p">	 uso de Node js, y framenworks como: Angular, Vue, typeScript, Laravel. </p>
                        <p class="text-p">	Desarrollo de aplicaciones para Android e IOS con IONIC y FLUTER.</p>
                            <p class="text-p">	Además del trabajo a diario con HTML, CSS, Jquery, Bootstrap, Tailwind, y  Wordpress. </p>
                            
					</div>
                
                </div>
                <br><br>
                <div class="div-img">
                     <BoxTecnologi />   
                </div>
            </div>
            <div class="div-img-small">
                <ImgsTecnologi />
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
    margin-top: 40px;
}
}
@media (width <= 500px) {
    .texwebapp {
    margin-top: 20px;
}
}
@media (width <= 500px) {
    span.perosn-designation {
    margin-top: 0 !important;
}
}
.container {
    position: relative;
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
@media (width <= 500px) {
    .div-text {
        font-size: 13px;              
    }
}
@media (width <= 500px) {
    p.text-p {
        font-size: 14px;              
    }
}
@media (width <= 800px) {
        .div-img {
            width: 90%;
            margin: 0px 10px 10px  10px;
            display: none;   
    }
}

@media (width >= 800px) {
        .div-img-small {          
            display: none;   
    }
}

@media (width <= 500px) {
        .div-img-small {          
            margin-top: -50px; 
    }
}


</style>