<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const routes: Array<{ path: string; name: string }> = [
		{ path: '/', name: 'about' },
		{ path: '/artwork', name: 'artwork' },
		{ path: '/resume', name: 'resume' }
	];

	// const artworkRoutes = ['drawings', 'digital', 'graphic'];

	const isActiveRoute = (path: string) => {
		if (path === '/') {
			return page.url.pathname === '/';
		}

		return page.url.pathname.includes(path);
	};
</script>

<nav class="sticky top-0 z-50 flex flex-col items-center p-2">
	<a href={resolve('/')} class="text-3xl md:text-5xl">YANG CHEN</a>
	<ul class="flex space-x-4 md:text-2xl">
		{#each routes as route (route.path)}
			<li>
				<a
					href={route.path}
					class="pink-highlight border-b-2 hover:border-pink-500"
					class:border-pink-500={isActiveRoute(route.path)}
					class:border-gray-300={!isActiveRoute(route.path)}
				>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200&display=swap');

	nav {
		background-color: #f2f2f2;
	}

	nav > a {
		font-family: 'Martel Sans', sans-serif;
	}

	a.pink-highlight {
		background: linear-gradient(
			to bottom,
			rgba(236, 72, 153, 0.3) 0%,
			rgba(236, 72, 153, 0.3) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 100%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	a:hover {
		background-size: 100% 110%;
	}
</style>
