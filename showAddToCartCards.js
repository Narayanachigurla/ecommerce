
import products from './api/products.json'
import { fetchQuantityFromCartLs } from './fetchQuantityFromCartLs';
import { getCartproductFromLs } from './getCartProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';

let cartProducts =  getCartproductFromLs();

let filterProducts = products.filter((curProd) => {
    //Here we using some method for show only matched id elements in local storage
    return cartProducts.some((curElem) => (curElem.id === curProd.id) );
});

// console.log(filterProducts);

//Here update the cart products

let cartElement = document.querySelector("#productCartContainer");
let templateContainer = document.querySelector("#productCartTemplate");

// showing cart products

let showCartProduct = () => {
    filterProducts.forEach((curProd) => {

        let {id, image, category, name, price, description, stock} = curProd;

        let productClone = document.importNode(templateContainer.content,true);

        //here we updating ls quantity and price in cart products
        let lsActualData = fetchQuantityFromCartLs(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;

                // here we giving increment and decrement function
                productClone.querySelector(".stockElement").addEventListener("click" , (event)=>{
                    incrementDecrement(event, id, stock, price);
                 });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click",
             () => removeProdFromCart(id) );

        cartElement.appendChild(productClone);
    });
}

showCartProduct();


