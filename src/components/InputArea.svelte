<script lang="ts">
    export let name: string;
    export let label: string;
    export let value: string;
    export let onInput: (name: string) => void;
    export let messages: string[];
    export let validityclass: string;
    export let placeholder:string ;
</script>

<div class={`${validityclass} form-input`}>
    <label for={name} class="block mb-2 text-sm font-medium text-gray-900"> {label} </label>
    <textarea {name} placeholder="{placeholder}" bind:value on:input={() => onInput(name)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5 "></textarea>

    {#if messages.length}
        <p class="text-red-500 msg-error">{messages[0]}</p>
    {/if}    
</div>  