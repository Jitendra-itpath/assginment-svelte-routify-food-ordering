<script lang="ts">
    import { navigationRoute } from "./enums/navigationEnum"
    $: showMenu = false;
    function toggleNavbar():void {
        showMenu = !showMenu;
    }
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
                <li>
                  <a href="{navigationRoute.Home}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Home</a>
                </li>
                <li>
                  <a href="{navigationRoute.Orders}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Orders</a>
                </li>
                <li>
                  <a href="{navigationRoute.Feedback}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Feedback</a>
                </li>
                <li>
                  <a href="{navigationRoute.Admin}" class="text-white font-medium text-lg hover:text-gray-200" on:click={toggleNavbar}>Admin</a>
                </li>
              </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="my-28 md:my-30"></div>