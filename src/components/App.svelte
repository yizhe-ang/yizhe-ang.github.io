<script>
	import { onMount } from "svelte";
	import { gsap } from "$utils/gsap.js";
	import Header from "$components/Header.svelte";
	import Works from "$components/Works.svelte";
	import Footer from "$components/Footer.svelte";
	import BodyTexture from "$components/BodyTexture.svelte";

	onMount(() => {
		runAnimations();
	});

	function runAnimations() {
		const textDuration = 0.6;

		gsap.set(".img-wrapper", { transformPerspective: 250 });

		const tl = gsap.timeline();

		tl.from("body", { autoAlpha: 0 })
			.from("h1", { opacity: 0, duration: 1 })
			//
			.add("a", "-=0.5")
			.from("#visual", { opacity: 0, duration: textDuration }, "a")
			.from("#interactive", { opacity: 0, duration: textDuration }, "a+=0.05")
			//
			.add("b")
			.from("#stories", { opacity: 0, duration: textDuration }, "b")
			.from("#explorables", { opacity: 0, duration: textDuration }, "b+=0.05")
			//
			.add("content")
			.from("#socials", { opacity: 0 }, "content")
			.from("#grid-pattern", { opacity: 0 }, "content")
			.from("#gradient", { opacity: 0 }, "content")
			.from("#works", { opacity: 0 }, "content")
			.from("#body-texture", { opacity: 0 }, "content")
			.from("footer", { opacity: 0 }, "content")
			.from(".card-wrapper", { opacity: 0, stagger: 0.3 }, "content")
			.from(
				".img-wrapper",
				{
					opacity: 0,
					rotateY: "30deg",
					duration: 0.5,
					stagger: 0.2,
					clearProps: "transform"
				},
				"content"
			);
	}
</script>

<!-- <BodyTexture /> -->
<div class="wrapper">
	<Header />
	<main>
		<Works />
	</main>
	<Footer />
</div>

<style>
	.wrapper {
		min-height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
