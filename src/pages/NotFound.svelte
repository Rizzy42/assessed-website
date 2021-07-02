<svelte:head>
    <title>404 Error</title>
</svelte:head>

<template>
    <div>
        <img src="/assets/images/guitar-404.svg" alt="pixelated guitar">
        <h1>Oops</h1>
        <h4>The page was not found on the server</h4>
    </div>
</template>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    h1, h4 {
        font-family: monospace;
        text-align: center;
        margin: 0 1em;
    }
    img {
        height: 10em;
        margin-bottom: 1.5em;
    }
</style>