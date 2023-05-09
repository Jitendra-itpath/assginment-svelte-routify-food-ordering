<script lang="ts">
    import { orderInfo ,productInfo } from "../stores/StoresData";
    import { goto } from '@sveltech/routify';
    import * as _ from 'lodash'
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
    toastr.options.positionClass = 'toast-top-right ';
    toastr.options.timeOut = 2000;
    $: orderData = $orderInfo;
    $: productData = $productInfo;
    function getProductData(id:number){
        return _.find(productData,x => x.productId == id)
    } 
    function removeOrder(id:number):void{
        orderInfo.update( order =>{
            let result = _.remove(order,x => x.orderId == id);
            if(result.length > 0){
                toastr.success('Dish Removed from orders.')
            }
            return order
        } )
    }
</script>
{#if _.size(orderData) === 0}
    <div class="w-full flex justify-center pt-12">
        <img src="../images/no-orders.png" alt="" class="object-cover h-1/3 md:w-1/3">
    </div>
    <div class="w-full flex justify-center pt-12">
        <p class="text-2xl font-bold">No orders available</p>
    </div>
{:else}
<!-- svelte-ignore a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="md:mx-10 mx-2 md:pt-6 pt-2 hidden md:block">
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-700 mt-10">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 md:table-header-group hidden">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Dish Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Dish name
                    </th>
                    <th scope="col" class="px-8 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total Price
                    </th>
                    <th>
                        Remove
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each orderData as order}
                    <tr class="bg-white hover:bg-gray-200">
                        <td data-th="Dish Image" class="px-6 py-4 whitespace-nowrap ">
                            <img on:click={ ()=> { $goto('../productPage/?id='+order.productId) } } class="rounded-lg w-32 h-24 object-cover" src="{getProductData(order.productId).productImage}">
                        </td>
                        <td data-th="Dish Name" class="px-6 py-4">
                            {getProductData(order.productId).productName}
                        </td>
                        <td data-th="Quantity" class="px-6 py-4 text-red-900 font-bold">
                            <span>&#8377; {getProductData(order.productId).productPrice}</span>
                        </td>
                        <td data-th="Quantity" class="px-6 py-4">
                            <div class="flex">
                                <div class="mt-2">
                                    {order.quantity}
                                </div>
                            </div>
                        </td>
                        <td data-th="Price" class="px-6 py-4 font-bold">
                            <span>&#8377; {getProductData(order.productId).productPrice * order.quantity}</span>
                        </td>
                        <td>
                            <button on:click={()=>{ removeOrder(order.orderId) }} type="button" class="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                <i class="fa-solid fa-delete-left"></i>
                            </button>
                        </td>
                    </tr>
                {/each} 
            </tbody>
        </table>
    </div>
</div>

<!-- svelte-ignore a11y-img-redundant-alt a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="px-2 py-1 md:hidden flex-row sm:grid sm:grid-cols-2"> 
    {#each orderData as order}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg my-3 grid grid-cols-7 gap-2  border-double border-0 hover:border-2 hover:border-green-500">
            <div class="col-span-3">
                <img on:click={ ()=> { $goto('../productPage/?id='+order.productId) } } src="{getProductData(order.productId).productImage}" alt="Product Image" class="w-full h-56 object-cover">
            </div>
            <div class="px-2 py-2 col-span-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-2">{getProductData(order.productId).productName}</h5>
                <p class="mb-3 font-bold ">
                    Price : 
                    <span class="text-red-900"><span>&#8377; </span>{getProductData(order.productId).productPrice}</span>
                </p>
                <p class="mb-3 font-bold  text-gray-700">
                    Quantity :
                    <span class="mx-2">{order.quantity}</span>    
                </p>
                <p class="mb-3 font-bold ">
                    Total price : 
                    <span><span>&#8377; </span> {getProductData(order.productId).productPrice * order.quantity} </span>
                </p>
                <button on:click={()=>{ removeOrder(order.orderId) }} type="button" class="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-900 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Remove
                </button>
            </div>
        </div>
    {/each}
</div>
{/if}