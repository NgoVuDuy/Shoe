var thanhtoanArray = JSON.parse(localStorage.getItem("total"))

const containerProduct = document.querySelector(".buy-container")
const totalProduct = document.querySelectorAll(".buy-total-value")

console.log(thanhtoanArray)
//Đổ dữ liệu phần giỏ hàng
if(thanhtoanArray != null) {
    totalProduct[0].textContent = thanhtoanArray[0]
    totalProduct[1].textContent = thanhtoanArray[0]

    thanhtoanArray.forEach((product, index) => {
        if(index > 0) {
            var productHTML = `
            <div class= "row mt-4">
                <div class="col-12 col-lg-6 col-md-6 col-sm-6 buy-flex">
                    <img src="${product.img}" alt="" width="20%">
                    <p>${product.name}</p>
                
                </div>
                <div class="col-12 col-lg-2 col-md-2 col-sm-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none d-sm-none"><b>Đơn giá: </b></span>
                    <p>${product.productCore}</p>
                </div>
                <div class="col-12 col-lg-1 col-md-1 col-sm-1 cart-flex"> 
                    <span class= "d-block d-lg-none d-md-none d-sm-none"><b>Số lượng: </b></span>
                    <p>${product.sl}</p>
                </div>
                <div class="col-12 col-lg-2 col-md-2 col-sm-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none d-sm-none"><b>Màu sắc: </b></span>
                    <p>${product.color}</p>
                </div>
                <div class="col-12 col-lg-1 col-md-1 col-sm-1 cart-flex">
                    <span class= "d-block d-lg-none d-md-none d-sm-none"><b>Size: </b></span>
                    <p>39</p>
                </div>
            
            
            </div>
            
            `
            containerProduct.innerHTML += productHTML
    
        }
    })
}
// const buyBtn = document.querySelector(".buy-btn-order")
// // Xử lý sự kiện đặt hàng
// buyBtn.addEventListener("click", function() {
//     Swal.fire({
//         title: 'Bạn có chắc muốn đặt hàng không ?',
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: 'Có',
//         denyButtonText: `Không`,
//       }).then((result) => {
//         /* Read more about isConfirmed, isDenied below */
//         if (result.isConfirmed) {
//             Swal.fire('Đặt hàng thành công', '', 'success').then((result) => {
//                 if(result.isConfirmed)
//                 localStorage.removeItem("total")
//                 // location.reload()
//                 window.location.href ="../index.html"
//             })
//         } else if (result.isDenied) {
//           Swal.fire('Đặt hàng thất bại !', '', 'error')
//         }
//     })
// })