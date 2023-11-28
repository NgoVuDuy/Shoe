import { productsList } from "./data/products-all.js"

const linkProduct = document.querySelector(".product-link")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price span")
const productBrand = document.querySelector(".product-brand b")
const productColor = document.querySelector(".product-color b")
const productImg = document.querySelectorAll(".col-lg-6 img")
const productIntro = document.querySelector(".product-intro")
const productSize = document.querySelectorAll(".product-size span")
const productNumber = document.querySelector(".product-number")

// const productBuy = document.querySelector(".product-buy-container")
var checkClickedImg = false
var checkClickedSize = false

var soluongProduct
var imgProduct
var sizeProduct


var productArray = []

// var productCartArray

// productCartArray = JSON.parse(localStorage.getItem("chuyen-den-gio-hang")) || []

// Lấy dữ liệu từ localStorage khi trang được tải hoặc tạo rỗng mảng
const cartItems = JSON.parse(localStorage.getItem("product")) || [];

if(cartItems != null) {
    console.log(cartItems)
}



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

        // var productHTML = `
        //     <a href="/html/muahang.html?id=${product.id}"><button class="product-buy-now product-btn">Mua ngay</button></a>
        // `
        // productBuy.innerHTML += productHTML
    }
})

// Xử lý khi nhẫn vào ảnh
productImg.forEach((img, index) => {
    img.addEventListener("click", function() {
        checkClickedImg = true

        imgProduct = img.src
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

// Xử lý khi nhấn vào size
productSize.forEach((size, index) => {
    size.addEventListener("click", function() {
        sizeProduct = size.textContent
        checkClickedSize = true
        productSize.forEach((sizeOther, index) => {
            sizeOther.style.border = "1px black solid"
        })
        size.style.border = "2px blue solid"

    })
})

const productBtn = document.querySelector(".product-buy-now")

const productAddCart = document.querySelector(".product-add-cart")

productBtn.addEventListener("click", function() {
    if(!checkClickedImg || !checkClickedSize) {
        Swal.fire('Bạn chưa chọn kích thước hoặc màu giày !','', 'errors')
    } else {
        // console.log(sizeProduct)
        // console.log(productColor.textContent)
        // console.log(imgProduct)
        // console.log(productNumber.value)

        const product = {
            img: imgProduct,
            size: sizeProduct,
            color: productColor.textContent,
            sl: productNumber.value,
            ID: id 
        }
        productArray.push(product)
        // console.log(productArray)
        localStorage.removeItem("total")
        localStorage.setItem("chitietsanpham", JSON.stringify(productArray))
        window.location.href = "../html/muahang.html"
    }
})

productAddCart.addEventListener("click", function() {
    if(!checkClickedImg || !checkClickedSize) {
        Swal.fire('Bạn chưa chọn kích thước hoặc màu giày !','', 'errors')
    } else {
        // console.log(sizeProduct)
        // console.log(productColor.textContent)
        // console.log(imgProduct)
        // console.log(productNumber.value)

        const product = {
            id: urlParams.get("id"),
            name: productName.textContent,
            price: productPrice.textContent,
            img: imgProduct,
            color: productColor.textContent
        }
        cartItems.push(product)
        // console.log(productArray)
        localStorage.setItem("product", JSON.stringify(cartItems))
        Swal.fire('Thêm vào giỏ hàng thành công','', 'success')
        
    }
})
const heartItems = JSON.parse(localStorage.getItem("like")) || [];


const productLikeBtn = document.querySelector(".product-add-like")

productLikeBtn.addEventListener("click", function() {
        const productData = {
            id: urlParams.get("id"),
            name: productName.textContent,
            img: productImg[0].src,
            price: productPrice.textContent,
            evaluate: "4.8"
        };
        // Thêm dữ liệu mới vào mảng cũ
        heartItems.push(productData);
        
        // Lưu mảng vào localStorage
        localStorage.setItem("like", JSON.stringify(heartItems));
        Swal.fire('Thêm vào yêu thích thành công','', 'success')
    

})