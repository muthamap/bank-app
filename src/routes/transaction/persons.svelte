<script lang="ts">
	import { Link } from 'svelte-routing';
	import { person } from '../../data/persons';
	import { List, Li, Input, Label, Search } from 'flowbite-svelte';
	
	let search = '';
	let user = person;
	let timeout: number | undefined;
	let searching = false;

	function handle_search() {
		searching = true;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(get_user, 3000);
	}

	async function get_user() {
		if (!search) {
			reset();
			return;
		}

		const data = await fetch(person + search)
			.then((res) => {
				if (!res.ok) {
					handleError();
					return;
				}
				return res.json();
			})
			.catch((e) => handleError());
		user = data?.user || [];
		searching = false;
	}

	function handleError() {
		alert('Something went wrong.');
		reset();
	}

	function reset() {
		user
		searching = false;
	}
</script>

<style>

</style>
<main>
	
	
	

	{#each user as person}
		<List tag="ul" list="none" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
			<Li class="pb-3 sm:pb-4" id='photo'>
				<div
					class="flex items-center space-x-4 px-1 hover:border-l-2 hover:border-l-[#46B2CC] active:border-l-[#46B2CC] active:bg-neutral-200 rtl:space-x-reverse"
				>
					<div class="flex-shrink-0">
						<img class="h-8 w-8 rounded-full" src={person.photo} alt={person.fname} />
					</div>
				<div>

				</div>
					<div class="min-w-0 flex-1">
						<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
							{person.fname}
							{person.lname}
						</p>
						<p class="truncate text-sm font-normal text-gray-500 dark:text-gray-400">
							${person.money}
						</p>
					</div>
				</div>
			</Li>
		</List>
	{/each}
</main>
