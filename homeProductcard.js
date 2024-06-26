import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantitytoggle";



let productContainer = document.getElementById("productContainer");
let productTemplate = document.getElementById("productTemplate");

export let showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach((curProd)=>{
        let {id, image, category, name, price, description, stock} = curProd;
        //import node only usefull for to get template data and object from other document
        let productClone = document.importNode(productTemplate.content,true);
        // console.log(productClone);

        // Get product Details here
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        // console.log(name);
        productClone.querySelector(".productDescription").textContent = description;
        // for getting rupee symbol We using `` for not getting error while counting
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;
        productClone.querySelector(".productStock").textContent = `Total available Stock ${stock}`;
        // console.log(stock);

        // setting Attribute value Or id for card for increment decrement
        productClone.querySelector("#cardsValue").setAttribute("id", `card${id}`);

        // here we giving increment and decrement function
        productClone.querySelector(".stockElement").addEventListener("click" , (event)=>{
           homeQuantityToggle(event, id, stock);
        });

        //here add to card button
        productClone.querySelector('.add-to-cart-button').addEventListener('click', (event)=>{
            addToCart(event, id, stock);
        });


        // Appending content In product Container
        productContainer.append(productClone);

    })
};