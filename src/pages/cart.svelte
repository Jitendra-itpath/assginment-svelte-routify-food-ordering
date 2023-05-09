<script lang="ts">
    import { productInfo , cartInfo , orderInfo } from '../stores/StoresData';
    import { goto } from '@sveltech/routify';
    import * as _ from 'lodash'
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
    toastr.options.positionClass = 'toast-top-right ';
    toastr.options.timeOut = 2000;
    $: cartdata = $cartInfo;
    $: productData = $productInfo;
    $: orderData = $orderInfo
    function getProductData(id){
        return _.find(productData,x => x.productId == id)
    } 
    function increase(id){
        cartInfo.update( cart => {
            let dish = _.find(cart, p => p.cartId == id)
            if(dish){
                dish.quantity = dish.quantity + 1;
            }
            return cart;
        })
    }
    function decrease(id:number):void{
        cartInfo.update( cart => {
            let dish = _.find(cart, p => p.cartId == id)
            if(dish){
                dish.quantity = (dish.quantity <=1 )? dish.quantity : dish.quantity - 1;
            }
            return cart;
        })
    }
    function removeCartData(id:number,messages:boolean = true):void{
        cartInfo.update( cart =>{
            let result = _.remove(cart,x => x.cartId == id);
            if(result.length > 0){
                (messages)? toastr.success('Dish Removed.'):null;
            }
            return cart
        } )
    }
    function addOrderData(id:number):void{
        let orderId = 1;
        let dishInCart = _.find(cartdata, p => p.cartId == id)
        if(Object.keys(orderData).length > 0){
            orderId = _.last(orderData).orderId + 1;
        }
        orderInfo.update(order => [... order,{orderId : orderId, productId : dishInCart.productId , quantity : dishInCart.quantity}])
        toastr.success('Dish orderd.')
    }
</script>

{#if _.size(cartdata) === 0}
    <div class="w-full flex justify-center pt-12">
        <img src="../images/empty-cart.png" alt="" class="object-cover h-1/2 md:w-1/2">
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
                        Delete
                    </th>
                    <th>
                        Order
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each cartdata as cart}
                    <tr class="bg-white hover:bg-gray-200">
                        <td data-th="Dish Image" class="px-6 py-4 whitespace-nowrap ">
                            <img on:click={ ()=> { $goto('../productPage/?id='+cart.productId) } } class="rounded-lg w-28 h-24 object-cover" src="{getProductData(cart.productId).productImage}">
                        </td>
                        <td data-th="Dish Name" class="px-6 py-4">
                            {getProductData(cart.productId).productName}
                        </td>
                        <td data-th="Quantity" class="px-6 py-4 text-red-900 font-bold">
                            <span>&#8377; {getProductData(cart.productId).productPrice}</span>
                        </td>
                        <td data-th="Quantity" class="px-6 py-4">
                            <div class="flex">
                                <div on:click={() => decrease(cart.cartId)} class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <div class="mt-2">
                                    {cart.quantity}
                                </div>
                                <div on:click={() => increase(cart.cartId)} class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </td>
                        <td data-th="Price" class="px-6 py-4 font-bold">
                            <span>&#8377; {getProductData(cart.productId).productPrice * cart.quantity}</span>
                        </td>
                        <td>
                            <button on:click={()=>{removeCartData(cart.cartId)}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                        <td>
                            <button on:click={()=>{ addOrderData(cart.cartId); removeCartData(cart.cartId,false); }} type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </td>
                    </tr>
                {/each} 
            </tbody>
        </table>
    </div>
</div>

<!-- svelte-ignore a11y-img-redundant-alt a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="px-2 py-1 md:hidden flex-row sm:grid sm:grid-cols-1"> 
    {#each cartdata as cart}
    <div class="bg-white rounded-lg overflow-hidden shadow-lg my-3 grid grid-cols-7 gap-2 border-double border-0 hover:border-4 hover:border-green-500">
        <div class="col-span-3">
            <img on:click={ ()=> { $goto('../productPage/?id='+cart.productId) } } src="{getProductData(cart.productId).productImage}" alt="Product Image" class="w-full h-56 object-cover">
            </div>
            <div class="px-2 py-2 col-span-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 my-2">{getProductData(cart.productId).productName}</h5>
                <p class="mb-3 font-bold ">
                        Price : 
                        <span class="text-red-900"><span>&#8377; </span>{getProductData(cart.productId).productPrice}</span>
                    </p>
                    <p class="mb-3 font-normal text-gray-700">
                        <span on:click={() => decrease(cart.cartId)} class="text-1xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                            <i class="fa-solid fa-minus"></i>
                        </span>
                        <span class="mx-2">{cart.quantity}</span>
                        <span on:click={() => increase(cart.cartId)} class="text-1xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                </p>
                <p class="mb-3 font-bold ">
                    Total price : 
                    <span><span>&#8377; </span> {getProductData(cart.productId).productPrice * cart.quantity} </span>
                </p>
                <div class="space-x-1">
                    <button on:click={()=>{ removeCartData(cart.cartId) }} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                    <button on:click={()=>{ addOrderData(cart.cartId); removeCartData(cart.cartId,false); }} type="button" class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mb-2">
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
        {/each}
    </div>
{/if}