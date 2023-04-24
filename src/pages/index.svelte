<script lang="ts">
     import { productInfo } from '../stores/StoresData';
     import * as _ from 'lodash'
     let productData = $productInfo;
     productData = _.reverse(productData)
</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-5 md:mr-18 mx-3"> 
     {#each productData as product}
	     <div class="bg-white rounded-lg overflow-hidden shadow-md">
		     <img src="{product.productImage}" alt="Product Image" class="w-full h-52 object-cover">
			<div class="px-6 py-4">
				<a href="/#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{product.productName}</h5>
				</a>
				<p class="mb-3 font-bold  text-red-900">{product.productPrice}</p>
				<p class="mb-3 font-normal text-gray-700">{product.productDescription}</p>
			</div>
		</div>
     {/each}
</div>