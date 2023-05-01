<script lang="ts">
    import { productInfo } from '../stores/StoresData';
    import { cartInfo } from '../stores/StoresData';
    import * as _ from 'lodash'
    import toastr from 'toastr';
    import 'toastr/build/toastr.min.css';
    toastr.options.positionClass = 'toast-top-right ';
    toastr.options.timeOut = 2000;
    $: cartdata = $cartInfo;
    $: productData = $productInfo;
    function getProductData(id){
        return _.find(productData,x => x.productId == id)
    } 
    function increase(id){
        cartInfo.update( cart => {
            let dish = _.find(cart, p => p.cartId == id)
            if(dish){
                dish.quantity++;
            }
            return cart;
        })
    }
    function decrease(id:number):void{
        cartInfo.update( cart => {
            let dish = _.find(cart, p => p.cartId == id)
            if(dish){
                (dish.quantity <=1 )? '':dish.quantity--;
            }
            return cart;
        })
    }
    function removeCartData(id:number):void{
        cartInfo.update( cart =>{
            let result = _.remove(cart,x => x.cartId == id);
            if(result.length > 0){
                toastr.success('Dish Removed.')
            }
            return cart
        } )
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="md:mx-10 mx-2 md:pt-6 pt-2 hidden md:block">
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-gray-700  mt-10">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 md:table-header-group hidden">
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
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Total Price
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each cartdata as cart}
                    <tr class="bg-white border-b">
                        <td data-th="Dish Image" class="px-6 py-4 whitespace-nowrap ">
                            <img class="rounded-lg w-32 h-24 object-cover" src="{getProductData(cart.productId).productImage}">
                        </td>
                        <td data-th="Dish Name" class="px-6 py-4">
                            {getProductData(cart.productId).productName}
                        </td>
                        <td data-th="Quantity" class="px-6 py-4 text-red-900">
                            <span><span>&#8377; </span>{getProductData(cart.productId).productPrice}</span>
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
                        <td data-th="Price" class="px-6 py-4">
                            <span>&#8377; {getProductData(cart.productId).productPrice * cart.quantity}</span>
                        </td>
                        <td>
                            <button on:click={()=>{removeCartData(cart.cartId)}} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                <i class="fa-solid fa-trash-can"></i>
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
    {#each cartdata as cart}
        <div class="bg-white rounded-lg overflow-hidden shadow-lg my-3 grid grid-cols-7 gap-2">
            <div class="col-span-3">
                    <a href="/#">
                        <img src="{getProductData(cart.productId).productImage}" alt="Product Image" class="w-full h-56 object-cover">
                    </a>
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
                <button on:click={()=>{removeCartData(cart.cartId)}}  type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Remove
                </button>
            </div>
        </div>
    {/each}
</div>