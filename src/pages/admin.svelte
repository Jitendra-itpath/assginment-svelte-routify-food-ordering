<script lang="ts">
    import { feedbackInfo } from '../stores/StoresData';
    import { productInfo } from '../stores/StoresData';
    import * as _ from 'lodash'
    import productSuite from '../validation/productSuite';
    import classnames from "vest/classnames";
    import InputText from '../components/InputText.svelte';
    import InputNumber from '../components/InputNumber.svelte';
    import InputArea from '../components/InputArea.svelte';
    import InputFile from '../components/InputFile.svelte';
    import ButtonSubmit from '../components/ButtonSubmit.svelte';

    $: feedbackData = $feedbackInfo;
    feedbackData = _.reverse( feedbackData )

    let formState : {name? : string, price? : number, description? : string , image? : string } = {    }; 
    let result = productSuite.get();
    const handleChange = (name) => {    
      result = productSuite(formState,name)
    };

    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success"
    }); 
    $: disabled = !result.isValid();

    function handleProduct(event){
        event.preventDefault();
        let productId = 1;
        let productData = $productInfo;
        if(_.last(productData) != undefined){
            productId = (_.last(productData)).productId + 1;
        }

        if(result.isValid()){
            productInfo.update(products => [...products, {  productId : productId , productName : formState.name , productPrice : formState.price , productDescription : formState.description, productImage : formState.image } ] );
            productSuite.reset();
            event.target.reset();
            disabled = true;
            console.log($productInfo);
        }
    }
    
</script>

<form on:submit|preventDefault={handleProduct} class="space-y-6" action="#">
    <div class="grid md:grid-cols-2 md:gap:24 bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3 py-4">
        <div class="px-6 pt-3 md:pb-3 lg:px-8">  
            <div class="mb-4">
                <InputText
                name="name"
                label="Name"
                placeholder="name"
                bind:value={formState.name}
                onInput={handleChange}
                messages={result.getErrors("name")}
                validityclass={cn("name")}
                />
            </div>
            <div class="mb-4">
                <InputNumber
                name="price"
                label="Price"
                placeholder="price"
                bind:value={formState.price}
                onInput={handleChange}
                messages={result.getErrors("price")}
                validityclass={cn("price")}
                />
            </div>
            <div class="mb-4">
                <InputArea
                name="description" label="Description"
                placeholder="Description"
                bind:value={formState.description}
                onInput={handleChange}
                messages={result.getErrors("description")}
                validityclass={cn("description")}
                />
            </div>
        </div>
        <div class="px-6 md:py-3 lg:px-8">
            <InputFile 
                name="image" label="Image"
                bind:value={formState.image}
                onChange={handleChange}
                messages={result.getErrors("image")}
                validityclass={cn("image")}
            />
            <div class="my-3">
                <ButtonSubmit {disabled}>Add Dish</ButtonSubmit>
            </div>
        </div>
    </div>
</form>

<div class="md:mx-10 mx-2 md:pt-6 pt-2">
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <div class="r-table">
            <table class="w-full text-sm text-left text-gray-500  mt-10">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Message
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each feedbackData as user}
                        <tr class="bg-white border-b">
                            <td data-th="Name" class="px-6 py-4 font-medium whitespace-nowrap ">
                                {user.userName}
                            </td>
                            <td data-th="Email" class="px-6 py-4">
                                {user.userEmail}
                            </td>
                            <td data-th="Message" class="px-6 py-4">
                                {user.message}
                            </td>
                        </tr>
                    {/each} 
                </tbody>
            </table>
        </div>
    </div>
</div>