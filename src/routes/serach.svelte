<script>
    import { Input } from "flowbite-svelte";
// @ts-nocheck

    // @ts-ignore
    /**
	 * @type {string}
	 */
     export let searchTerm;
    // @ts-ignore
    export let person;
    export let filteredPersons;
  
    function search() {
      // @ts-ignore
      if (!searchTerm) {
        // @ts-ignore
        filteredPersons = person;
      } else {
        // @ts-ignore
        filteredPersons = person.filter(person =>
          // @ts-ignore
          person.fname.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }
  </script>
  
  <div>
    <Input bind:value={searchTerm} placeholder="Search by name" on:input={search} />
  </div>
  