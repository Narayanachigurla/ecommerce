export let homeQuantityToggle = (event, id, stock) =>{
   // getting particular card On click event
    let currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    // getting product quantity element
    let productQuantity = currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity);

    // here get product quantity attribute value in string format
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    // here increment function
    if(event.target.className === "cartIncriment"){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }
    if(event.target.className === "cartDecrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    // here getting text in quantity
    productQuantity.innerText = quantity;
    // console.log(quantity);

    //here we setting attribute
    productQuantity.setAttribute("data-quantity", quantity);
    return quantity;

};