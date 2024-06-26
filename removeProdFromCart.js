import { getCartproductFromLs } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartValue } from "./updateCartValue";

export let removeProdFromCart = (id) => {
    let cartProducts = getCartproductFromLs();
    // it not shows selected id and shows remaining ids
cartProducts = cartProducts.filter((curProd) => curProd.id !== id );


// here we updating it in local storage
localStorage.setItem('cartProductLs', JSON.stringify(cartProducts));


// To remove the div on click
let removeDiv = document.getElementById(`card${id}`);
removeDiv.remove();

updateCartValue(cartProducts);




};