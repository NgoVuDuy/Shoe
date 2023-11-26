// Lấy mảng kết quả tìm kiếm từ bộ nhớ cục bộ
const results = JSON.parse(localStorage.getItem("searchResult"))

const container = document.querySelector(".container .row")
const title = document.querySelector("h2")

// Kiểm tra và đổ dữ liệu vào trang tìm kiếm
if(results != null) {
    if(results[1].length == 0) {
        title.textContent = `Không tìm thấy kết quả cho '${results[0]}' là:`
    }
    else {
        title.textContent = `Kết quả tìm kiếm cho '${results[0]}' là:`
        results[1].forEach((result, index) => {
            var searchHTML = `
                <div class="col-6 col-lg-3 col-md-4">
                    <div class="sanpham">
                        <div class="img_sanpham">
                            <a class="product-link" href="chitietsanpham.html?id=${result.id}">
                                <img src="${result.image}" alt="" width="100%" height="100%">
                            </a>
                            <div class="product-cart">
                                <i title="Thêm vào giỏ hàng" class="fa-solid fa-cart-arrow-down"></i>               
                            </div>   
                        </div>
                        <div class="tensanpham">
                            <a class="product-link" href="chitietsanpham.html?id=${result.id}"><p>${result.name}</p></a>
                        </div>
                        <div class="danhgia">
                            <i class="fa-solid fa-star"><span>${result.evaluate}</span></i>
                        </div>
                        <div class="brand">
                            <p>NiKe</p>
                        </div>
                        <div class="giatien">
                            <p>${result.price}</p>
                        </div>
                        <div class="buy-btn-sale">
                            <a class="product-link" href="muahang.html"><button>Mua ngay</button></a>
                        </div>
                    </div>
                </div>
            `
            container.innerHTML += searchHTML
        });
        
    }

}
