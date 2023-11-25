import { productsList } from "./data/products-all.js";

const containerProduct = document.querySelector(".buy-container")
const totalProduct = document.querySelectorAll(".buy-total-value")


const url = new URLSearchParams(window.location.search)
var idProduct = url.get("id")


productsList.forEach((product, index) => {
    if(idProduct == product.id) {
        totalProduct[0].textContent = product.price
        totalProduct[1].textContent = product.price
        var productHTML = `
            <div class="buy-product">
                <img src="${product.image}" alt="" width="20%">
                <p>${product.name}</p>
                <p>${product.price}</p>
                <p>SL: 1</p>
            </div>
            
            `
            containerProduct.innerHTML += productHTML
    }
})