<script lang="ts">
    import { handleFileChange } from "../stores/ImageStore";
    export let name: string;
    export let label: string;
    export let value: string;
    export let onChange: (name: string) => void;
    export let messages: string[];
    export let validityclass: string;
    let image;
</script>

<div class={`${validityclass} form-input`}>
    <label for={name} class="block mb-2 text-sm font-medium text-gray-900"> {label} </label>
    <input accept="image/x-png,image/gif,image/jpeg,image/webp"   type="file" {name} bind:value bind:files={image} on:change={ () => {  onChange(name) , handleFileChange(image) }}
    class="bg-gray-50 m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal file:-mx-3 file:-my-[0.32rem] file:border-0 file:border-solid file:border-inherit file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-gray-300] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 "/> 
    {#if messages.length}
        <p class="text-red-500 msg-error">{messages[0]}</p>
    {/if}
</div>