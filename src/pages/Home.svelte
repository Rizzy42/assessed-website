<script>
    import Navbar from "../components/Navbar.svelte";

    // Importing links from svelte-router to create navigation
    import { Link } from "svelte-routing";
</script>

<main>
    <Navbar/>
    <div id="div-main">
        <p id="title-text-small">Welcome to the world of</p>
        <h1 id="title-main">Guitar</h1>
    </div>
</main>

<style>
    #div-main {
        background-image: url("/assets/images/guitar-concert.jpg");
        height: 100vh;
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
    #div-main::backdrop {
        filter: blur(4px);
    }
    #title-main {
        font-family: Rawk Brush;
        font-size: 20em;
        color: #00ffcc;
    }
    #title-text-small {
        color: #fff;
        font-family: Rawk Brush;
        font-size: 5em;
        margin-bottom: 0;
    }
    /* @media queries to resize fonts accordingly for smaller screens */
    @media screen and (max-width: 950px) {
        #title-main {
            font-size: 7em;
        }
        #title-text-small {
            font-size: 1em;
        }
    }
</style>