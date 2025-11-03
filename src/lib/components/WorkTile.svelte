<script lang="ts">
	import { resolve } from '$app/paths';
	interface Props {
		company: string;
		dateString: string;
		title: string;
		descriptions: string[];
		skills: string[];
		href?: string;
	}
	let { company, dateString, title, descriptions, skills, href = '' }: Props = $props();

	let actualDesc = descriptions.join(' / ');
</script>

<div class="grid grid-cols-2 gap-4 py-2 md:py-6">
	<div>
		<h1 class="text-xl font-bold md:text-3xl">
			{#if href !== ''}
				<a
					{href}
					class="underline decoration-gray-300 hover:decoration-pink-300"
					rel="noopener noreferrer"
					target="_blank">{company}</a
				>
			{:else}
				<p>{company}</p>
			{/if}
		</h1>
		<h2 class="text-sm md:text-xl">{title}</h2>
		<h3 class="text-sm md:text-xl">{dateString}</h3>
	</div>
	<p class="md:text-xl">{actualDesc}</p>
	<div></div>
	<ul class="flex flex-wrap leading-none">
		{#each skills as skill (skill)}
			<li class="mt-1 ml-2 rounded-full bg-red-100 px-2 py-1 text-sm">{skill}</li>
		{/each}
	</ul>
</div>
