<script>
	// Gradient to dark (like a shadow)
	// Add texture
	import TexturePattern from "$components/TexturePattern.svelte";
</script>

<footer>
	<!-- <TexturePattern /> -->
</footer>

<style>
	footer {
		/* height: 150px; */
		flex: 1 1 150px;
		position: relative;
		overflow: hidden;

		background-color: var(--color-light-green);
		/* TODO: Self-host the image */
		background-image: url("https://www.transparenttextures.com/patterns/clean-gray-paper.png");
	}
</style>
