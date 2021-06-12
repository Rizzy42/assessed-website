<script>
	export let title;
	export let desc;
</script>

<main>
	<div id="content">
        <div id="div-text-main">
			<h1>{title}</h1>
		    <p>   {desc}</p>
		</div>
    </div>
</main>

<style>
	#content {
		display: flex;
		flex-direction: row;
		height: 50em;

		background-image: url("/assets/images/guitar.jpg");
		background-size: cover;
	}
	#div-text-main {
		padding: 10em 2em;
	}
	#div-text-main p {
		color: #fff;

		font-size: 1.5em;
		font-family: Rawk Brush;

		padding: 1em;
	}
	main {
		/* Get rid of whitespace */
		background-color: #000;
	}
	h1 {
		font-family: Rawk Brush;
		color: var(--aqua);

		margin: 1em 1em 0 0;
	}

	@media screen and (max-width: 950px) {

	}
</style>
