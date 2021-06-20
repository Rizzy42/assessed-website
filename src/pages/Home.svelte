<script>
    // HowlerJS to implement guitar riff
    import { Howl, Howler } from "howler";
    // Imports required to implement transition
    import { fade } from "svelte/transition";
    // Components
    import Navbar from "../components/Navbar.svelte";

    let guitarRiff = new Howl({
        src: ["assets/audio/guitar-sound.webm", "/assets/audio/guitar-sound.mp3"],
        html: 5,
        preload: true,
        onplayerror: function() {
            guitarRiff.once("unlock", () => guitarRiff.play() )
        }
    })
    guitarRiff.play()
    

    // Variables for the descriptions of the instruments
    let guitarDesc = "The electric guitar is the most versatile and one of the most loved of all the instruments, with its prescence felt deeply in all genres and songs. From pure pop to hard rock to ambient jazz, you can find this instrument just about anywhere. "
</script>

<template>
    <Navbar/>
    <!-- Linter ignores warning -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- iFrame to play guitar sound as audio autoplay is blocked by Chromium browsers -->
    <div id="background-main">
        <div id="div-main">
            <p id="title-text-small" transition:fade="{{delay: 1500, duration: 300}}">Welcome to the world of</p>
            <h1 id="title-main" transition:fade="{{delay: 4000, duration: 400}}">Guitar</h1>
            <!-- "_blank" targets open links in a new tab -->
            <!-- "noopener" prevents external page from controlling my page, i.e. enhances security -->
            <p id="attrib-main-image" transition:fade="{{delay: 7000}}">Photo by <a target="_blank" rel="noopener" class="link-attrib-main-image" href="https://unsplash.com/@julianlozano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Lozano</a> on <a target="_blank" rel="noopener" class="link-attrib-main-image" href="https://unsplash.com/s/photos/guitar-concert?utm_source=unsplash&utm_medium=referral&utm_content=creditcopytextt">Unsplash</a></p>
        </div>
        <!-- TODO Add credits to guitar image -->
        Photo by <a href="https://unsplash.com/@pt_samv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Vanagtmael</a> on <a href="https://unsplash.com/s/photos/electric-guitar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   
    </div>
    <div id="content">
        <div id="content-guitar">
            <h1>The electric guitar</h1>
            <p>{guitarDesc}</p>
        </div>
    </div>
</template>

<style lang="scss">
    // Mixins for repetitive tasks
    @mixin white-paint-font {
        font-family: Rawk Brush;
        color: #fff;
    }
    @mixin paint-font($colour) {
        font-family: Rawk Brush;
        color: $colour;
    }

    @mixin flexbox($direction) {
        display: flex;
        flex-direction: $direction;
    }
    #background-main {
        background-image: url("/assets/images/guitar-concert.webp");
        /* One image to cover the entire section */
        background-size: cover;
    }
    #div-main {
        /* Flexbox will make it easy to position everything */
        /* Subtitle should be above title */
        @include flexbox(column);
        /* Blurs background image */
        backdrop-filter: blur(1em);
        height: 115vh;
        /* Titles should be in the middle of the section */
        justify-content: center;
        align-items: center;

        /* Gets rid of ugly white space */
        margin: 0;
    }
    
    #title-main {
        @include white-paint-font;
        font-size: 20em;
        transform: skewY(-11deg);
    }    
    #title-text-small {
        @include paint-font(#000000);
        font-size: 2em;
        /* Subtitle should stay close to title */
        margin-bottom: 0;
    }
    
    #attrib-main-image {
        @include white-paint-font;
    }
    .link-attrib-main-image {
        text-decoration: none;
        color: #ffffff;

        &:hover {
            text-decoration: underline;
        }
    }
    
    #content-guitar {
        @include flexbox(column);
        padding: 10em 2em;
        justify-content: center;
        background-image: url("/assets/images/guitar.webp");
        background-size: cover;
        background-position: center center;
        h1 {
            @include paint-font(var(--main-colour));
            font-size: 3em;
            font-weight: bold;   
        }
        p {
            @include white-paint-font;
            font-size: 2em;
        }
    }
    
    /* @media queries to resize fonts accordingly for smaller screens */
    @media screen and (max-width: 950px) {
        #title-main {
            font-size: 7em;
        }
        
        #title-text-small {
            font-size: 1em;
        }
        
        #attrib-main-image {
            font-size: 0.7em;
        }
    }
</style>