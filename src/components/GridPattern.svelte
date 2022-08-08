<script>
	// Using https://www.magicpattern.design/tools/css-backgrounds
</script>

<div id="grid-pattern" />

<style>
	div {
		position: absolute;
		top: 0;
		left: 50%;
		width: 100%;
		height: 150%;
		z-index: var(--z-bottom);

		transform: translate(-50%, 17%) perspective(250px) rotateX(-55deg);
		transform-origin: center center center;

		/* background-color: #f8fafc;
		opacity: 1;
		background-image: linear-gradient(
				30deg,
				#cbd5e1 12%,
				transparent 12.5%,
				transparent 87%,
				#cbd5e1 87.5%,
				#cbd5e1
			),
			linear-gradient(
				150deg,
				#cbd5e1 12%,
				transparent 12.5%,
				transparent 87%,
				#cbd5e1 87.5%,
				#cbd5e1
			),
			linear-gradient(
				30deg,
				#cbd5e1 12%,
				transparent 12.5%,
				transparent 87%,
				#cbd5e1 87.5%,
				#cbd5e1
			),
			linear-gradient(
				150deg,
				#cbd5e1 12%,
				transparent 12.5%,
				transparent 87%,
				#cbd5e1 87.5%,
				#cbd5e1
			),
			linear-gradient(
				60deg,
				#cbd5e177 25%,
				transparent 25.5%,
				transparent 75%,
				#cbd5e177 75%,
				#cbd5e177
			),
			linear-gradient(
				60deg,
				#cbd5e177 25%,
				transparent 25.5%,
				transparent 75%,
				#cbd5e177 75%,
				#cbd5e177
			);
		background-size: 80px 140px;
		background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px; */

		background-color: #f8fafc;
		opacity: 1;
		background-image: repeating-linear-gradient(
				45deg,
				#cbd5e1 25%,
				transparent 25%,
				transparent 75%,
				#cbd5e1 75%,
				#cbd5e1
			),
			repeating-linear-gradient(
				45deg,
				#cbd5e1 25%,
				#f8fafc 25%,
				#f8fafc 75%,
				#cbd5e1 75%,
				#cbd5e1
			);
		background-position: 0 0, 40px 40px;
		background-size: 80px 80px;
	}
</style>
