import { productsList } from "./data/products-all.js";

const products = document.getElementById("products")

productsList.forEach(product => {
    const productHTML = `
    <div class="col-6 col-md-4 col-lg-3">
        <div class="sanpham">
            <div class="img_sanpham">
                <a class="product-link" href="chitietsanpham.html?id=${product.id}"><img src="${product.image}" alt="" width="100%" height="100%"></a>

                <div class="product-cart">
                    <i title="Thêm vào giỏ hàng" class="fa-solid fa-cart-arrow-down"></i>               
                </div>
                <div class="product-heart">
                    <i title="Thêm vào yêu thích" class="fa-solid fa-heart"></i>               
                </div>
            </div>
            <div class="tensanpham">
                <a class="product-link" href="chitietsanpham.html?id=${product.id}"><p>${product.name}</p></a>
            </div>
            <div class="danhgia">
                <i class="fa-solid fa-star"><span>${product.evaluate}</span></i>
            </div>
            <div class="brand">
                <p>NiKe</p>
            </div>
            <div class="giatien">
                <p>${product.price}</p>
            </div>
            <div class="buy-btn-sale">
                <a class="product-link" href="muahang.html?id=${product.id}"><button>Mua ngay</button></a>
            </div>
        </div>
    </div>
    `
    products.innerHTML += productHTML
});

const buyBtn = document.querySelectorAll(".product-link button") 

buyBtn.forEach((button, index) => {
    button.addEventListener("click", function() {
        localStorage.removeItem("total")
        localStorage.removeItem("chitietsanpham")
    })
})