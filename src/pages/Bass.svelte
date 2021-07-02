<script>
    import Navbar from "../components/Navbar.svelte";

    const bassDesc1 = `
        The electric bass is the lowest-sounding (and likely the biggest) member of the guitar family.
        While it does look somewhat similar to its younger brother, don't be fooled. It generates a much
        more interesting sound.
    `
    const bassDesc2 = `
        Interestingly enough, the bass works on the same principle as the electric guitar: pickups convert
        music vibrations into electric signals which are converted into sound by a loudspeaker. The reason
        sound is so low is because of how thick the strings are, and how much longer the neck of an electric
        bass is compared to the neck of a guitar.
    `
    const bassDesc3 = `
        I could go on and on, but I prefer to let the sound do the talking. Continue listening to the above
        video, and see the beauty of the bass for yourself!
    `
</script>

<svelte:head>
    <title>The Bass</title>
</svelte:head>

<template>
    <Navbar/>
    <div id="bg">
        <div id="content">
            <h1>The electric bass</h1>
            <p>&nbsp;&nbsp;&nbsp;{bassDesc1}</p>
            <iframe height="720" src="https://www.youtube.com/embed/FDKDdVilQT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p id="desc-2">&nbsp;&nbsp;&nbsp;{bassDesc2}</p>
            <p>&nbsp;&nbsp;&nbsp;{bassDesc3}</p>
            <div id="attrib">Photo by <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/@almapapi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krisztina Papp</a> on <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/photos/KP5uGpi5ftQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    </div>
</template>

<style lang="scss">
    @mixin media-phone($iframe-width) {
        #content {
            width: 80vw;
        }
    }
    #bg {
        background-image: url("/assets/images/bass-bg.webp");
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
    #desc-2 {
        margin-top: 1em;
    }
    #attrib {
        text-align: center;
        margin-bottom: 2em;
    }
    .link-attrib {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    iframe {
        width: 60vw;
        height: 30vw;
    }
</style>