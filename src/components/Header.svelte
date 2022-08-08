<script>
	// Background is like a ceiling with lights
	// with a change in perspective
	// faded out using a gradient
	// TODO: Look for a better pattern?
	// Liminal space vibes
	// TODO: Fade away text on scroll
	// TODO: Show white text on black background first?
	import GridPattern from "$components/GridPattern.svelte";
	import Gradient from "$components/Gradient.svelte";
	import Icon from "$components/Icon.svelte";
	import IconLink from "$components/IconLink.svelte";
	import DecorativeLine from "$components/DecorativeLine.svelte";

	const iconSize = "1.75rem";
</script>

<!-- Logo -->
<!-- Intro / Bio -->
<!-- Links to social -->
<!-- Include email -->
<header>
	<!-- TODO: Desaturate; add filters to better match the color palette -->
	<!-- <img
		class="mascot-gif"
		src="/lemonwaffle-big.gif"
		alt="Portfolio mascot, of a lemon on a waffle"
	/> -->
	<div class="introduction">
		<div class="heading">
			<span class="im">I'm</span>
			<h1 class="name">
				<span class="first-name">Yi Zhe</span>
				<span class="lighten last-name">Ang</span>
			</h1>
		</div>
		<p class="intro">
			<!-- explainables? -->
			<!-- explorable explanations? -->
			<!-- explorable explainers? -->
			I like making <span id="visual" class="visual em-1">visual</span> and
			<span id="interactive" class="interactive em-1">interactive</span>
			<br /><span id="stories" class="stories em-2">stories</span>
			and <span id="explorables" class="explorables em-2">explorables</span>.
			<!-- <DecorativeLine /> -->
			<span id="socials" class="socials"
				><IconLink href="mailto:ang.yizhe@u.nus.edu">
					<Icon slot="icon" name="mail" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Email</svelte:fragment>
				</IconLink>
				<IconLink href="https://twitter.com/yizhe_ang">
					<Icon slot="icon" name="twitter" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Twitter</svelte:fragment>
				</IconLink>
				<IconLink href="https://www.linkedin.com/in/yizhe-ang/">
					<Icon
						slot="icon"
						name="linkedin"
						width={iconSize}
						height={iconSize}
					/>
					<svelte:fragment slot="label">Linkedin</svelte:fragment>
				</IconLink>
				<IconLink href="https://github.com/yizhe-ang">
					<Icon slot="icon" name="github" width={iconSize} height={iconSize} />
					<svelte:fragment slot="label">Github</svelte:fragment>
				</IconLink></span
			>
		</p>
	</div>
	<GridPattern />
	<Gradient />
</header>

<style>
	.lighten {
		color: var(--color-gray-600);
	}

	.em-1 {
		/* font-weight: 700; */
		/* color: var(--color-gray-600); */
		text-decoration-line: underline;
		text-decoration-color: var(--color-blue);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.em-2 {
		/* font-weight: 700; */
		/* color: var(--color-gray-600); */
		text-decoration-line: underline;
		text-decoration-color: var(--color-light-green);
		text-decoration-style: solid;
		text-decoration-thickness: var(--underline-width);
	}

	.introduction {
		/* visibility: hidden; */
		width: 960px;
		padding-left: 32px;

		transform: translateZ(1000px);
	}

	header {
		--underline-width: 6px;

		position: relative;
		isolation: isolate;

		padding-top: 55px;

		/* display: flex;
		flex-direction: column;
		align-items: center; */
		display: grid;
		place-items: center;

		overflow: hidden;
		/* border-bottom: 5px solid var(--color-gray-200); */
		background-color: var(--color-gray-50);
	}

	h1 {
		display: inline;
		font-family: var(--font-header);
		font-weight: 700;

		/* background: var(--color-dark-blue);
		background: linear-gradient(to top right, var(--color-dark-blue) 20%, var(--color-dark-green) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent; */

		/* text-shadow: 2px 4px 8px var(--color-); */
		text-shadow: var(--text-border);
	}

	.im {
		margin-right: 8px;
		font-weight: 500;
		font-size: var(--44px);
		font-family: var(--font-header);
	}

	.mascot-gif {
		height: 192px;

		filter: saturate(65%);
		/* transform: perspective(250px) rotateX(-55deg); */
		visibility: hidden;
	}

	.intro {
		position: relative;
		display: inline-block;
		font-family: var(--font-subheader);
		font-size: var(--32px);
		/* text-align: center; */

		/* background-color: var(--color-gray-800);
		color: var(--color-gray-100); */
	}

	.socials {
		margin-left: 8px;
		position: relative;
		top: 8px;
	}

	@media (max-width: 37.5rem) {
		header {
			--underline-width: 4px;

			padding-top: 50px;
		}

		.im {
			font-size: var(--36px);
		}

		h1 {
			font-size: var(--40px);
		}

		.intro {
			margin-top: 4px;
			font-size: var(--22px);
		}

		.socials {
			display: block;
			margin-left: -16px;
			margin-top: 8px;
		}
	}
</style>
