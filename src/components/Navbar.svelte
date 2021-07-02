<template>
    <!-- nav for navbar -->
    <nav class="navbar  fixed-top navbar-expand-lg navbar-dark bg-dark">
        <!-- Full width container -->
        <div class="container-fluid">
           <a href="/home" class="navbar-brand">
                <p id="title-text-small">The world of</p>
                <h1>Guitar</h1>
           </a>
           <!-- Aligns navbar items to left and provides basic styling -->
           <ul class="navbar-nav me-auto">
               <li class="navbar-item" id="page-home">
                   <a href="/home" class="nav-link">Home</a>
               </li>
               <li class="navbar-item" id="page-home">
                   <a href="/instruments/guitar" class="nav-link">The Guitar</a>
               </li>
               <li class="navbar-item" id="page-home">
                   <a href="/instruments/bass" class="nav-link">The Bass</a>
               </li>
           </ul>
        </div>
    </nav>
</template>

<style lang="scss">
    nav {
        /* applies custom font */
        font-family: "Rawk Brush";
    }
    h1 {
        color: var(--main-colour);
        /* Gets rid of extra space at bottom of navbar */
        margin-bottom: 0;
    }
    a:hover {
        /* Get rid of odd-looking text decoration */
        text-decoration: none;
    }
    .container-fluid {
        border-bottom: none;
    }
    .navbar-nav {
        /* Makes sure navbar elements stay next to each other */
        flex-direction: row;
    }
    .navbar-brand p {
        color: #fff;
    }
    .navbar-item {
        font-size: 1.5em;
        padding: 0 0.5em;
    }
    #title-text-small {
        font-size: 0.7em;
        margin-bottom: 0;
    }
    @media screen and (max-width: 700px) {
        .navbar-item {
            font-size: 1em;
     
        }
    }
</style>
