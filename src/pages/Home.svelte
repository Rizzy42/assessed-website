<script>
    import Navbar from "../components/Navbar.svelte";

    // Importing links from svelte-router to create navigation
    import { Link } from "svelte-routing";
</script>

<main>
    <Navbar/>
    <h1>Hello</h1>
    <h2>Test</h2>
    <Link to="guitar">Guitar</Link>
</main>