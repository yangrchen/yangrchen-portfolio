<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="mx-4 mt-10 flex flex-col xl:mx-48">
	<Navbar />
	{@render children()}
	<footer class="mt-14 mb-4 px-5 text-center text-sm md:text-base">
		<div class="mb-2 flex justify-center space-x-4">
			<!-- <a
				href="https://www.instagram.com/imagining.yang/"
				target="_blank"
				rel="noopener noreferrer"
				class="transition duration-300 hover:translate-y-[-0.5em]"
			>
				<img src={InstagramLogo} width="30" height="30" alt="Instagram logo" />
			</a>
			<a
				href="https://www.linkedin.com/in/yangrchen/"
				target="_blank"
				rel="noopener noreferrer"
				class="transition duration-300 hover:translate-y-[-0.5em]"
			>
				<img src={LinkedinLogo} width="30" height="30" alt="LinkedIn logo" />
			</a> -->
		</div>
		<div>Built with love by Yang Chen using Svelte and Tailwind CSS</div>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

	:global(body) {
		background-color: #f2f2f2;
		font-family: 'Josefin Sans', sans-serif;
	}
</style>
