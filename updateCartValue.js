let cartValue = document.querySelector("#cartValue");

export let updateCartValue = (cartProducts) =>{
return (cartValue.innerHTML =
    `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`
);
};