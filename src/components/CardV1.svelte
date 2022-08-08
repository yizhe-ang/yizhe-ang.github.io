<script>
	// TODO: Lazy loading for images? Image optimization
	export let data;
</script>

<article>
	<!-- <div class="img-wrapper">
		<img
			src={data.imgUrl}
			alt={`Preview image of the work "${data.title}: ${data.subtitle}"`}
		/>
	</div> -->
	<div class="img-wrapper" style:background-image={`url(${data.imgUrl})`}>
	</div>
	<div class="title">
		<h2>{data.title}</h2>
		<h3>{data.subtitle}</h3>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: var(--16px);

		width: 384px;
		padding: 16px 24px;
		overflow: hidden;

		border: 1px solid lightgrey;
		border-radius: var(--24px);
		box-shadow: var(--shadow-md);

		color: var(--color-gray-200);
		background-color: var(--color-dark-blue);
	}

	.img-wrapper {
		border-radius: var(--16px);
		overflow: hidden;

		/* box-shadow: var(--shadow-inner); */
		box-shadow: 0 5px 0 hsla(0, 0%, 100%, .5), inset 0 5px 5px hsla(0, 0%, 0%, 0.5);

		height: 200px;
		background-size: cover;
	}

	/* img {
		height: 200px;
		object-fit: cover;

		z-index: var(--z-bottom);
	} */

	.title {
		display: flex;
		flex-direction: column;
		/* gap: var(--4px); */
	}

	h2 {
		margin: 0;

		font-weight: 700;
		font-size: var(--32px);
		font-family: var(--font-subheader);
	}

	h3 {
		margin: 0;

		line-height: 1.1;
		font-size: var(--20px);
		font-family: var(--font-body);

		color: var(--color-gray-300);
	}
</style>
