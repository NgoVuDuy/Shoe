import { productsList } from "./data/products-all.js";

const containerProduct = document.querySelector(".buy-container")
const totalProduct = document.querySelectorAll(".buy-total-value")

const productArray = JSON.parse(localStorage.getItem("chitietsanpham"))

const url = new URLSearchParams(window.location.search)
var idProduct = url.get("id")

if(productArray != null) {

    productsList.forEach((product, index) => {
        if(productArray[0].ID == product.id) {
            totalProduct[0].textContent = product.price
            totalProduct[1].textContent = product.price
            var productHTML = `
                <div class="buy-product">
                    <img src="${productArray[0].img}" alt="" width="20%">
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                    <p>SL: ${productArray[0].sl}</p>
                    <p>Màu sắc: ${productArray[0].color}</p>
                </div>
                
                `
                containerProduct.innerHTML += productHTML
        }
    })
}


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
                <p>Màu sắc: ${product.color_0}</p>
            </div>
            
            `
            containerProduct.innerHTML += productHTML
    }
})