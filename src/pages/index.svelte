<script lang="ts">
    import { productInfo } from '../stores/StoresData';
    import { addToCart } from '../stores/AddCartData';
	import { url } from '@sveltech/routify';
	import * as _ from 'lodash'
	import toastr from 'toastr';
	import 'toastr/build/toastr.min.css';
	toastr.options.positionClass = 'toast-top-right ';
	toastr.options.timeOut = 2000;
    //for image slider
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
        interval  = setInterval( () => changeSlide(1), 5000 );
    });
    onDestroy( () => clearInterval( interval ) )
    $:productData = $productInfo;
    productData = _.reverse(productData)
</script>

<div class="w-full md:px-1">
    <div class="relative">
          <div class="overflow-hidden relative rounded-lg h-60 md:h-96">
              <div class=" duration-700 ease-in-out mySlides">
                  <img src="../images/slider1.png" class="h-full block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
              </div>
              <div class=" duration-700 ease-in-out mySlides">
                  <img src="../images/slider3.png" class="h-full block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
              </div>
              <div class="duration-700 ease-in-out mySlides">
                  <img src="../images/slider2.png" class="h-full block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="...">
              </div>
          </div>
          <button on:click={()=>{changeSlide(1)}} type="button" class="z-[0] flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <i class="mt-2 text-white w-6 h-6 fa-solid fa-chevron-left"></i>
              </span>
          </button>
          <button on:click={()=>{changeSlide(-1)}} type="button" class="z-[0] flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                  <i class="mt-2 text-white w-6 h-6 fa-solid fa-chevron-right"></i>
              </span>
          </button>
      </div>
  </div>
<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="grid grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 gap-1 md:mx-5 mx-1 pt-3"> 
     {#each productData as product}
	     <div class="bg-white rounded-lg overflow-hidden shadow-lg border hover:border-gray-300">
			<a href="{$url('../productPage/?id='+product.productId)}">
		     <img src="{product.productImage}" alt="Product Image" class="w-full h-52 object-cover">
		 	</a>
			<div class="px-6 py-4">
				<a href="{$url('../productPage/?id='+product.productId)}">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
				</a>
				<p class="mb-3 font-bold  text-red-900"><span>&#8377; </span>{product.productPrice}</p>
				<p class="mb-3 font-normal text-gray-700 overflow-hidden">{product.productDescription}</p>
				<button on:click={()=>{addToCart(product.productId,1)}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Order this</button>
			</div>
		</div>
     {/each}
</div>