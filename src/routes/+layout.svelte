<script lang="ts">
	import './styles.css';
	import Page from './navigation/navigation.svelte';
	import { BellSolid, UserSettingsSolid} from 'flowbite-svelte-icons';

</script>

<svelte:head>
	<title>Svelte Material UI - Text Field</title>
</svelte:head>

<div class="h-screen overflow-y-hidden bg-white scrollbar-hide">
	<div class="flex items-center justify-between mt-5 mr-2">
		<div class="flex items-center gap-5 ml-20">
			<img src="https://icon.horse/icon/webix.com" width="26px" alt="webix" srcset="" />
			<h2 class="text-sm font-medium">WEBIX</h2>
		</div>
		<div>
			<div class="flex gap-3">
				<BellSolid/>
				<UserSettingsSolid  />
			</div>
		</div>
	</div>
	<div class="grid grid-flow-col-dense gap-1">
		<Page />
		<slot />
	</div>
</div>
