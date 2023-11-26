import { productsList } from "./data/products-all.js"


const cartsIcon = document.querySelectorAll(".product-cart")

// Lấy dữ liệu từ localStorage khi trang được tải hoặc tạo rỗng mảng
const cartItems = JSON.parse(localStorage.getItem("product")) || [];

// Thêm sự kiện click cho mỗi cartIcon
cartsIcon.forEach((cartIcon, index) => {
  cartIcon.addEventListener("click", function() {

    const existingProduct = cartItems.find(item => item.id === index);

    //Kiểm tra tồn tại của sản phẩm
    if (existingProduct) {
      // Thông báo cho người dùng sản phẩm đã có trong giỏ hàng
      Toastify({
        text: "Sản phẩm này đã có sẵn trong giỏ hàng",
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

    else {
      // Khởi tạo đối tượng lưu thông tin sản phẩm vừa nhấn
      const productData = {
        id: index,
        name: productsList[index].name,
        img: productsList[index].image,
        price: productsList[index].price,
        color: productsList[index].color_0
      };
      // Thêm dữ liệu mới vào mảng kết quả
      cartItems.push(productData);
      
      // Lưu mảng vào localStorage
      localStorage.setItem("product", JSON.stringify(cartItems));
      // Thông báo cho người dùng thêm thành công
      Toastify({
        text: "Chúc mừng bạn đã thêm sản phẩm vào giỏ hàng thành công.",
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
  });
});