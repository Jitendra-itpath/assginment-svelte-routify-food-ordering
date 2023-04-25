<script lang="ts">
    import { productInfo } from '../stores/StoresData';
    import { cartInfo } from '../stores/StoresData';
    import * as _ from 'lodash'

    $: cartdata = $cartInfo;
    $: productData = $productInfo;
    
    function getProductName(id){
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
    function decrease(id){
        cartInfo.update( cart => {
            let dish = _.find(cart, p => p.cartId == id)
            if(dish){
                (dish.quantity <=1 )? '':dish.quantity--;
            }
            return cart;
        })
    }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-missing-attribute -->
<div class="md:mx-10 mx-2 md:pt-6 pt-2">
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
                </tr>
            </thead>
            <tbody>
                {#each cartdata as cart}
                    <tr class="bg-white border-b">
                        <td data-th="Dish Image" class="px-6 py-4 font-medium whitespace-nowrap ">
                            <img class="w-24" src="{getProductName(cart.productId).productImage}">
                        </td>
                        <td data-th="Dish Name" class="px-6 py-4">
                            {getProductName(cart.productId).productName}
                        </td>
                        <td data-th="Quantity" class="px-6 py-4">
                            {getProductName(cart.productId).productPrice}
                        </td>
                        <td data-th="Quantity" class="px-6 py-4">
                            <span on:click={() => decrease(cart.cartId)} class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            {cart.quantity}
                            <span on:click={() => increase(cart.cartId)} class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </td>
                        <td data-th="Price" class="px-6 py-4">
                            {getProductName(cart.productId).productPrice * cart.quantity}
                        </td>
                    </tr>
                {/each} 
            </tbody>
        </table>
    </div>
</div>
