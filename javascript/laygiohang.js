
const cartContainer = document.querySelector(".cart-container")
const clearBtn = document.querySelector(".cart-clear-all")
const cartItems = JSON.parse(localStorage.getItem("product"))

const productCartArray = JSON.parse(localStorage.getItem("chuyen-den-gio-hang"))

console.log(productCartArray)

const total = document.querySelector(".total")


const thanhtoanArray = []
// Đổ dữ liệu vào giỏ hàng lấy từ trang chủ và sản phẩm
if(cartItems != null && cartItems.length != 0) {
    cartItems.forEach(cartItem => {
        const productHTML = `
            <div class="row mt-2">
                <div class="col-lg-3 col-md-6">
                    <div class="cart-product">
                        <img src="${cartItem.img}" alt="" width="25%">
                        <p>${cartItem.name}</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Đơn giá: </b></span>
                    <p>${cartItem.price}</p>
                </div>
                <div class="col-lg-2 col-md-2">
                <div class="container-number">
                    <span class= "d-block d-lg-none d-md-none"><b>Số lượng: <input type="number" value="1" min="1" max="5"></b></span>
                    <input type="number" value="1" min="1" max="5">
                </div>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Màu sắc: </b></span>
                    <p>${cartItem.color}</p>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Tổng tiền: </b></span>
                    <p class="sum">${cartItem.price}</p>
                </div>
                <div class="col-lg-1 col-md-12">
                    <button>Xóa</button>
                </div>
            </div>
            <hr>
        `;
        cartContainer.innerHTML += productHTML;
    });
} else {
    total.style.display = "none"
}

// Đổ dữ liệu vào giỏ hàng lấy từ chi tiết sản phẩm
if(productCartArray != null && productCartArray.length != 0) {
    productCartArray.forEach(cartItem => {
        const productHTML = `
            <div class="row mt-2">
                <div class="col-lg-3 col-md-6">
                    <div class="cart-product">
                        <img src="${cartItem.img}" alt="" width="25%">
                        <p>${cartItem.name}</p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Đơn giá: </b></span>
                    <p>${cartItem.price}</p>
                </div>
                <div class="col-lg-2 col-md-2">
                    <div class="container-number">
                        <span class= "d-block d-lg-none d-md-none"><b>Số lượng: <input type="number" value="1" min="1" max="5"></b></span>
                        <input type="number" value="1" min="1" max="5">
                    </div>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Màu sắc: </b></span>
                    <p>${cartItem.color}</p>
                </div>
                <div class="col-lg-2 col-md-2 cart-flex">
                    <span class= "d-block d-lg-none d-md-none"><b>Tổng tiền: </b></span>
                    <p class="sum">${cartItem.price}</p>
                </div>
                <div class="col-lg-1 col-md-12">
                    <button>Xóa</button>
                </div>
            </div>
            <hr>
        `;
        cartContainer.innerHTML += productHTML;
    });
} else {
    total.style.display = "none"
}
const inputNum = document.querySelectorAll(".mt-2 .col-lg-2 input")
const sum = document.querySelectorAll(".sum")

var sumDefault = 0.0
sum.forEach((sumItems, index) => {
    sumDefault += parseFloat(sumItems.textContent)
    // console.log(sumItems.textContent)
})

var format = sumDefault.toFixed(6).slice(0, -3) + "." + sumDefault.toFixed(6).slice(-3) + " VND"
total.textContent = format



// Xử lý lại số tiền khi người dùng thay đổi số lượng sản phẩm
inputNum.forEach((input, index) => {
    input.addEventListener('input', function(event) {
        var sumToFloat = 0.0
        if(cartItems[index].price.length > 11) {
            var sum_1 = (parseFloat(event.target.value) * parseFloat(cartItems[index].price.replace(/[^\d.]/g, ''))).toFixed(6);

            let formatStr = sum_1.toString().slice(0, -3) + "." + sum_1.toString().slice(-3) + " VND";
            sum[index].textContent = formatStr

        } else {
            var sum_1 = (parseFloat(event.target.value) * parseFloat(cartItems[index].price.replace(/[^\d.]/g, ''))).toFixed(3);
            let formatStr = sum_1.toString().slice(0, 1) + "." + sum_1.toString().slice(1) + " VND";
            sum[index].textContent = formatStr
        }
        sum.forEach((sumItems, index) => {
            sumToFloat += parseFloat(sumItems.textContent)
        })
        var format = sumToFloat.toFixed(6).slice(0, -3) + "." + sumToFloat.toFixed(6).slice(-3) + " VND"
        total.textContent = format
        if(event.target.value == 5) {
            Toastify({
                text: "Bạn đã đạt đến giới hạn cho phép mua hàng của chúng tôi",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", 
                position: "right",
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                  "margin-top": "80px",
                },
                onClick: function(){}
            }).showToast();
        }
    })
})

// Xử lý xóa toàn bộ sản phẩm trong giỏ hàng
clearBtn.addEventListener("click", function() {
    if(cartItems === null || cartItems.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Bạn chưa có sản phẩm nào trong giỏ hàng",
            footer: '<a href="sanpham.html">Bạn có muốn xem sản phẩm?</a>'
          });
    } else {
        Swal.fire({
            title: "Are you sure?",
            text: "Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                //Xóa toàn bộ sản phẩm trong giỏ hàng
                localStorage.removeItem("product")
                localStorage.removeItem("chuyen-den-gio-hang")

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

    }
})

// Xử lý xóa từng sản phẩm
const deleteProduct = document.querySelectorAll(".mt-2 .col-lg-1 button")

console.log(deleteProduct)

deleteProduct.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", function() {
        if(cartItems != null || cartItems.length != 0) {
            cartItems.splice(index, 1)
        }
        if(productCartArray != null || productCartArray.length != 0) {
            productCartArray.splice(index, 1)
        }
        localStorage.setItem("product", JSON.stringify(cartItems));
        localStorage.setItem("chuyen-den-gio-hang", JSON.stringify(productCartArray));
        location.reload()


    })
})

// Đưa mảng chứa thông tin các sản phẩm lên bộ nhớ cục bộ
const ThanhToanBtn = document.querySelector(".thanhtoan")
ThanhToanBtn.addEventListener("click", function(event) {
    thanhtoanArray.push(total.textContent)
    if(cartItems != null && cartItems.length != 0) {
        localStorage.removeItem("chitietsanpham")
        cartItems.forEach((cartItem, index) => {
            const valueProduct = {
                id: index,
                name: cartItem.name,
                img: cartItem.img,
                sl: inputNum[index].value,
                productCore: sum[index].textContent,
            }
            thanhtoanArray.push(valueProduct)
            console.log(thanhtoanArray)
    
        })
    } 
    if(productCartArray != null && productCartArray .length != 0) {
        localStorage.removeItem("chitietsanpham")
        // thanhtoanArray.push(total.textContent)
        productCartArray.forEach((cartItem, index) => {
            const valueProduct = {
                id: index,
                name: cartItem.name,
                img: cartItem.img,
                sl: inputNum[index].value,
                productCore: sum[index].textContent,
            }
            thanhtoanArray.push(valueProduct)
            console.log(thanhtoanArray)
    
        })
    }

    localStorage.setItem("total", JSON.stringify(thanhtoanArray))

    if((cartItems == null || cartItems.length == 0) && (productCartArray == null || productCartArray .length == 0)) {
        event.preventDefault()
    }

})