<script>
    import Navbar from "../components/Navbar.svelte"

    // Variables for the descriptions of the instruments
    let guitarDesc = "The electric guitar is the most versatile and one of the most loved of all the instruments, with its prescence felt deeply in all genres and songs. From pure pop to hard rock to ambient jazz, you can find this instrument just about anywhere. "
</script>

<template>
    <Navbar/>
    <div id="div-main">
        <p id="title-text-small">Welcome to the world of</p>
        <h1 id="title-main">Guitar</h1>
        <!-- "_blank" targets open links in a new tab -->
        <!-- "noopener" prevents external page from controlling my page, i.e. enhances security -->
        <p id="attrib-main-image">Photo by <a target="_blank" rel="noopener" class="link-attrib-main-image" href="https://unsplash.com/@sanarara?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Xie lipton</a> on <a target="_blank" rel="noopener" class="link-attrib-main-image" href="https://unsplash.com/s/photos/concert?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    </div>
    <div id="content">
        <div id="content-guitar">
            <h1>The electric guitar</h1>
            <p>   {guitarDesc}</p>
        </div>
    </div>
</template>

<style lang="scss">
    @mixin white-paint-font {
        font-family: Rawk Brush;
        color: #fff;
    }
    @mixin paint-font($colour) {
        font-family: Rawk Brush;
        color: $colour;
    }

    #div-main {
        background-image: url("/assets/images/guitar-concert.jpg");
        height: 115vh;
        /* One image to cover the entire section */
        background-size: cover;
        /* Flexbox will make it easy to position everything */
        display: flex;
        /* Subtitle should be above title */
        flex-direction: column;
        /* Titles should be in the middle of the section */
        justify-content: center;
        align-items: center;

        /* Gets rid of ugly white space */
        margin: 0;
    }
    
    #title-main {
        @include paint-font(#2b119e);
        font-size: 20em;
        transform: skewY(-11deg);
    }    
    #title-text-small {
        @include white-paint-font;
        font-size: 2em;
        /* Subtitle should stay close to title */
        margin-bottom: 0;
    }
    
    #attrib-main-image {
        @include white-paint-font;
    }
    .link-attrib-main-image {
        text-decoration: none;
        color: var(--main-colour);

        &:hover {
            text-decoration: underline;
        }
    }
    
    #content-guitar {
        padding: 10em 2em;
        background-image: url("/assets/images/guitar.jpg");
        background-size: cover;
        h1 {
            @include paint-font(var(--main-colour));
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