
<template>
    <div>
        <section class="container-creative">
            <h2 data-text="ContactMe...">ContactMe...</h2>
        </section>


    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
section.container-creative {
    display: flex;
    justify-content: center;
    align-items: center;  
}
h2 {
 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    font-size: 3em; 
    color: #000;
    -webkit-text-stroke: 0.1vw #2e2c2c ;
    /* text-transform: uppercase; */
    letter-spacing: 0.2em;
}
h2::before{
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #f9005f;
    -webkit-text-stroke: 0vw #2e2c2c ;
    border-right: 1px solid #f9005f;
    overflow: hidden;
    animation: animate 6s linear infinite;
    letter-spacing: 0.2em;


}

@keyframes animate {
    0%,10%,100%{
        width: 0;
    }
    70%,90%{
        width: 100%;
    }
}
</style>