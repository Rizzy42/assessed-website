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
            guitarRiff.once("unlock", () => guitarRiff.play() );
        }
    })
    guitarRiff.play();
    

    // Variables for the descriptions of the instruments
    let guitarDesc = "The electric guitar is the most versatile and one of the most loved of all the instruments, with its prescence felt deeply in all genres and songs. From pure pop to hard rock to ambient jazz, you can find this instrument just about anywhere. "
    let bassDesc = "asdf";
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
            <p class="attrib-image" transition:fade="{{delay: 7000}}">Photo by <a target="_blank" rel="noopener" class="link-attrib-image" href="https://unsplash.com/@julianlozano?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julian Lozano</a> on <a target="_blank" rel="noopener" class="link-attrib-image" href="https://unsplash.com/s/photos/guitar-concert?utm_source=unsplash&utm_medium=referral&utm_content=creditcopytextt">Unsplash</a></p>
        </div>
   
    </div>
    <div id="content">
        <div id="bg-guitar">
            <div class="content-instr">
                <h1>The electric guitar</h1>
                <p class="desc-instr">{guitarDesc}</p>
                <p id="attrib-guitar">Photo by <a class="link-attrib-image" href="https://unsplash.com/@pt_samv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sam Vanagtmael</a> on <a class="link-attrib-image" href="https://unsplash.com/s/photos/electric-guitar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            </div>
        </div>
        <div id="bg-bass">
            <div class="content-instr">
                <h1>The electric bass</h1>
                <p class="desc-instr">{bassDesc}</p>
            </div>
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
    @mixin instr-image() {
        background-size: cover;
        background-position: center center
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
    
    .attrib-image {
        @include white-paint-font;
    }
    .link-attrib-image {
        text-decoration: none;
        color: #ffffff;
        justify-self: center;

        &:hover {
            text-decoration: underline;
        }
    }
    #bg-guitar {
        @include instr-image();
        background-image: url("/assets/images/guitar.webp");
    }
    #bg-bass {
        @include instr-image();
        background-image: url("/assets/images/bass.webp");
    }
    .content-instr {
        @include flexbox(column);
        padding: 10em 2em;
        justify-content: center;
        backdrop-filter: blur(1em);
        h1 {
            @include paint-font(var(--main-colour));
            font-size: 3em;
            font-weight: bold;   
        }
        .desc-instr {
            @include white-paint-font;
            font-size: 2em;
        }
    }
    #attrib-guitar {
        @include white-paint-font();
        align-self: center;
        font-size: 1em;
    }
    
    /* @media queries to resize fonts accordingly for smaller screens */
    @media screen and (max-width: 950px) {
        #title-main {
            font-size: 7em;
        }
        
        #title-text-small {
            font-size: 1em;
        }
        
        .attrib-image {
            font-size: 0.7em;
        }
        #div-main {
            backdrop-filter: blur(0);
        }
        .content-instr {
            backdrop-filter: blur(0);
            h1 {
                font-size: 2em;
            }
            .desc-instr {
                font-size: 1.5em;
            }
        }
    }
</style>