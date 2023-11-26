

document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.querySelector(".fa-user")
  
    function checkAndRedirect() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      if (screenWidth >= 992 && screenWidth <= 1360) {
        // Nếu kích thước màn hình nằm trong khoảng từ 992px đến 1360px
        userIcon.addEventListener('click', function (event) {
          // Chuyển hướng đến URL mong muốn
            if(window.location.pathname == "/index.html") {
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
  