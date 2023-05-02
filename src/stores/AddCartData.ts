import { cartInfo } from './StoresData';
import * as _ from 'lodash';
import toastr from 'toastr';
export const addToCart = (id: number,quantity: number) => {
  let cartId = 1;
  let add:boolean = true;
    cartInfo.update(cartdata=>{
        let dish = _.find(cartdata , p => p.productId == id)
        if(dish){
            dish.quantity = dish.quantity + quantity;
            add = false
        }
        else{
            if (Object.keys(cartdata).length > 0) {
                cartId = _.last(cartdata).cartId + 1;
            }
        }
        return cartdata;
    })
    if(add){
        cartInfo.update(cart => [...cart, {cartId : cartId , productId : id , quantity : quantity}]);
        toastr.success('Dish added to cart successfully.');
    }
    else{
        toastr.success(`Dish quantity incresed by ${quantity}.`);
    }
};
