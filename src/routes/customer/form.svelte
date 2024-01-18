<script lang="ts">
	import {
		Input,
		Label,
		Helper,
		A,
		Select,
		Avatar,
		Radio,
		Textarea,
		Toolbar,
		ToolbarGroup,
		ToolbarButton,
		Button,
		MultiSelect
	} from 'flowbite-svelte';
	import {
		PaperClipOutline,
		MapPinAltSolid,
		ImageOutline,
		CodeOutline,
		FaceGrinOutline,
		PapperPlaneOutline
	} from 'flowbite-svelte-icons';
	import Navigation from '../navigation/navigation.svelte';
	import { person } from '../../data/persons';
	import { onMount } from 'svelte';
	import Persons from '../transaction/persons.svelte';

	let selected: [];
	let onePerson = 1;

	const nextUser = () => {
		return (onePerson = (onePerson % person.length) + 1);
	};

	let select = 1;
	const tags = [
	{ value:"1", name:"New", color:"#8664C6" },
	{ value:"2", name:"Customer", color:"#BCAAE0" },
	{ value:"3", name:"Supplier", color:"#1CA1C1" },
	{ value:"4", name:"Discount", color:"#5ABBD2" },
	{ value:"5", name:"Old Buddy", color:"#FDBF4C" },
	{ value:"6", name:"Avid Supporter", color:"#F8643F" }
];
</script>

<div class="overflow-scroll h-screen scrollbar-hide">
	{#each person as user}
		{#if user.id === onePerson}
			{#key user.id}
				<div class="h-screen overflow-scroll scrollbar-hide">
					<form>
						<div class="mx-auto w-full">
							<div class="mb-2 flex place-content-between ">
								<div class="flex flex-wrap gap-x-10">
									<div class="w-64">
										<Label for="first_name" class="mb-1 ">First name</Label>
										<Input
											class="w-64"
											type="text"
											id="first_name"
											value={user.fname}
											placeholder={user.fname}
											required
										/>
									</div>
									<div class="w-64">
										<Label for="last_name" class="mb-1">Last name</Label>
										<Input
											class="w-64"
											type="text"
											id="last_name"
											value={user.lname}
											placeholder={user.lname}
											required
										/>
									</div>
									<div class="w-64">
										<Label for="company" class="mb-1">Birthday</Label>
										<Input
											type="date"
											class="w-64"
											value={user.birthday}
											placeholder={user.birthday}
										/>
									</div>
									<div class="w-64">
										<Label>
											City, country
											<Select class="mt-1 w-64" value={user.city} />
										</Label>
									</div>
									<div class="w-64">
										<Label for="email" class="mb-1">Email address</Label>
										<Input class="w-64" type="email" id="email" placeholder={user.email} required />
									</div>
									<div class="w-64">
										<Label for="website" class="mb-1">Address</Label>
										<Input
											class="w-64"
											type="url"
											id="website"
											placeholder={user.address}
											required
										/>
									</div>
									<div class="w-64">
										<Label for="visitors" class="mb-1">Position</Label>
										<Select class="mt-2 w-64" value={user.position} placeholder="Select position" />
									</div>
								</div>
								<div class="flex flex-col gap-1">
									<Avatar src={user.photo} rounded class="h-[259px] w-[259px]" />
									<MultiSelect items={tags} bind:value={selected} class="w-[259px]" size="sm" />
								</div>
							</div>

							<div class="flex flex-col">
								<Label for="example" class="mb-2">Notifications</Label>
								<div class="mb-2 flex flex-row gap-2">
									<Radio name="example" bind:group={select} value={1}>Yes</Radio>
									<Radio name="example" value={2}>No</Radio>
								</div>
							</div>
						</div>
					</form>
					<div>
						<label for="editor" class="mb-2 text-sm font-semibold">Notes</label>
						<Textarea
							id="editor"
							rows="5"
							col="4"
							class="mb-4"
							value={user.notes.toString()}
							placeholder={user.notes.toString()}
						>
							<Toolbar slot="header" embedded class="h-5 p-1">
								<ToolbarGroup>
									<ToolbarButton name="Attach file"
										><PaperClipOutline class="h-3 w-3 rotate-45" /></ToolbarButton
									>
									<ToolbarButton name="Embed map"><MapPinAltSolid class="h-3 w-3" /></ToolbarButton>
									<ToolbarButton name="Upload image"><ImageOutline class="h-3 w-3" /></ToolbarButton
									>
								</ToolbarGroup>
								<ToolbarGroup>
									<ToolbarButton name="Format code"><CodeOutline class="h-3 w-3" /></ToolbarButton>
									<ToolbarButton name="Add emoji"><FaceGrinOutline class="h-3 w-3" /></ToolbarButton
									>
								</ToolbarGroup>
								<ToolbarButton name="send" slot="end"
									><PapperPlaneOutline class="h-3 w-3 rotate-45" /></ToolbarButton
								>
							</Toolbar>
						</Textarea>
						<div class="float-right">
							<Button class="bg-neutral-100 hover:bg-neutral-200"
								><h2 class="text-[#46B2CC]">Reset</h2></Button
							>
							<Button class="bg-neutral-100 hover:bg-neutral-200"
								><h2 class="text-[#46B2CC]">Save</h2></Button
							>
						</div>
					</div>
				</div>
			{/key}
		{/if}
	{/each}
	<Button on:click={nextUser}>
		<h2 class="text-white">Next User</h2>
	</Button>
</div>
