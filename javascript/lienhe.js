// Truy vấn các ô nhập liệu
const inputName = document.getElementById("name")
const inputPhoneNumber = document.getElementById("phone-number")
const inputEmail = document.getElementById("email")
const inputNoiDung = document.getElementById("noidung")

// Truy vấn nút đăng ký
const lienHeBtn = document.querySelector(".btn_lh")

// Truy vấn các thẻ thông báo
const notifi = document.querySelectorAll(".notifi")

// Biểu thức kiểm tra trường Họ tên và mật khẩu
const namePattern = /^[a-zA-Z0-9]+$/
// Biểu thức kiểm tra cho trường số điện thoại
const phoneNumberPattern = /^\d+$/
// Biểu thức kiểm tra email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Tạo biến kiểm tra các thông tin nhập
var checkInfoName = false
var checkInfoPhoneNumber = false
var checkInfoEmail = false
var checkInfoNoiDung = false


// Xét sự kiện nhập vào trường họ và tên
inputName.addEventListener("input" ,function(event) {

    if(inputName.value.length == 0) {
        notifi[0].textContent = ""
        checkInfoName = false
    }
    else if(inputName.value.length < 4 || inputName.value.length > 8) {
        notifi[0].textContent = "Độ dài phải từ 4 đến 8 ký tự !"
        notifi[0].style.color = "red"
        checkInfoName = false

    }
    else {
        notifi[0].textContent = "Thông tin hợp lệ"
        notifi[0].style.color = "#00ce01"
        checkInfoName = true

    }
})

//Xét sự kiện nhập vào trường số điện thoại
inputPhoneNumber.addEventListener("input" ,function(event) {
    if(inputPhoneNumber.value.length == 0) {
        notifi[2].textContent = ""
        checkInfoPhoneNumber = false

    } 
    else if(!phoneNumberPattern.test(inputPhoneNumber.value) || inputPhoneNumber.value.length < 10) {
        notifi[2].textContent = "Số điện thoại không hợp lệ !"
        notifi[2].style.color = "red"
        checkInfoPhoneNumber = false
    }
    else {
        notifi[2].textContent = "Thông tin hợp lệ"
        notifi[2].style.color = "#00ce01"
        checkInfoPhoneNumber = true
    }
})


//Xét sự kiện nhập vào trường số điện thoại
inputEmail.addEventListener("input" ,function(event) {
    if(inputEmail.value.length == 0) {
        notifi[1].textContent = ""
        checkInfoEmail = false
    } 
    else if(!emailPattern.test(inputEmail.value)) {
        notifi[1].textContent = "Email không hợp lệ !"
        notifi[1].style.color = "red"
        checkInfoEmail = false
    }
    else {
        notifi[1].textContent = "Thông tin hợp lệ"
        notifi[1].style.color = "#00ce01"
        checkInfoEmail = true
    }
})


// Xét sự kiện nhập vào trường mật khẩu
inputNoiDung.addEventListener("input" ,function(event) {

    if(inputNoiDung.value.length < 16) {
        notifi[3].textContent = "Nội dung phải lớp hơn 16 ký tự"
        notifi[3].style.color = "red"
        checkInfoNoiDung = false
    } else {
        notifi[3].textContent = "Thông tin hợp lệ"
        notifi[3].style.color = "#00ce01"
        checkInfoNoiDung = true
    }
})

// Lưu lại thông tin đăng nhập người dùng
lienHeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(checkInfoName && checkInfoPhoneNumber && checkInfoEmail && checkInfoNoiDung) {

        Swal.fire("Cảm ơn đã gửi liên hệ cho chúng tôi", "", "success").then((result) => {
            if(result.isConfirmed) {
                location.reload()
            }
        })

    } else {
        Swal.fire("Vui lòng kiểm tra lại thông tin", "", "error")
    }
})
