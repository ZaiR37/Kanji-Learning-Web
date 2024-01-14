<script setup>
import blueSplashIMG from "../../assets/img/blue-splash.webp";
import kanjiScribleIMG from "../../assets/img/kanji-scrible.png";
</script>

<template>
    <section id="hero-image">
        <div id="center">
            <img id="background-bluesplash-img" :src="blueSplashIMG" alt="blue-splash.webp">
            <h1>LEARN JAPANESE WITH US NOW!</h1>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus non earum sint voluptatem,
                vero
                facere placeat inventore quo illo.</P>
        </div>
        <div id="scrible-wrapper">
            <img id="background-scrible-img" :src="kanjiScribleIMG" alt="kanji-scrible.png">
        </div>
    </section>
</template>

<style scoped>
#hero-image {
    height: 80vh;

    display: flex;
    justify-content: center;
}

#hero-image img {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

#hero-image #center {
    display: flex;
    position: relative;
    max-width: 470px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#hero-image #center>* {
    margin: 0;
}

#background-bluesplash-img {
    position: absolute;
    height: 100%;
    z-index: -1;
}

#hero-image #center h1 {
    font-size: 2.8em;
    text-align: center;
    min-width: 300px;
    max-width: 450px;
}

#hero-image #center p {
    padding-top: 20px;
    max-width: 400px;
    text-align: center;
}

#scrible-wrapper {
    position: absolute;
    right: 0px;
    width: 100vw;
    height: 89.8%;
    overflow: hidden;
}

#background-scrible-img {
    position: absolute;
    height: 100%;
    right: -50px;
    bottom: -50px;
    z-index: -2;
}
</style>