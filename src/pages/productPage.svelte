<script lang="ts">
    import { addToCart } from "../stores/AddCartData";
    import { productInfo } from "../stores/StoresData";
    import { goto } from '@sveltech/routify';
    import * as _ from 'lodash'
    import toastr from 'toastr';
	import 'toastr/build/toastr.min.css';
	toastr.options.positionClass = 'toast-top-right ';
	toastr.options.timeOut = 2000;
    let id = new URLSearchParams(window.location.search).get('id');
    let productData = $productInfo;
    let product = _.find(productData,p => p.productId == id)
    let quantity = 1;
    const increase = () =>{ quantity++ }
    const decrease = () =>{ (quantity <= 1 )? quantity = 1 : quantity-- }
    function redirect(){
        $goto('../cart')
    }
</script>

<!-- svelte-ignore a11y-img-redundant-alt a11y-click-events-have-key-events -->
<div class="grid md:grid-cols-2 md:gap:28 gap-6 bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-1">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
        <img src="{product.productImage}" alt="Product Image" class="w-full md:h-[32rem] h-96 object-cover">
    </div>
    <div class="md:mt-5 md:pl-4 p-2">
        <div class="md:h-1/2">
            <p class="text-3xl text-red-900 font-bold my-3">{product.productName}</p>
            <p class="text-2xl text-gray-500 leading-8 my-5">{product.productDescription}</p>
            <p class="font-bold leading-8 my-5"> 
                <span class="text-lg text-black-900">Price : </span>
                <span class="text-lg text-red-500"><span>&#8377; </span>{product.productPrice}</span>
            </p>
        </div>
        <div class="md:h-1/2">
            <p class="font-bold leading-8 my-4 text-black-900">
                <span>Quantity : </span>
                <span on:click={ decrease } class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                    <i class="fa-solid fa-minus"></i>
                </span>
                <span>{ quantity }</span>
                <span on:click={ increase } class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded select-none">
                    <i class="fa-solid fa-plus"></i>
                </span>
            </p>
            <p class="font-bold leading-8 my-6 text-black-900">Total price : <span>&#8377; </span>{ product.productPrice * quantity }</p>
            <button type="button" on:click={()=>{ addToCart(Number(id),quantity) , redirect() } } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Add to cart</button>
        </div>
    </div>
</div>