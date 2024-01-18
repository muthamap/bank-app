<script>
	// @ts-nocheck

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Label,
		Search
	} from 'flowbite-svelte';
  import {ArrowRightSolid, ArrowLeftSolid} from 'flowbite-svelte-icons'
	import { writable } from 'svelte/store';
	import itemPay from '../../data/ipayments.json';
	import Persons from '../transaction/persons.svelte';

	const sortKey = writable(itemPay);
	const sortDirection = writable(1);
	const sortItems = writable(itemPay.slice());

	const sortTable = (/** @type {string} */ key) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};

	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = [...$sortItems].sort((a, b) => {
			const aVal = a[key];
			const bVal = b[key];
			if (aVal < bVal) {
				return -direction;
			} else if (aVal > bVal) {
				return direction;
			}
			return 0;
		});
		sortItems.set(sorted);
	}

  function handle_search() {
		throw new Error('Function not implemented.');
	}
</script>

<div
	class="mr-2 grid h-screen w-full grid-flow-col-dense gap-2 overflow-scroll bg-white scrollbar-hide"
>
	<div class="overflow-scroll scrollbar-hide"><Table hoverable={true} class="scrollbar-hide">
		<TableHead class="bg-white">
			<TableHeadCell on:click={() => sortTable('date')} class="px-2">Date</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('quantity')}>Type</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('type')}>item</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('make')}>Quantity</TableHeadCell>
			<TableHeadCell on:click={() => sortTable('cost')}>Cost</TableHeadCell>
		</TableHead>
		<TableBody class="scrollbar-hide">
			{#each $sortItems as item}
				<TableBodyRow class="scrollbar-hide">
					<TableBodyCell class="px-1 py-2 text-[#475466]">{item.date}</TableBodyCell>
					{#if item.type === 1}
            <TableBodyCell class=" w-1 text-primary-50"><ArrowRightSolid  size='sm' /></TableBodyCell>
          {/if}
          {#if item.type === 0}
          <TableBodyCell class=" w-1 text-[#ef49fe]"><ArrowLeftSolid size='sm'/></TableBodyCell>
          {/if}
            
					<TableBodyCell class="px-0 py-2 text-[#475466]">{item.item}</TableBodyCell>
					<TableBodyCell class="px-0 py-2 text-[#475466]">{item.number}</TableBodyCell>
					<TableBodyCell class="px-0 py-2 text-[#475466]">{item.sum}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table></div>

	<div>
		<Label for="search">Person</Label>
		
		<Search class="mb-2 h-8" id="search" on:input={handle_search} />
		<div
			class="mx-2 flex h-screen w-[350px] flex-col overflow-scroll rounded-lg bg-white px-2 scrollbar-hide"
		>
			<Persons />
		</div>
	</div>
</div>
