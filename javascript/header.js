const formSearch = document.querySelector(".form-search")
const glasses = document.querySelector(".fa-magnifying-glass")

const user = document.querySelector(".fa-user")
const ctn = document.querySelector(".ctn")

const icons = document.getElementById("icons")

const barIcon = document.getElementById("bars")
const sidebar = document.getElementById("main")

const email = document.querySelector(".footer-send-mail form") 

const dropdown_form = document.getElementById("dropDw")

const logOutBtn = document.querySelectorAll(".log-out")

const logInBlock = document.querySelector(".log-in-container")
const logOutBlock = document.querySelector(".log-out-container")

const  userName = document.querySelectorAll(".header-user-name")

var checkedLogin = localStorage.getItem("checkLoginSuccess")

const userNameValue = localStorage.getItem("user-name")

console.log(userNameValue)

if(checkedLogin != null) {
    if(checkedLogin == "true") {
        user.style.display = "none";
        if(dropdown_form != null) {

            dropdown_form.style.display = "inline-block";
            if(userNameValue != null) {
                if(userName != null)
                userName[0].textContent = userNameValue
                userName[1].textContent = userNameValue
            }
        }
        if(logInBlock != null && logOutBlock != null) {
            logInBlock.style.display = "none"
            logOutBlock.style.display = "block"

        }
    }
}
if(logOutBtn != null && logOutBtn.length != 0) {

    logOutBtn[0].addEventListener("click", function() {
        Swal.fire({
            title: 'Bạn có chắc muốn đăng xuất tài khoản không ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Có',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Đăng xuất thành công', '', 'success').then((result) => {
                    if(result.isConfirmed) {
                        checkedLogin = false
                        localStorage.setItem("checkLoginSuccess", checkedLogin)
                        location.reload()
                    }

                })
            } else if (result.isDenied) {
              Swal.fire('Đăng xuất thất bại !', '', 'error')
            }
        })
    })
    
}
if(logOutBtn[1] != null && logOutBtn.length != 0) {
    
    logOutBtn[1].addEventListener("click", function() {
        Swal.fire({
            title: 'Bạn có chắc muốn đăng xuất tài khoản không ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Có',
            denyButtonText: `Không`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Đăng xuất thành công', '', 'success').then((result) => {
                    if(result.isConfirmed) {
                        // logInBlock.style.display = "block"
                        // logOutBlock.style.display = "none"
                        
                        // location.reload()
                        checkedLogin = false
                        localStorage.setItem("checkLoginSuccess", checkedLogin)
                        location.reload()
                    }

                })
            } else if (result.isDenied) {
              Swal.fire('Đăng xuất thất bại !', '', 'error')
            }
        })
    })
}
email.addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire('Thông tin đã được ghi lại', 'Chúng tôi sẽ thông báo ưu đãi sớm nhất cho bạn', 'success').then((result) => {
        if(result.isConfirmed) {
            location.reload()
        }
    })
})


var checkClick = false

let count = 0
let countSearch = 0

barIcon.addEventListener("click", function() {
    if(count == 0) {
        sidebar.classList.remove("modal")
        count = 1
    } else 
    if(count == 1){
        sidebar.classList.add("modal")
        count = 0
    }
})

glasses.addEventListener("click", function() {
    if(countSearch == 0) {
        formSearch.classList.remove("modal")

        if(checkClick) {
            ctn.classList.add("modal");
            icons.classList.remove("margin");
            user.classList.remove("chocol_color");
            checkClick = false
        }
        countSearch = 1
    } else 
    if(countSearch == 1){
        formSearch.classList.add("modal")
        countSearch = 0
    }
})

user.addEventListener("click", function() {
    if(!checkClick) {
        ctn.classList.remove("modal");
        icons.classList.add("margin");
        user.classList.add("chocol_color");

        if(countSearch == 1){
            formSearch.classList.add("modal")
            countSearch = 0
        }
        checkClick = true
    } else if(checkClick) {
        ctn.classList.add("modal");
        icons.classList.remove("margin");
        user.classList.remove("chocol_color");
        checkClick = false
    }
})
// document.addEventListener("click", function(event) {
//     if (!formSearch.contains(event.target) && event.target !== glasses) {
//         formSearch.classList.add("modal");

//         glasses.classList.remove("chocol_color")
//     }
//     if (!ctn.contains(event.target) && event.target !== user) {
//         ctn.classList.add("modal");

//         icons.classList.remove("margin");

//         user.classList.remove("chocol_color");
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
  
    function checkAndRedirect() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      if (screenWidth >= 992 && screenWidth <= 1360) {
        // Nếu kích thước màn hình nằm trong khoảng từ 992px đến 1360px
        user.addEventListener('click', function (event) {
          // Chuyển hướng đến URL mong muốn
            if(window.location.pathname == "/") {

                window.location.href = "./html/dangnhap.html"

            }else if(window.location.pathname == "/index.html") {

                window.location.href = "./html/dangnhap.html"

            }else if(window.location.pathname == "/Shoe/") {

                window.location.href = "./html/dangnhap.html"

            }else if(window.location.pathname == "/Shoe/index.html") {

                window.location.href = "./html/dangnhap.html"

            } else {
                
                window.location.href = "dangnhap.html"
            }
        });
      }
    }
  
    // Gọi hàm kiểm tra và chuyển hướng khi trang tải
    checkAndRedirect();
  
    // Gọi lại hàm khi kích thước màn hình thay đổi
    window.addEventListener('resize', checkAndRedirect);
});

console.log(window.location.pathname)

//Tạo chức năng xóa tài 
const deleteAccount = document.querySelectorAll(".delete-user")

const usersAr = JSON.parse(localStorage.getItem("userLogin"))

if(deleteAccount != null) {
    deleteAccount.forEach((deleteBtn, index) =>{
        deleteBtn.addEventListener("click", function(event) {
            if(usersAr != null && usersAr.length != 0)
            usersAr.forEach((user, index) => {
                if(user.user == userNameValue) {
                    Swal.fire({
                        title: 'Bạn có chắc muốn xóa tài khoản không ?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Có',
                        denyButtonText: `Không`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            Swal.fire('Xóa tài khoản thành công', '', 'success').then((result) => {
                                if(result.isConfirmed) {
                                    usersAr.splice(index, 1)
                                    localStorage.setItem("userLogin", JSON.stringify(usersAr))

                                    checkedLogin = false
                                    localStorage.setItem("checkLoginSuccess", checkedLogin)
                                    location.reload()
                                    // logInBlock.style.display = "block"
                                    // logOutBlock.style.display = "none"
                                    
                                    // location.reload()
                                }
            
                            })
                        } else if (result.isDenied) {
                          Swal.fire('Đăng xuất thất bại !', '', 'error')
                        }
                    })
                }
            })
        })
    })
}
