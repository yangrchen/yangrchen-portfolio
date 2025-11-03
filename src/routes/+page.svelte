<script lang="ts">
	import { lazyLoad } from '$lib/attachments/lazyLoad';
	import { resolve } from '$app/paths';

	import ProfileImage from '$lib/assets/profile/yang-profile.png?w=1366;768;366';
</script>

<div
	class="mt-12 flex flex-col items-center justify-center space-y-10 md:space-y-0 lg:flex-row lg:space-x-8"
>
	<div class="relative h-[25em] md:h-[56em] lg:h-[38em] 2xl:h-[40em]">
		<img {@attach lazyLoad(ProfileImage.join(', '))} alt="Portrait of author" />
	</div>
	<div
		class="text-l w-5/6 space-y-2 leading-loose break-words md:text-xl md:leading-loose lg:w-2/4 lg:pt-0 lg:text-2xl lg:leading-loose xl:pt-0 xl:text-xl xl:leading-loose"
	>
		<p
			class="text-l leading-loose break-words md:pt-16 md:text-xl md:leading-loose lg:pt-0 lg:text-2xl lg:leading-loose xl:pt-0 xl:text-xl xl:leading-loose"
		>
			Hiya! I'm Yang, a <a
				href="https://analytics.ncsu.edu/"
				target="_blank"
				rel="noopener noreferrer"
				class="pink-highlight border-b-2 border-pink-300 hover:border-pink-500">data scientist</a
			>
			and nerd based in Raleigh. I specialize in the full AI/ML lifecycle from data pipelines to
			<a
				href={resolve('/resume')}
				rel="noopener noreferrer"
				class="green-highlight border-b-2 border-emerald-300 hover:border-emerald-500"
			>
				productionized solutions</a
			>. Outside of work, I'm an avid
			<a
				href={resolve('/drawings')}
				class="blue-highlight border-b-2 border-cyan-300 hover:border-cyan-500"
			>
				representational artist</a
			>
			and I love climbing / hiking with friends. Check out my work in the
			<a
				href={resolve('/drawings')}
				class="blue-highlight border-b-2 border-cyan-300 hover:border-cyan-500"
			>
				gallery!</a
			>
		</p>
		<p>
			Always happy to talk so feel free to ping me by email or schedule some time on <a
				href="https://calendar.app.google/ua1vuYRzzARLByhj6"
				class="pink-highlight border-b-2 border-pink-300 hover:border-pink-500">my calendar!</a
			>
		</p>
	</div>
</div>

<style>
	img {
		height: inherit;
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	a.blue-highlight {
		background: linear-gradient(to bottom, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 111%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
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
	a.green-highlight {
		background: linear-gradient(
			to bottom,
			rgba(16, 185, 129, 0.3) 0%,
			rgba(16, 185, 129, 0.3) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 0;
		background-position: 0 111%;
		transition: all 0.5s;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	a:hover {
		background-size: 100% 110%;
	}
</style>
