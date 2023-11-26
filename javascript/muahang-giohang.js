var thanhtoanArray = JSON.parse(localStorage.getItem("total"))

const containerProduct = document.querySelector(".buy-container")
const totalProduct = document.querySelectorAll(".buy-total-value")

if(thanhtoanArray != null) {
    totalProduct[0].textContent = thanhtoanArray[0]
    totalProduct[1].textContent = thanhtoanArray[0]

    thanhtoanArray.forEach((product, index) => {
        if(index > 0) {
            var productHTML = `
            <div class="buy-product">
                <img src="${product.img}" alt="" width="20%">
                <p>${product.name}</p>
                <p>${product.productCore}</p>
                <p>SL: ${product.sl}</p>
            </div>
            
            `
            containerProduct.innerHTML += productHTML
    
        }
    })
}
const buyBtn = document.querySelector(".buy-btn-order")

buyBtn.addEventListener("click", function() {
    Swal.fire({
        title: 'Bạn có chắc muốn đặt hàng không ?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Có',
        denyButtonText: `Không`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Đặt hàng thành công', '', 'success').then((result) => {
                if(result.isConfirmed)
                localStorage.removeItem("total")
                // location.reload()
                window.location.href ="../index.html"
            })
        } else if (result.isDenied) {
          Swal.fire('Đặt hàng thất bại !', '', 'error')
        }
    })
})