import { productsList } from "./data/products-all.js"

const linkProduct = document.querySelector(".product-link")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price span")
const productBrand = document.querySelector(".product-brand b")
const productColor = document.querySelector(".product-color b")
const productImg = document.querySelectorAll(".col-lg-6 img")
const productIntro = document.querySelector(".product-intro")
const productSize = document.querySelectorAll(".product-size span")

const productBuy = document.querySelector(".product-buy-container")


const urlParams = new URLSearchParams(window.location.search)
var id = urlParams.get("id")

productsList.forEach(product => {
    if(id == product.id) {
        productName.textContent = product.name
        productPrice.textContent = product.price
        productBrand.textContent = "Adidas"

        productImg[0].src = product.image
        productImg[1].src = product?.image_1
        productImg[2].src = product?.image_2
        productImg[3].src = product?.image_3

        productIntro.textContent = product.describe

        var productHTML = `
            <a href="/html/muahang.html?id=${product.id}"><button class="product-buy-now product-btn">Mua ngay</button></a>
        `
        productBuy.innerHTML += productHTML
    }
})

productImg.forEach((img, index) => {
    img.addEventListener("click", function() {
        productImg.forEach((otherImg) => {
            otherImg.style.border = "none";
        });

        img.style.border = "2px #cccccc solid"
        img.style.borderRadius = "20px"

        productsList.forEach(product => {
            if(id == product.id) {
                productColor.textContent = product["color_" + index];
        
            }
        })
    })
})
productSize.forEach((size, index) => {

    size.addEventListener("click", function() {
        productSize.forEach((sizeOther, index) => {
            sizeOther.style.border = "1px black solid"
        })
        size.style.border = "2px blue solid"

    })
})
