<script>
	// Gradient to dark (like a shadow)
	// Add texture
	import TexturePattern from "$components/TexturePattern.svelte";
</script>

<footer>
	<!-- <TexturePattern /> -->
	<a class="kofi-link" href="https://ko-fi.com/U7U4NH69A" target="_blank"
		><img
			height="48"
			style="border:0px;height:48px;"
			src="https://storage.ko-fi.com/cdn/kofi5.png?v=3"
			border="0"
			alt="Buy Me a Coffee at ko-fi.com"
		/></a
	>
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

    display: flex;
    justify-content: center;
	}

  .kofi-link {
    margin-top: 32px;
  }
</style>
