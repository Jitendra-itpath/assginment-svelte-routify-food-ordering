<script lang="ts">
	import { productInfo , cartInfo } from '../stores/StoresData';
	import { url } from '@sveltech/routify';
	import * as _ from 'lodash'
	import toastr from 'toastr';
	import 'toastr/build/toastr.min.css';
	toastr.options.positionClass = 'toast-top-right ';
	toastr.options.timeOut = 2000;

     $:productData = $productInfo;
     productData = _.reverse(productData)
	 const addToCart = (id) => {
		let cartdata = $cartInfo
		let cartId = 1
        if(_.last(cartdata).cartId != undefined){
            cartId = _.last(cartdata).cartId + 1
        }
        cartInfo.update(cart => [...cart , { cartId: cartId, productId : id ,quantity : 1 } ])
		toastr.success('Dish added to orders.')
	 }
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3"> 
     {#each productData as product}
	     <div class="bg-white rounded-lg overflow-hidden shadow-lg border hover:border-gray-400">
			<a href="{$url('../productPage/?id='+product.productId)}">
		     <img src="{product.productImage}" alt="Product Image" class="w-full h-52 object-cover">
		 	</a>
			<div class="px-6 py-4">
				<a href="{$url('../productPage/?id='+product.productId)}">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
				</a>
				<p class="mb-3 font-bold  text-red-900">{product.productPrice}</p>
				<p class="mb-3 font-normal text-gray-700 overflow-hidden">{product.productDescription}</p>
				<button on:click={()=>{addToCart(product.productId)}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Order this</button>
			</div>
		</div>
     {/each}
</div>