const heartItems = JSON.parse(localStorage.getItem("like"))

const container = document.querySelector(".container .row")

const clearLikeProduct = document.querySelector(".container-fluid .row .col-2 button")
console.log(heartItems)

clearLikeProduct.addEventListener("click", function() {
    localStorage.removeItem("like")
    location.reload();
})


console.log(heartItems)

if(heartItems != null) {
    heartItems.forEach((heartItem, index) => {
        var productHTML = `
        <div class="col-6 col-lg-3 col-md-4">
            <div class="sanpham">
                <div class="img_sanpham">
                    <a class="product-link" href="chitietsanpham.html?id=${heartItem.id}">
                        <img src="${heartItem.img}" alt="" width="100%" height="100%">
                    </a>
                    <div class="product-cart">
                        <i title="Thêm vào giỏ hàng" class="fa-solid fa-cart-arrow-down"></i>               
                    </div>
                    <div class="product-heart">
                        <i title="Xóa khỏi yêu thích" class="fa-solid fa-heart"></i>               
                    </div>   
                </div>
                <div class="tensanpham">
                    <a class="product-link" href="chitietsanpham.html?id=${heartItem.id}"><p>${heartItem.name}</p></a>
                </div>
                <div class="danhgia">
                    <i class="fa-solid fa-star"><span>${heartItem.evaluate}</span></i>
                </div>
                <div class="brand">
                    <p>NiKe</p>
                </div>
                <div class="giatien">
                    <p>${heartItem.price}</p>
                </div>
                <div class="buy-btn-sale">
                    <a class="product-link" href="muahang.html"><button>Mua ngay</button></a>
                </div>
            </div>
        </div>
        `
        container.innerHTML += productHTML
    })

}


const heartsIcon = document.querySelectorAll(".product-heart")

heartsIcon.forEach((deleteLike, index) => {
    deleteLike.addEventListener("click", function() {
        heartItems.splice(index, 1)
        localStorage.setItem("like", JSON.stringify(heartItems));
        location.reload()

    })

})


