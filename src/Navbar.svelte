<script lang="ts">
    import { navigationRoute } from "./enums/navigationEnum"

    $: showMenu = false;
    function toggleNavbar():void {
        showMenu = !showMenu;
        showDropdown = false;
    }
    $: showDropdown = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="fixed z-[+1] w-full bg-green-600 py-6 px-10 left-0 right-0 top-0">
    <nav class="justify-between items-center">
      <div class="md:flex md:justify-between">
        <div class="flex justify-between">
            <a href="#home" class="text-black font-bold text-xl">Logo</a>
            <i class="items-end fas fa-bars text-white text-3xl md:hidden" id="ham-menu" on:click={toggleNavbar}></i>
        </div>
        <div class="items-end">
            <ul id="nav-bar" class="{showMenu? '': 'hidden'} md:flex gap-8">
                <li class="md:my-0 my-1">
                  <a href="{navigationRoute.Home}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Home</a>
                </li>
                <li class="md:my-0 my-1">
                  <a href="{navigationRoute.Orders}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Orders</a>
                </li>
                <li class="md:my-0 my-1">
                  <a href="{navigationRoute.Feedback}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Feedback</a>
                </li>
                <li class="md:my-0 my-1 relative">
                  <button class="text-white font-medium text-lg hover:text-gray-200" on:mouseenter={() =>{showDropdown = true}} on:mouseleave={() =>{showDropdown = false}}  >Admin </button>
                  <div on:mouseenter={() =>{showDropdown = true}} on:mouseleave={() =>{showDropdown = false}}  
                      class="{showDropdown? '': 'hidden'} rounded-lg overflow-hidden shadow-md right-0 md:absolute bg-white md:w-52 w-full px-4 by-1 text-center">
                    <ul>
                      <li class="my-2">
                        <a href="{navigationRoute.AdminFeedback}" class="font-medium text-lg hover:text-gray-800" on:click={toggleNavbar}>Admin Feedback</a>
                      </li>
                      <li class="my-2">
                        <a href="{navigationRoute.AdminProducts}" class="font-medium text-lg hover:text-gray-800" on:click={toggleNavbar}>Admin Products</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="my-28 md:my-30"></div>