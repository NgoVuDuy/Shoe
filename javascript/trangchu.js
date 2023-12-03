import { productsHot } from "./data/products-popular.js";
import {productsSale} from "./data/products-sale.js"

const productListHot = document.getElementById("productListHot");
const productListSale = document.getElementById("productListSale");

productsHot.forEach(product => {
    const productHTML = `
        <div class="col-7 col-sm-5 col-lg-4 col-md-4">
            <div class="sanpham">
                <div class="img_sanpham">
                    <a class="product-link" href="html/chitietsanpham.html?id=${product.id}"><img src="${product.image}" alt="" width="100%" height="100%"></a>

                    <div class="product-cart">
                        <i title="Thêm vào giỏ hàng" class="fa-solid fa-cart-arrow-down"></i>               
                    </div>
                    <div class="product-heart">
                        <i title="Thêm vào yêu thích" class="fa-solid fa-heart"></i>               
                    </div>
                </div>
                <div class="tensanpham">
                    <a class="product-link" href="html/chitietsanpham.html?id=${product.id}"><p>${product.name}</p></a>
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
                <div class="buy-btn">
                    <a class="product-link" href="html/muahang.html?id=${product.id}"><button>Mua ngay</button></a>
                </div>
            </div>
        </div>
    `;
    productListHot.innerHTML += productHTML;
});

productsSale.forEach(product => {
    const productHTML = `
    <div class="col-7 col-lg-2 col-md-4 col-sm-5">
        <div class="sanpham">
            <div class="img_sanpham">
                <a class="product-link" href="html/chitietsanpham.html?id=${product.id}"><img src="${product.image}" alt="" width="100%" height="100%"></a>
                <img class="sale" src="images/sale.png" alt="Sale" width="35%">
            </div>
            <div class="tensanpham">
                <a class="product-link" href="html/chitietsanpham.html?id=${product.id}"><p>${product.name}</p></a>
            </div>
            <div class="danhgia">
                <i class="fa-solid fa-star"><span>${product.evaluate}</span></i>
            </div>
            <div class="brand-sale">
                <p>NiKe</p>
            </div>
            <div class="giatien">
                <p>${product.price}</p>
            </div>
            <div class="buy-btn-sale">
                <a class="product-link" href="html/muahang.html?id=${product.id}"><button>Mua ngay</button></a>
            </div>
        </div>
    </div>
    `;
    productListSale.innerHTML += productHTML;
});

// Lấy các phần tử buy-btn
var buyBtn = document.querySelectorAll(".buy-btn");
// Thêm sự kiện resize để theo dõi kích thước màn hình
window.addEventListener("resize", function() {
    // Lấy chiều rộng của màn hình
    var windowWidth = window.innerWidth;

    // Kiểm tra điều kiện và thay đổi lớp tương ứng
    if (windowWidth < 1400) {
        // Nếu màn hình nhỏ hơn 1400px, thì thêm lớp buy-btn-sale và xóa lớp buy-btn
        // buyBtn.classList.add("buy-btn-sale");
        // buyBtn.classList.remove("buy-btn");
        buyBtn.forEach( btn => {
            btn.classList.add("buy-btn-sale")
            btn.classList.remove("buy-btn")

        })
    } else {
        // Nếu màn hình lớn hơn hoặc bằng 1400px, thì thêm lớp buy-btn và xóa lớp buy-btn-sale
        buyBtn.forEach( btn => {
            btn.classList.add("buy-btn")
            btn.classList.remove("buy-btn-sale")

        })
    }
});

// Gọi sự kiện resize lần đầu để xác định lớp ban đầu
window.dispatchEvent(new Event("resize"));

const buyBtn1 = document.querySelectorAll(".product-link button") 
buyBtn1.forEach((button, index) => {
    button.addEventListener("click", function() {
        localStorage.removeItem("total")
        localStorage.removeItem("chitietsanpham")
    })
})