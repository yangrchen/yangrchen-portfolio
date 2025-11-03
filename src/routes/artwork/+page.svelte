<script lang="ts">
	import { lazyLoad } from '$lib/attachments/lazyLoad';
	import drawings from '$lib/data/drawings';
</script>

<div
	class="4xl:grid-cols-3 mt-6 flex flex-col place-items-center gap-16 md:mx-6 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:gap-y-24"
>
	{#each drawings as drawing (drawing.srcset)}
		<div class="relative h-[25em] w-fit md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
			<img alt={drawing.alt} {@attach lazyLoad(drawing.srcset.join(', '))} class="h-full" />
			<div
				class="absolute inset-0 bg-gray-800 pl-4 text-lg text-white opacity-0 transition-opacity duration-500 hover:opacity-80 md:px-10 md:text-5xl lg:text-4xl"
			>
				<p class="mt-10 md:mt-24">{drawing.displayName}</p>
				<p class="mt-10 md:mt-24">{drawing.medium}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	img {
		opacity: 0;
		transition: opacity 1.2s ease-out;
	}
</style>
