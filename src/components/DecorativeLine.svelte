<div id="decorative-line" class="wrapper">
	<div class="line thick" />
	<div class="line thin" />
	<div class="line thick" />
	<div class="line thin" />
</div>

<style>
	.wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

    transform: translate(0, -130%);

    display: flex;
    flex-direction: column;
    gap: 3px;
	}

	.line {
		width: 100%;
		background-color: var(--color-gray-400);
	}

	.thick {
		height: 4px;
	}

	.thin {
		height: 2px;
	}
</style>
