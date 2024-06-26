import { getCartproductFromLs } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export let incrementDecrement = (event, id, stock, price) => {

    let currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    // getting product quantity and Price
    let productQuantity = currentCardElement.querySelector(".productQuantity");
    let productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    
//here we creating function for getting storage in local storage
    let localCartProducts = getCartproductFromLs();

    let existingProd = localCartProducts.find((curProd) => curProd.id === id );

    if(existingProd){
        quantity = Number(existingProd.quantity);
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;
        price = price;
    }


        // here increment function
        if(event.target.className === "cartIncriment"){
            if(quantity < stock){
                quantity += 1;
            }else if(quantity === stock){
                quantity = stock;
                localStoragePrice = price * stock;
            }
        }

        if(event.target.className === "cartDecrement"){
            if(quantity > 1){
                quantity -= 1;
            }
        }

        // finally we updating the price in local storage
        localStoragePrice = price * quantity;

        let updatedCart = {id, quantity, price : localStoragePrice}

        updatedCart = localCartProducts.map((curProd)=>{
            return (curProd.id === id ) ? updatedCart : curProd;
         });

        //  console.log(updatedCart);

            // here getting text in quantity and price
        productQuantity.innerText = quantity;
        productPrice.innerText = localStoragePrice;

         localStorage.setItem('cartProductLs', JSON.stringify(updatedCart));

         //calculating total price value in cart page
        updateCartProductTotal();

};