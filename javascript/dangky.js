// Truy vấn các ô nhập liệu
const inputName = document.getElementById("name")
const inputPhoneNumber = document.getElementById("phone-number")
const inputEmail = document.getElementById("email")
const inputPwd = document.getElementById("pwd")
const inputPwdAgain = document.getElementById("pwd-again")

// Truy vấn nút đăng ký
const regBtn = document.getElementById("reg-btn")

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
var checkInfoPwd = false
var checkInfoPwdAgain = false

//Lấy mảng thông tin đăng nhập hoặc tạo mảng lưu thông tin tài khoản người dùng
const userArray = JSON.parse(localStorage.getItem("userLogin")) || [];


// Xét sự kiện nhập vào trường họ và tên
inputName.addEventListener("input" ,function(event) {

    if(inputName.value.length == 0) {
        notifi[0].textContent = ""
        checkInfoName = false
    }
    else if(!namePattern.test(inputName.value)) {
        notifi[0].textContent = "Tài khoản không bao gồm kí tự đặt biệt và khoảng trắng !"
        notifi[0].style.color = "red"
        checkInfoName = false

    }
    else if(inputName.value.length < 8) {
        notifi[0].textContent = "Độ dài phải trên 8 ký tự !"
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
        notifi[1].textContent = ""
        checkInfoPhoneNumber = false

    } 
    else if(!phoneNumberPattern.test(inputPhoneNumber.value) || inputPhoneNumber.value.length < 10) {
        notifi[1].textContent = "Số điện thoại không hợp lệ !"
        notifi[1].style.color = "red"
        checkInfoPhoneNumber = false
    }
    else {
        notifi[1].textContent = "Thông tin hợp lệ"
        notifi[1].style.color = "#00ce01"
        checkInfoPhoneNumber = true
    }
})


//Xét sự kiện nhập vào trường số điện thoại
inputEmail.addEventListener("input" ,function(event) {
    if(inputEmail.value.length == 0) {
        notifi[2].textContent = ""
        checkInfoEmail = false
    } 
    else if(!emailPattern.test(inputEmail.value)) {
        notifi[2].textContent = "Email không hợp lệ !"
        notifi[2].style.color = "red"
        checkInfoEmail = false
    }
    else {
        notifi[2].textContent = "Thông tin hợp lệ"
        notifi[2].style.color = "#00ce01"
        checkInfoEmail = true
    }
})


// Xét sự kiện nhập vào trường mật khẩu
inputPwd.addEventListener("input" ,function(event) {

    if(inputPwdAgain.value != '') {
        if(inputPwd.value != inputPwdAgain.value) {
            notifi[4].textContent = "Mật khẩu không trùng khớp"
            notifi[4].style.color = "red"
            checkInfoPwdAgain = false
        } else {
            notifi[4].textContent = "Thông tin hợp lệ"
            notifi[4].style.color = "#00ce01"
            checkInfoPwdAgain = true
        }
    }

    if(inputPwd.value.length == 0) {
        notifi[3].textContent = ""
        checkInfoPwd = false
    }
    else if(!namePattern.test(inputPwd.value)) {
        notifi[3].textContent = "Mật khẩu không bao gồm kí tự đặt biệt và khoảng trắng !"
        notifi[3].style.color = "red"
        checkInfoPwd = false
    }
    else if(inputPwd.value.length < 8) {
        notifi[3].textContent = "Độ dài phải trên 8 ký tự !"
        notifi[3].style.color = "red"
        checkInfoPwd = false
    }
    else {
        notifi[3].textContent = "Thông tin hợp lệ"
        notifi[3].style.color = "#00ce01"
        checkInfoPwd = true
    }
})

// Xét sự kiện nhập vào trường xác nhận mật khẩu
inputPwdAgain.addEventListener("input" ,function(event) {

    if(inputPwd.value != inputPwdAgain.value) {
        notifi[4].textContent = "Mật khẩu không trùng khớp"
        notifi[4].style.color = "red"
        checkInfoPwdAgain = false
    } else {
        notifi[4].textContent = "Thông tin hợp lệ"
        notifi[4].style.color = "#00ce01"
        checkInfoPwdAgain = true
    }
})

// Truy vấn con mắt xem mật khẩu
const eyeBtn = document.querySelectorAll(".fa-eye") 
console.log(eyeBtn)


// Tạo chức năng xem mật khẩu trong 1s
eyeBtn[0].addEventListener("click", function() {
    inputPwd.type = "text"
    setTimeout(() => {
        inputPwd.type = "password";
    }, 1000);
})

eyeBtn[1].addEventListener("click", function() {
    inputPwdAgain.type = "text"
    setTimeout(() => {
        inputPwdAgain.type = "password";
    }, 1000);
})

// Lưu lại thông tin đăng nhập người dùng
regBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if(checkInfoName && checkInfoPhoneNumber && checkInfoEmail && checkInfoPwd && checkInfoPwdAgain) {
        const inforUser = {
            user: inputName.value,
            phoneNumber: inputPhoneNumber.value,
            email: inputEmail.value,
            password: inputPwd.value
        }
        // userArray.forEach((user, index) => {
        //     if(user.user == inforUser.user) {

        //     }
        // });
        userArray.push(inforUser)
        // Đưa thông tin đăng nhập người dùng lên local Storage
        localStorage.setItem("userLogin", JSON.stringify(userArray))
        Swal.fire("Tạo tài khoản thành công", "", "success")

    } else {
        Swal.fire("Vui lòng kiểm tra lại thông tin", "", "error")
    }
})
