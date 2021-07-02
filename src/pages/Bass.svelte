<script>
    import Navbar from "../components/Navbar.svelte";

    const bassDesc1 = `
        The electric bass is the lowest-sounding (and likely the biggest) member of the guitar family.
        While it does look somewhat similar to its younger brother, don't be fooled. It generates a much
        more different sound.
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
            <div id="attrib">Photo by <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/@almapapi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Krisztina Papp</a> on <a target="_blank" rel="noopener" class="link-attrib" href="https://unsplash.com/photos/KP5uGpi5ftQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
        </div>
    </div>
</template>

<style lang="scss">
    @mixin media-phone() {
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
    @media screen and (max-width:430px) {
        @include media-phone();
    }
    @media screen and (min-width: 430px) and (max-width: 840px) {
        @include media-phone();
    }
    @media screen and (min-width:840px) and (max-width:1390px) {
        @include media-phone();
    }
</style>