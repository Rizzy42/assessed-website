<script>
    import Navbar from "../components/Navbar.svelte";

    const guitarDesc1 = `
       The Electric guitar is one of the most versatile instruments, capable of producing a massive range of sounds
       thanks to its electronic design. 
    `
    const guitarDesc2 = `
        Unlike a standard acoustic guitar, it uses one or more pickups to convert the musical vibrations of the strings into sounds into electronic signals,
        which are then interpreted and produced by a loudspeaker. 
        The design's strength lies in the electronic conversion process, as the sounds can be altered before they are sent 
        to the loudspeaker. This alteration is done through the use of effects that can distort, echo, or even 
        intensify the sound.
    `
    const guitarDesc3 = `
        Of course, there are also ways to alter the sound manually. Strings can be bent to increase the pitch of a note, or the fingers may
        be slid along the neck to generate a smooth, changing sound (as in the home page). Experienced electric guitarists
        will also be adept at "shredding", a technique in which notes are played extremely fast and precisely, often for long bursts at a time. 
        Rob Chapman's Ghost Fret is a really good example of this.
    `
    const guitarDesc4 = `
        Test
    `
</script>
<svelte:head>
    <title>The Guitar</title>
</svelte:head>

<template>
    <Navbar/>
    <div id="bg">
        <div id="content">
            <h1>What is the Electric Guitar?</h1>
            <p>&nbsp;&nbsp;&nbsp;{guitarDesc1}</p><br/>
            <div class="content-container">
                <div id="content-container-2">
                    <p>&nbsp;&nbsp;&nbsp;{guitarDesc2}</p><br>
                    <iframe width="642" height="361" src="https://www.youtube.com/embed/pvPgOmURNno?start=76&end=92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p id="desc-2">&nbsp;&nbsp;&nbsp;{guitarDesc3}</p>
            </div>
            <div id="attrib">Photo by <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/@adro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alejandro Morelos</a> on <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/s/photos/electric-guitar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    </div>
</template>

<style lang="scss">
    @mixin media-phone($iframe-width) {
        #content-container-2 {
            flex-direction: column;
            height: auto;
            iframe {
                width: $iframe-width;
            }
        }
        #content p {
            width: 80vw;
        }
        #desc-2 {
            align-self: center;
        }
    }
    #bg {
        background-image: url("/assets/images/guitar-bg.webp");
        background-size: cover;
        background-position: center center;
        // Flexbox for centering the content div
        display: flex;
        flex-direction: column;
        align-items: center;
        // Ensures that height can accomodate all content
        height: 100%;
        // Navbar does not cover content div
        padding-top: 5em;
    }
    #content {
        color: #fff;
        font-family: Rawk Brush;
        // Makes content 60% of the width of viewport
        width: 60vw;
        // Blurs only the area the text is on, meaning the rest of the image is sharp
        backdrop-filter: blur(0.2em);
        // Even more flexbox for working with elemetns inside the content
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3em;
        h1 {
            text-align: center;
        }
        p {
            font-size: 1.5em;
        }
    }
    .content-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    #content-container-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 22em
    }
    #attrib {
        text-align: center;
        margin-bottom: 2em;
    }
    iframe {
        padding: 1em;
    }
    .link-attrib {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    @media screen and (max-width:430px) {
        @include media-phone(20em);
    }
    @media screen and (min-width: 430px) and (max-width: 840px) {
        @include media-phone(30em);
    }
    @media screen and (min-width:840px) and (max-width:1390px) {
        @include media-phone(50em);
    }
</style>