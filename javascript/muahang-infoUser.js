// Truy vấn các thẻ cần thiết để đổ dữ liệu mua hàng cho người dùng
const name_user = document.getElementById("buy-name")
const email_user = document.getElementById("buy-email")
const sdt_user = document.getElementById("buy-sdt")
const  address_user = document.getElementById("buy-address")

// Lấy mảng chứa thông tin người dùng
const userArray = JSON.parse(localStorage.getItem("userLogin"))

//
const nameUser = document.querySelector(".header-user-name")

var checkedLogin_BuyProduct = localStorage.getItem("checkLoginSuccess")

//Truy vấn ô mã giảm giá
const codeSale = document.getElementById("code-sale")

const buyBtn = document.querySelector(".buy-btn-order")
// Xử lý sự kiện đặt hàng
buyBtn.addEventListener("click", function() {
    if(checkedLogin_BuyProduct == "true") {
        if(codeSale.value.length > 0) {
            Swal.fire('Mã giảm giá không hợp lệ !', '', 'error')
        } else {
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

        }

    } else {
        Swal.fire('Vui lòng đăng nhập !', '', 'error')
    }
})
if(checkedLogin_BuyProduct == "true") {
    userArray.forEach(user => {
        if(user.user == nameUser.textContent) {
            name_user.value = user.user
            email_user.value = user.email
            sdt_user.value = user.phoneNumber
            address_user.value = "Ninh Kiều - Cần Thơ"
    
        }
    });

}
