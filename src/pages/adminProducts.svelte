<script lang="ts">
    import { productInfo } from '../stores/StoresData';
    import * as _ from 'lodash'
    import productSuite from '../validation/productSuite';
    import classnames from "vest/classnames";
    import InputText from '../components/InputText.svelte';
    import InputNumber from '../components/InputNumber.svelte';
    import InputArea from '../components/InputArea.svelte';
    import InputFile from '../components/InputFile.svelte'; 
    import ButtonSubmit from '../components/ButtonSubmit.svelte';
    import { ImageInfo } from '../stores/ImageStore';
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
	toastr.options.positionClass = 'toast-top-right ';
	toastr.options.timeOut = 2000;
    $: productData = $productInfo;
    $: blurScreen = false
    let formState : {name? : string, price? : number, description? : string , image? : string } = { }; 
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
    //To add new Product 
    function handleProduct(event):void{
        event.preventDefault();
        let productId = 1;
        let productData = $productInfo;
        if(Object.keys(productData).length > 0){
            productId = (_.last(productData)).productId + 1;
        }
        if(result.isValid()){
            productInfo.update(products => [...products, {  productId : productId , productName : formState.name , productPrice : formState.price , productDescription : formState.description, productImage : $ImageInfo } ] );
            ImageInfo.set(null);
            productSuite.reset();
            event.target.reset();
            disabled = true;
            formToggle('add')
            toastr.success('Dish added to successfully.')
        }
    }
    let updateProductToggle : boolean = false; 
    let addProductToggle :boolean = false;
    let deleteProductToggle : boolean = false;
    function formToggle(formName:string):void{
        if(formName === 'add'){
            formState.name = null;
            formState.price = undefined;
            formState.description = null;
            formState.image = null;
            disabled = true;
            addProductToggle = !addProductToggle;
        }
        if(formName === 'update'){
            updateProductToggle = !updateProductToggle;
        }
        if(formName === 'delete'){
            deleteProductToggle =! deleteProductToggle;
        }
        blurScreen = !blurScreen
        if(blurScreen){
            document.body.classList.add('overflow-hidden');
        }
        else{
            document.body.classList.remove('overflow-hidden');
        }
    }
    function setEditProduct(id:number):void{
        let productData = $productInfo;
        let product = _.find(productData,p => p.productId == id)
        formState.name = product.productName;
        formState.description = product.productDescription;
        formState.price = product.productPrice;
        formState.image = product.productImage;
        handleChange(event);
        updateId = product.productId;
        formToggle('update')
    }
    let updateId:number = 0;
    function updateProduct():void{
        productInfo.update( product => {
            let dish = _.find(product, p => p.productId == updateId)
            if(dish){
                dish.productName = formState.name ;
                dish.productDescription = formState.description;
                dish.productPrice = formState.price;
                if($ImageInfo === null){
                    dish.productImage = formState.image;
                }
                else{
                    dish.productImage = $ImageInfo;
                    ImageInfo.set(null);
                }
            }
            return product;
        })
        toastr.success('Dish updated to successfully.')
        formToggle('update')
        formState.name = null;
        formState.price = undefined;
        formState.description = null;
        formState.image = null;
    }
    let displayDelete:string = null;
    let deletename :string = null;
    let deleteId : number = 0 ;
    let deleteError:string = '';
    function setPeoductDelete(id:number):void{
        deletename = null
        formToggle('delete')
        let dish = _.find(productData, p => p.productId == id)
        displayDelete = dish.productName;
        deleteId = dish.productId;
    }
    function deleteProduct():void{
        productInfo.update( product => {
            let dish = _.find(product, p => p.productId == deleteId)
            if(dish.productName === deletename){
                _.remove(product,  p => p.productId == deleteId);
                deleteError = '';
                formToggle('delete')
                toastr.success('Dish deleted to successfully.')
            }
            else{
                deleteError = 'enter valid name';
            }
            return product;
        })
    }
    let openAction = null;
    function toggleAction(id:number):void{
        if(openAction !== id){
            if(openAction == 0){
                openAction = null;
            }
            else{
                openAction = id;
            }
        }
        else{
            openAction = null;
        }
    }

</script>

<div class="md:ml-16 ml-4 pt-4">
    <button type="button" on:click={() => {formToggle('add')} } class=" disabled:opacity-40 mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add New Dish</button>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="md:mx-10 mx-2 md:pt-6 pt-2 hidden md:block">
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-700  mt-10">
            <thead class="text-md text-gray-700 uppercase bg-gray-100 md:table-header-group hidden">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Dish Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Dish name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th >
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each productData as product}
                    <tr class="bg-white hover:bg-gray-200">
                        <td class="px-6 py-4 font-medium whitespace-nowrap ">
                            <img class="rounded-lg w-32 h-24 object-cover" src="{product.productImage}">
                        </td>
                        <td class="px-6 py-4">
                            {product.productName}
                        </td>
                        <td class="px-6 py-4">
                            <span>&#8377;</span>{product.productPrice}
                        </td>
                        <td  class="px-6 py-4 overflow-hidden">
                            {product.productDescription}
                        </td>
                        <td>
                            <button type="button" class="m-3">
                                <span class="text-3xl font-bold p-3" on:click={ ()=> { toggleAction(product.productId) }}>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </span>
                            </button>
                            <div class="{(openAction === product.productId)?'':'hidden'} right-6 rounded-lg overflow-hidden shadow-md md:absolute bg-white md:w-28 w-full px-4 text-center">
                                <div>
                                    <button on:click={ ()=> { setEditProduct(product.productId) , toggleAction(0) }} type="button" class="w-20 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>
                                </div>
                                <div>
                                    <button on:click={ ()=> { setPeoductDelete(product.productId) , toggleAction(0) }} type="button" class=" w-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/each} 
            </tbody>
        </table>
    </div>
</div>
<!-- svelte-ignore a11y-img-redundant-alt a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="px-2 py-1 md:hidden flex-row "> 
    {#each productData as product}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg my-3 grid grid-cols-7 gap-2 border-double border-0 hover:border-2 hover:border-green-300">
            <div class="col-span-3">
                <a href="/#">
                    <img src="{product.productImage}" alt="Product Image" class="w-full h-56 object-cover">
                </a>
            </div>
            <div class="px-2 py-2 col-span-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-2">{product.productName}</h5>
                <p class="mb-3 font-bold ">
                    Price : 
                    <span class="text-red-900"><span>&#8377; </span>{product.productPrice}</span>
                </p>
                <p class="mb-3 font-normal text-gray-700 overflow-hidden">
                    <span class="font-bold">Description : </span>{product.productDescription}
                </p>
                <div class="flex">
                    <button on:click={ ()=> { setEditProduct(product.productId) }} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Edit</button>

                    <button on:click={ ()=> { setPeoductDelete(product.productId) }} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                </div>
            </div>
        </div>
    {/each}
</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="{blurScreen? '':'hidden' } z-[1] backdrop-blur-sm fixed flex items-center top-0 left-0 right-0 bottom-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full">
    <div class="border border-gray-300 rounded-lg mx-auto w-full max-w-md h-fit popup {updateProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 ">Update product details</h3>
                <form class="space-y-6"  on:submit|preventDefault={updateProduct} action="#">
                    <div>
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
                    <div>
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
                    <div>
                        <InputArea
                        name="description" label="Description"
                        placeholder="Description"
                        bind:value={formState.description}
                        onInput={handleChange}
                        messages={result.getErrors("description")}
                        validityclass={cn("description")}
                        />
                    </div>
                    <div>
                        <InputFile 
                        name="image" label="Image"
                        bind:value={formState.image}
                        onChange={handleChange}
                        messages={result.getErrors("image")}
                        validityclass={cn("image")}
                        />
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <ButtonSubmit {disabled}>Update details</ButtonSubmit>
                            <button on:click={ () => {formToggle('update')} } type="reset" class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="border border-gray-300 rounded-lg mx-auto w-full max-w-md h-fit popup {addProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 ">Add new product</h3>
                <form class="space-y-6" on:submit|preventDefault={handleProduct}>
                    <div>
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
                    <div>
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
                    <div>
                        <InputArea
                        name="description" label="Description"
                        placeholder="Description"
                        bind:value={formState.description}
                        onInput={handleChange}
                        messages={result.getErrors("description")}
                        validityclass={cn("description")}
                        />
                    </div>
                    <div>
                        <InputFile 
                        name="image" label="Image"
                        bind:value={formState.image}
                        onChange={handleChange}
                        messages={result.getErrors("image")}
                        validityclass={cn("image")}
                        />
                    </div>
                    <div class="flex items-center rounded-b">
                        <div class="ml-auto">
                            <ButtonSubmit {disabled}>Add Dish</ButtonSubmit>
                            <button on:click={ () => {formToggle('add')} } type="reset" class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="border border-gray-300 rounded-lg mx-auto w-full max-w-md h-fit popup {deleteProductToggle? '':'hidden' }">
        <div class="bg-white rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 "> Delete - {displayDelete} </h3>
                <div>
                    <input bind:value={deletename} type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 " placeholder="Product Name" >
                    <span class="text-red-500">{deleteError}</span>
                </div>
                <div class="mt-2 flex items-center rounded-b">
                    <div class="ml-auto">
                        <button on:click={deleteProduct} type="button" class="mx-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Delete</button>
                        <button on:click={()=>formToggle('delete')} type="button" class="mx-1 text-gryay-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
