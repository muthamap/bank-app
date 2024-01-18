<script>
	import { ShoppingCartSolid } from "flowbite-svelte-icons";


  
   let navActive = false;
  const toggleNav = () => {
    navActive = !navActive;
  };

  let activeTab = false
  const toggleTab = ()=>{
    activeTab = !activeTab
  }
</script>

<style>
  main {
    width: fit-content;
    min-width: 50px;
  }

  .menu {
    position: relative;
    background: white;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 50px;
    height: 100vh;
    transition: 300ms;
  }

  .menu.active {
    width: 200px;
  }

  .menu.active .menu__Link {
    color: #46B2CC;
  }

  .menu__List {
    all: unset;
    display: block;
    width: 100%;
    margin-top: 3em;
  }

  .menu__Item {
    display: block;
  }

  .menu__Link {
    display: block;
    padding: 5px;
    text-decoration: none;
    white-space: nowrap;
    color: transparent;
    transition: 300ms;
  }

  .menu__Link:hover {
    color: orange;
  }

  .menu__Link.active {
    background: #46B2CC;
    color: white;
  }

  .menu__Link::before {
    content: attr(title);
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: orange;
  }

  .menu__Toggle {
    position: relative;
    font-size: 14px;
    top:1.25em;
    color: red;
    padding: 15px;
    font-weight: bold;
    background: white;
    cursor: pointer;
  }
  
</style>

<main class="relative -mt-[70px]">
  <nav class="menu" class:active="{ navActive }">
    <div class="flex">
      <button class="menu__Toggle " on:click="{ () => toggleNav() }">
      <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg></button>
      <div class="flex items-center gap-5 mt-9 ml-[26.50px]">
        <img src="https://icon.horse/icon/webix.com" width="26px" alt="webix" srcset="" />
        <h2 class="text-sm font-medium">WEBIX</h2>
      </div>
    </div>
    <ul class="menu__List" class:active='{activeTab}'>
      <li class="menu__Item flex">
        
        <a title="🛒" class=" menu__Link ${activeTab ? 'menu__Link active':'menu__Link'}" href="/transaction"><span>Transaction</span></a>
      </li>
      <li class="menu__Item"><a title="🛂" class=" menu__Link ${activeTab? 'menu__Link active':'menu__Link'}"  href="/customer">Customer</a></li>
      <li class="menu__Item"><a title="💹" class=" menu__Link ${activeTab ? 'menu__Link active':'menu__Link'}" href="/payhistory">Payment History</a></li>
      <li class="menu__Item"><a title="🎲" class=" menu__Link ${activeTab ? 'menu__Link active':'menu__Link'}" href="/transaction">Transaction</a></li>
      <li class="menu__Item"><a title="🖥️" class=" menu__Link ${activeTab? 'menu__Link active':'menu__Link'}"  href="/customer">Customer</a></li>
      <li class="menu__Item"><a title="💲" class=" menu__Link ${activeTab ? 'menu__Link active':'menu__Link'}" href="/payhistory">Payment History</a></li>
      
    </ul>
  </nav>
	</main>