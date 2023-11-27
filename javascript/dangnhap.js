// Lấy mảng chứa thông tin người dùng
const userArray = JSON.parse(localStorage.getItem("userLogin"))

//Truy vấn các ô nhập liệu
const inputNameLogin = document.getElementById("name-login")
const inputPwdLogin = document.getElementById("pwd-login")

//Truy vấn icon user
// const user_icon = window.opener.document.querySelector(".fa-user")
// const dropdown_form = window.opener.document.getElementById("dropDw")

// Truy vấn nút đăng nhập
const loginBtn = document.getElementById("btn-login")
// Tạo biến kiểm tra đăng nhập
var checkLogin = false

loginBtn.addEventListener("click", function(event) {
    event.preventDefault()
    if(userArray != null) {
        userArray.forEach((user, index) => {
            if(inputNameLogin.value == user.user && inputPwdLogin.value == user.password) {
                checkLogin = true
            } 
        });
        if(checkLogin) {
            localStorage.setItem("checkLoginSuccess", checkLogin)
            localStorage.setItem("user-name", inputNameLogin.value)

            window.location.href = "../index.html"
        } else {
            Swal.fire("Tài khoản hoặc mật khẩu không hợp lệ !", "", "error")
        }
    
    }
})

console.log(userArray)