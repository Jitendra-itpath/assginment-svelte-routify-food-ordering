<script lang="ts">
    export let disabled;
</script>

<button disabled={disabled} type="submit" class="{disabled ? "opacity-50":""} mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
    <slot />    
</button>
