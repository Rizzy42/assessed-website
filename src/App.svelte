<svelte:head>
    <!-- CDN links for Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</svelte:head>

<script lang="ts">
    // Importing svelte-routing package
    import { Router, Route } from "svelte-routing";

    // Importing pages
    import Home from "./pages/Home.svelte"
    import Guitar from "./pages/Guitar.svelte"

    export let url = "";
</script>

<Router {url}>
    <div>
        <Route path="/" component={Home}/>
        <Route path="/guitar" component={Guitar}/>
    </div>
</Router>