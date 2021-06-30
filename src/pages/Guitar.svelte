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
</script>
<svelte:head>
    <title>The Guitar</title>
</svelte:head>

<template>
    <Navbar/>
    <div id="bg">
        <div id="content">
            <h1>What is the Electric Guitar?</h1>
            <p>&nbsp;&nbsp;&nbsp;{guitarDesc1}<br/>&nbsp;&nbsp;&nbsp;{guitarDesc2}<br/>&nbsp;&nbsp;&nbsp;{guitarDesc3}</p>
            <!-- TODO Center iframe -->
            <iframe width="642" height="361" src="https://www.youtube.com/embed/pvPgOmURNno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div id="attrib">Photo by <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/@adro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alejandro Morelos</a> on <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/s/photos/electric-guitar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    </div>
</template>

<style lang="scss">
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
    }
    #content {
        color: #fff;
        font-family: Rawk Brush;
        // Makes content 60% of the width of viewport
        width: 80vw;
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
    #attrib {
        text-align: center;
        margin-bottom: 2em;
    }
    iframe {
        align-self: center;
    }
    .link-attrib {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }

</style>