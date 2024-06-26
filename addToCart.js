import { getCartproductFromLs } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartproductFromLs();

export let addToCart = (event, id, stock)=>{

//here we creating function for getting storage in local storage
let arrLocalStorageProduct = getCartproductFromLs();

    let currentprodElem = document.querySelector(`#card${id}`);
    // console.log(currentprodElem);
    
// here we need only the text content not whole div so use innertext
    let quantity = currentprodElem.querySelector('.productQuantity').innerText;
    let price = currentprodElem.querySelector('.productPrice').innerText;
    // console.log(quantity, price);

    // replacing rupee symbol before storing in local storage 
    price = Number(price.replace("₹", ""));
    // console.log(quantity, price);



     //Here we givin existing product dont show in cart
     let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

     if(existingProd && quantity > 1 ){

        quantity = Number(existingProd.quantity) + Number(quantity);

        price = price = Number(price * quantity);
      
         let updatedCart = {id, quantity, price}

        updatedCart = arrLocalStorageProduct.map((curProd)=>{
            return (curProd.id === id ) ? updatedCart : curProd;
         });

        //  console.log(updatedCart);

         localStorage.setItem('cartProductLs', JSON.stringify(updatedCart));
         
    }

     if(existingProd){
        // alert("bhai duplicate hai");
        return false;
     }

     // Here We updaing Price for existing product
     

    price = Number(price * quantity);
    console.log(quantity, price);

    // let updatecart = {id, quantity, price}
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductLs', JSON.stringify(arrLocalStorageProduct));


    // update cart and count
    updateCartValue(arrLocalStorageProduct);

};