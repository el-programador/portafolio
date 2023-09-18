

<script setup lang="ts">
const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const enviar = () => {
    const resp = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    console.log(resp);
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    
    alert('Gracias por contactarme, pronto me pondre en contacto contigo')
}


</script>
<template> 
    <section> 
        <div class="box">
            <div class="cuadro" style="--i:0;"></div>
            <div class="cuadro" style="--i:1;"></div>
            <div class="cuadro" style="--i:2;"></div>
            <div class="cuadro" style="--i:3;"></div>
            <div class="cuadro" style="--i:4;"></div>
            <div class="container">
                <div class="form">
                    <!-- <h2> Contactame </h2> -->
                    <h6> <TextCreative /> </h6>
                    <form @submit.prevent="enviar">
                        <div class="inputBox">
                            <input v-model="name"  type="text" placeholder="Name or Company Name">
                        </div>
                        <div class="inputBox">
                            <input  v-model="email" type="email" placeholder="Email">
                        </div>
                        <div class="inputBox">
                            <input v-model="phone"  type="number" placeholder="Phone">
                        </div>
                        <div class="inputBox">
                           <textarea  v-model="message" placeholder="Your Message" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div class="inputBox">
                            <input  type="submit" value="Send">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>


<style scoped>
    section {

        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
         /* background: linear-gradient(to bottom, #080808, #e4eff7); */
    }
    @media (width <= 500px) {
        section {
        position: fixed;
    }
}
    .box{
        position: relative;
    }
    .cuadro{
        position: absolute;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0,0,0,0.1);
        border: 1px solid rgba(255,255,255,0.5);
        border-right: 1px solid rgba(255,255, 255,0.2);
        border-bottom: 1px solid rgba(255, 255,255,0.2);
        background: rgba(19, 19, 19, 0.1);
        border-radius: 10px;
        animation: animate 10s linear infinite;
        animation-delay: calc(-1s * var(--1));
    }
    @keyframes animate {
        0%,100% {
            transform: translateY(-40px);
        }
        50%{
            transform: translateY(40px);
        }
        
    }
    .cuadro:nth-child(1) {
        top: -50px;
        right: -60px;
        width: 100px;
        height: 100px;
    }
    .cuadro:nth-child(2) {
        top: 150px;
        left: -100px;
        width: 120px;
        height: 120px;
        z-index: 2;
    }
    .cuadro:nth-child(3) {
        bottom:  30px;
        right: -60px;
        width: 80px;
        height: 80px;
        z-index: 2;
    }
    .cuadro:nth-child(4) {
        bottom:  -80px;
        left: 50px;
        width: 50px;
        height: 50px;    
    }
    .cuadro:nth-child(5) {
        top:  -80px;
        left: 140px;
        width: 60px;
        height: 60px;  
        z-index: 2;  
    }


.container{
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgba(121, 120, 120, 0.1);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(142, 140, 140, 0.1);
    border: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255, 255,0.2);
    border-bottom: 1px solid rgba(255, 255,255,0.2);
}
@media (width <= 500px) {
    .container{
   
    width: 90%;
    box-shadow: none;
    border: none;
    border-right: none;
    border-bottom: none;
    margin-left: 25px;
    
}
}
.form{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px;
    border-radius: 10px;
    background: linear-gradient(120deg, black, transparent);
    /* background: rgba(176, 176, 176, 0.3); */
}
.form h2
{
position: relative;
color: #fff;
font-size: 24px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 40px;
}
.form h2::before{
    content: '';
    position: absolute;
    Left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background-color: #fff;

}
.form .inputBox {
width: 100%;
margin-top: 20px;
}

.form .inputBox input {
width: 100%;
background: rgba(121, 120, 120, 0.1);
border: none;
outline: none;
padding: 10px;
border-radius: 35px;
box-shadow: 0 25px 45px rgba(0,0,0,0.1);
border: 1px solid rgba(255,255,255,0.5);
border-right: 1px solid rgba(255,255, 255,0.2);
border-bottom: 1px solid rgba(255, 255,255,0.2);
font-size: 15px;
letter-spacing: 1px;
color: #fff;
box-shadow: o 5px 15px rgba(0,0,0,0.05);
}
textarea {
width: 100%;
background: rgba(121, 120, 120, 0.1);
border: none;
outline: none;
padding: 10px ;
border-radius: 10px;
box-shadow: 0 25px 45px rgba(0,0,0,0.1);
border: 1px solid rgba(255,255,255,0.5);
border-right: 1px solid rgba(255,255, 255,0.2);
border-bottom: 1px solid rgba(255, 255,255,0.2);
font-size: 15px;
letter-spacing: 1px;
color: #fff;
box-shadow: o 5px 15px rgba(0,0,0,0.05);

}
input::placeholder, textarea::placeholder{
    color: #918d8d;
}
 input[type="submit"]{
background: #fff;
color: #fff;
max-width: 180px;
cursor: pointer;
margin-bottom: 20px;
font-weight: 600;
}
input[type="submit"]:hover{
background: #f9005f;
}
</style>