import { getCartproductFromLs } from "./getCartProducts";

export let fetchQuantityFromCartLs  = (id, price) => {
    let cartProducts = getCartproductFromLs();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity = 1;

    if(existingProduct){
      quantity =   existingProduct.quantity;
      price   = existingProduct.price;
    }

    return {quantity, price}
}