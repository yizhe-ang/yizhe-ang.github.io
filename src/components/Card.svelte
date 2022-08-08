<script>
	// Like pictures on a wall, with labels
	// Retro / vintage filter on the images
	// Like a vintage computer screen?
	// Do some 3d transforms on hover?
	// github link
	// Only reveal when come into view? rotateX
	// TODO: Focus state; animation; visual cues
	import { base } from "$app/paths";

	export let data;
</script>

<article>
	<div class="metadata-wrapper">
		<div class="date">
			{data.month ? `${data.month.padStart(2, "0")} / ${data.year}` : "WIP"}
		</div>
		<div class="tags-wrapper">
			{#each data.tags.split(",") as tag}
				<div class="tag">{tag}</div>
			{/each}
		</div>
	</div>
	<!-- FIXME: Lazy loading for images? Image optimization -->
	<a href={`${base}${data.url}`} target="_blank" rel="noopener">
		<div class="img-wrapper">
			<img
				src={data.imgUrl}
				alt={`Preview image of the work "${data.title}: ${data.subtitle}"`}
				loading="lazy"
			/>
		</div>
		<div class="title">
			<h3>{data.title}</h3>
			<h4>{data.subtitle}</h4>
		</div>
	</a>
</article>

<style>
	article {
		--padding-left: 2px;

		display: flex;
		flex-direction: column;
		gap: var(--16px);

		width: 384px;
		padding: 16px 32px;
		padding-bottom: 32px;
		overflow: hidden;

		color: var(--color-gray-700);
		/* background-color: var(--color-light-green); */

		/* border-right: 2px solid var(--color-gray-300); */
	}

	.metadata-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--4px);

		padding-left: var(--padding-left);
	}

	.date {
		font-family: var(--font-decorative);
		font-size: var(--12px);
		font-weight: 900;
		color: var(--color-gray-400);
	}

	.tag {
		display: inline-block;
		padding: 2px 6px;
		margin-right: 8px;

		color: var(--color-gray-500);
		font-family: var(--font-decorative);
		/* font-family: var(--font-body); */
		font-size: var(--10px);
		font-weight: 900;
		text-transform: uppercase;

		/* background-color: var(--color-lighter-blue); */
		background-color: var(--color-gray-100);
		border: 1px solid var(--color-gray-300);
		border-radius: var(--2px);
	}

	.img-wrapper {
		border-radius: var(--8px);
		overflow: hidden;

		box-shadow: var(--shadow-lg);

		margin-bottom: var(--16px);

		/* transform: perspective(2000px) translate3d(0px, -66px, 198px)
			rotateX(-55deg) scale3d(0.86, 0.75, 1) translateY(50px);
		border-radius: 5px;
		will-change: transform;
		transition: 0.4s ease-in-out transform; */

		transition: transform 600ms, box-shadow 600ms;
	}

	article:hover .img-wrapper {
		/* transform: perspective(250px) rotateY(5deg) rotateX(5deg); */
		transform: perspective(250px) rotateY(7deg);
		box-shadow: var(--shadow-2xl);
	}

	img {
		height: 192px;
		object-fit: cover;

		/* if empty, show a gradient placeholder */
		background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));

		filter: saturate(70%);
		transition: filter 600ms;
	}

	article:hover img {
		filter: saturate(100%);
	}

	.title {
		display: flex;
		flex-direction: column;
		/* gap: var(--4px); */

		padding-left: var(--padding-left);
	}

	h3 {
		margin: 0;

		font-weight: 700;
		font-size: var(--32px);
		font-family: var(--font-subheader);

		color: var(--color-gray-700);
	}

	h4 {
		margin: 0;

		line-height: 1.1;
		font-size: var(--20px);
		font-family: var(--font-body);

		color: var(--color-gray-500);
	}

	@media (max-width: 37.5rem) {
		.date,
		.tag {
			font-size: var(--9px);
		}

		article {
			padding-left: 0;
			padding-top: 0;
			width: 300px;
		}

		h3 {
			font-size: var(--24px);
		}

		h4 {
			font-size: var(--18px);
		}
	}
</style>
