<script>

</script>

<template>
	<div id="container-main">
		<h1>Are you ready <br> to rock?</h1>
		<div id="container-buttons">
        	<a class="btn btn-outline-light" id="button-yeah" href="/home">Yeah!</a>
			<a class="btn btn-outline-danger" id="button-no" href="https://google.com/search?q=I+am+a+dense+cabbage">I think I'll pass...</a>
		</div>
	</div>	
</template>

<style lang="scss">
	#container-main {
		// Cover page
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		background-color: #212529;
	}
	#container-buttons {
		display: flex;
	}
	.btn {
		color: #fff;
		font-family: Rawk Brush;
		font-size: 2em;
		margin-top: 3.5em;
	}
	#button-yeah {
		width: 5em;
		height: 2em;
	    margin-right: 2em;
	}
	#button-no {
		width: 10em;
	}
	h1 {
		font-family: Rawk Brush;
		color: #fff;
		transform: skewY(-11deg);
		font-size: 10em;

		text-align: center;
	}
	a:hover {
		text-decoration: none;
	}
</style>