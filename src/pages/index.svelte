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
		if(Object.keys(cartdata).length > 0){
            cartId = _.last(cartdata).cartId + 1
        }
        cartInfo.update(cart => [...cart , { cartId: cartId, productId : id ,quantity : 1 } ])
		toastr.success('Dish added to orders.')
	 }

	import { onDestroy, onMount } from 'svelte';
    let counter:number = 1;
    function changeSlide(n) {
        showDivs(counter += n);
    }
    function showDivs(n: number):void {
        var x = document.getElementsByClassName("mySlides");
        (n > x.length)? counter = 1 : '';
        (n < 1)? counter = x.length : '';
        for (let i = 0; i < x.length; i++) {
            (x[i] as HTMLDivElement).style.display = "none";
        }
        (x[counter-1] as HTMLDivElement).style.display = "block";
    }
    let interval = null;
    onMount(async () => {
		interval  = setInterval(() => changeSlide(1), 1500);
	});
    onDestroy(()=>clearInterval(interval))

</script>
<!-- svelte-ignore a11y-missing-attribute -->
<div class="md:h-96 h-120 w-full overflow-hidden relative">
    <div class="flex transition-transform duration-150 ease-in relative z-[-2]">
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96" src="../images/slider1.png">
        </div>
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96 " src="../images/slider2.png">
        </div>
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96" src="../images/slider3.png">
        </div>
    </div>
	<div>
	</div>
</div>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3 pt-3"> 
     {#each productData as product}
	     <div class="bg-white rounded-lg overflow-hidden shadow-lg border hover:border-gray-300">
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