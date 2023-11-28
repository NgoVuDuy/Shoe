const heartItems = JSON.parse(localStorage.getItem("like"))

const container = document.querySelector(".container .row")

const clearLikeProduct = document.querySelector(".container-fluid .row .col-lg-2 button")

console.log(heartItems)

clearLikeProduct.addEventListener("click", function() {
    Swal.fire({
        title: "Are you sure?",
        text: "Bạn có chắc muốn xóa toàn bộ sản phẩm yêu thích",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
  
            localStorage.removeItem("like")

          Swal.fire({
            title: "Deleted!",
            text: "Bạn đã xóa thành công",
            icon: "success"
          }).then(() => {
                // Reload trang sau khi xác nhận xóa
                location.reload();
            });
        }
    });
})


console.log(heartItems)
// Đổ dữ liệu các sản phẩm ra trang yêu thích
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
                <div class="brand-sale">
                    <p>NiKe</p>
                </div>
                <div class="giatien">
                    <p>${heartItem.price}</p>
                </div>
                <div class="buy-btn-sale">
                    <a class="product-link" href="muahang.html?id=${heartItem.id}"><button>Mua ngay</button></a>
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

const buyLike = document.querySelectorAll(".buy-btn-sale .product-link")

buyLike.forEach(buyLikeBtn => {
    console.log(buyLike)
    buyLikeBtn.addEventListener("click", function() {
        localStorage.removeItem("total")
    })
}) 


