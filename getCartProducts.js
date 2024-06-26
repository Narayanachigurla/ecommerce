import { updateCartValue } from "./updateCartValue";

export let getCartproductFromLs = () =>{
let cartProducts = localStorage.getItem('cartProductLs');

if(!cartProducts){
    return [];
}
cartProducts = JSON.parse(cartProducts);

    // update cart and count
    updateCartValue(cartProducts);

return cartProducts;
};