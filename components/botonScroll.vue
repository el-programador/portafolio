
<template>
      <div class="dayNigth scroll-mouse">
           
            <div class="scroll-icon"></div>
        </div>

</template>


<style scoped>

/* bottom scroll  */
.scroll-icon {
    position: fixed;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 5%;
    z-index: 11;
    width: 38px;
    height: 63px;
    border-radius: 25px;
    box-shadow: inset 0 0 0 1px #d8cece;
}
.scroll-icon::before {
    content: '';
    position: absolute;
    left: 50%;
    background-color: #f9005f;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px !important;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
}
@keyframes scroll {
    0%{
       opacity: 1; 
    }
    100%{
        opacity: 0;
        transform: translateY(36px);
    }
}


 /* texto animado typing */


</style>