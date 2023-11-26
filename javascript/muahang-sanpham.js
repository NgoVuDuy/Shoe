import { productsList } from "./data/products-all.js";

const containerProduct = document.querySelector(".buy-container")
const totalProduct = document.querySelectorAll(".buy-total-value")

const productArray = JSON.parse(localStorage.getItem("chitietsanpham"))

const url = new URLSearchParams(window.location.search)
var idProduct = url.get("id")

//Đổ dữ liệu phần chi tiết sản phẩm
if(productArray != null) {
    productsList.forEach((product, index) => {
        if(productArray[0].ID == product.id) {
            totalProduct[0].textContent = product.price
            totalProduct[1].textContent = product.price
            var productHTML = `
                <div class= "row mt-4">
                    <div class="col-12 col-lg-6 col-md-6 col-sm-6 buy-flex">
                        <img src="${productArray[0].img}" alt="" width="20%">
                        <p>${product.name}</p>
                    
                    </div>
                    <div class="col-12 col-lg-2 col-md-2 col-sm-2">       
                        <p>${product.price}</p>
                    </div>
                    <div class="col-12 col-lg-1 col-md-1 col-sm-1 ">       
                        <p>${productArray[0].sl}</p>
                    </div>
                    <div class="col-12 col-lg-2 col-md-2 col-sm-2">       
                        <p>${productArray[0].color}</p>
                    </div>
                    <div class="col-12 col-lg-1 col-md-1 col-sm-1 ">       
                        <p>${productArray[0].size}</p>
                    </div>
                
                
                </div>
                
            `
                containerProduct.innerHTML += productHTML
        }
    })
}

//Đổ dữ liệu từ trang chủ và sản phẩm
productsList.forEach((product, index) => {
    if(idProduct == product.id) {
        console.log(product)
        totalProduct[0].textContent = product.price
        totalProduct[1].textContent = product.price
        var productHTML = `
        <div class= "row">
            <div class="col-12 col-lg-6 col-md-6 col-sm-6 buy-flex">
                <img src="${product.image}" alt="" width="20%">
                <p>${product.name}</p>
            
            </div>
            <div class="col-12 col-lg-2 col-md-2 col-sm-2">       
                <p>${product.price}</p>
            </div>
            <div class="col-12 col-lg-1 col-md-1 col-sm-1 ">       
                <p>1</p>
            </div>
            <div class="col-12 col-lg-2 col-md-2 col-sm-2">       
                <p>${product.color_0}</p>
            </div>
            <div class="col-12 col-lg-1 col-md-1 col-sm-1 ">       
                <p>39</p>
            </div>
        
        
        </div>
        
        `
            containerProduct.innerHTML += productHTML
    }
})