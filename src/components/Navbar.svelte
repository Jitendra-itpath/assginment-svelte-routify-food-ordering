<script lang="ts">
    import { navigationRoute } from "../enums/navigationEnum"
    import { cartInfo } from "../stores/StoresData";
    let totalDishInCart
    cartInfo.subscribe(value => {
        totalDishInCart = Object.keys(value).length;
    });
    $: showMenu = false;
    function toggleNavbar():void {
        showMenu = !showMenu;
        showDropdown = false;
    }
    $: showDropdown = false;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events a11y-click-events-have-key-events -->
<header class="fixed z-[+1] w-full bg-green-600 py-6 px-10 left-0 right-0 top-0">
    <nav class="justify-between items-center">
      <div class="md:flex md:justify-between">
        <div class="flex justify-between">
            <a href="/#" class="text-white md:text-3xl text-2xl md:mx-2 font-bold"><span class="text-white mx-2"><i class="fa-solid fa-burger"></i></span> BiteBuddy</a>
            <div class="items-end md:hidden">
              <a href="{navigationRoute.Orders}" class="text-white font-medium text-lg hover:text-gray-200">
                <span class="relative inline-block mr-4">
                  <i class="fa-solid fa-cart-shopping text-white text-2xl"></i>
                  <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalDishInCart}</span>
                </span>
              </a>
              <i class=" fas fa-bars text-white text-3xl" id="ham-menu" on:click={toggleNavbar}></i>
            </div>
        </div>
        <div class="items-end">
            <ul id="nav-bar" class="{showMenu? '': 'hidden'} md:flex gap-8 md:mt-1 mt-3">
                <li class="md:my-0 my-1">
                  <a href="{navigationRoute.Home}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Home</a>
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
                <li class=" md:block hidden">
                  <a href="{navigationRoute.Orders}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>
                    <span class="relative inline-block">
                      <i class="fa-solid fa-cart-shopping text-white text-2xl"></i>
                      <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalDishInCart}</span>
                    </span>
                  </a>
                </li>
              </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="my-20 md:my-24"></div>