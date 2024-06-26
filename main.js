import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './homeProductcard';

// console.log(products);

// call the function "showProductContainer" to display all cards
//after exporting homeProductcontainer middle of function name and () ctrl + space for import automatically
showProductContainer(products);