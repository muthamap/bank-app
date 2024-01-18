<script>
  // @ts-nocheck
  
      import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
      import { writable } from 'svelte/store';
      import itemPay from '../../data/ipayments.json'
    
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
  
  
  
    </script>
    
    <div class="overflow-scroll h-screen max-w-screen-lg scrollbar-hide bg-white">
    <Table hoverable={true}>
      <TableHead class='bg-white'>
      <TableHeadCell on:click={() => sortTable('date')} class='px-2 '>Date</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('quantity')}>Type</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('type')}>item</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('make')}>Quantity</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('cost')}>Cost</TableHeadCell>
      </TableHead>
        <TableBody >
        {#each $sortItems as item}
          
            <TableBodyRow>
            <TableBodyCell class="px-1 py-2 text-[#475466]">{item.date}</TableBodyCell>
              <TableBodyCell class="px-1 py-2 text-[#475466]">{item.type}</TableBodyCell>
              <TableBodyCell class="px-0 py-2 text-[#475466]">{item.item}</TableBodyCell>
              <TableBodyCell class="px-0 py-2 text-[#475466]">{item.number}</TableBodyCell>
              <TableBodyCell class="px-0 py-2 text-[#475466]">{item.sum}</TableBodyCell>
            </TableBodyRow>
          
        {/each}
      </TableBody>
      <div>
        <tfoot class="float-right">
          <tr class="font-semibold text-gray-900 dark:text-white">
            <th scope="row" class="py-3 px-6 text-base">Total</th>
            <td class="py-3 px-6">3</td>
            <td class="py-3 px-6">21,000</td>
          </tr>
        </tfoot>
      </div>
      
    </Table>
  </div>