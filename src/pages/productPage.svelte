<script lang="ts">
    import { productInfo } from "../stores/StoresData";
    import { cartInfo } from "../stores/StoresData";
    import * as _ from 'lodash'
    let id = new URLSearchParams(window.location.search).get('id');
    
    let productData = $productInfo;
    let product = _.find(productData,p => p.productId == id)
    let quantity:number = 1;
    const increase = () =>{ quantity++ }
    const decrease = () =>{ (quantity <= 1 )? '':quantity-- }

    let cartdata = $cartInfo;
    function addToCart(){
        let cartId = 1
        if(_.last(cartdata).cartId != undefined){
            cartId = _.last(cartdata).cartId + 1
        }
        cartInfo.update(cart => [...cart , { cartId: cartId, productId : product.productId ,quantity : quantity } ])
    }
</script>

<!-- svelte-ignore a11y-img-redundant-alt a11y-click-events-have-key-events -->
<div class="grid md:grid-cols-2 md:gap:28 gap-6 bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <img src="{product.productImage}" alt="Product Image" class="w-full md:h-[32rem] h-96 object-cover">
    </div>
    <div class="md:mt-5 md:pl-4 p-2">
        <div class="md:h-1/2">
            <p class="text-3xl text-red-900 font-bold my-3">{product.productName}</p>
            <p class="text-2xl text-gray-500 leading-8 my-5">{product.productDescription}</p>
            <p class="font-bold leading-8 my-5"> 
                <span class="text-lg text-black-900">Price : </span>
                <span class="text-lg text-red-500">123</span>
            </p>
        </div>
        <div class="md:h-1/2">
            <p class="font-bold leading-8 my-4 text-black-900">
                <span>Quantity : { quantity }</span>
                <span on:click={ increase } class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span on:click={ decrease } class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                    <i class="fa-solid fa-minus"></i>
                </span>
            </p>
            <p class="font-bold leading-8 my-6 text-black-900">Total price : { product.productPrice * quantity }</p>
        
            <button type="button" on:click={addToCart} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Confirm Order</button>
        </div>
    </div>
</div>