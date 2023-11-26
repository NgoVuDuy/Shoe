import { productsList } from "./data/products-all.js"


const heartsIcon = document.querySelectorAll(".product-heart")

// Lấy dữ liệu từ localStorage khi trang được tải
const heartItems = JSON.parse(localStorage.getItem("like")) || [];



// Thêm sự kiện click cho mỗi cartIcon
heartsIcon.forEach((heartIcon, index) => {
  heartIcon.addEventListener("click", function() {

    const existingProduct = heartItems.find(item => item.id === index);

    if (existingProduct) {
      Toastify({
        text: "Sản phẩm này đã có sẵn trong yêu thích",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          "margin-top": "80px",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }

    else {
      const productData = {
        id: index,
        name: productsList[index].name,
        img: productsList[index].image,
        price: productsList[index].price,
        evaluate: productsList[index].evaluate
      };
      // Thêm dữ liệu mới vào mảng cũ
      heartItems.push(productData);
      
      // Lưu mảng vào localStorage
      localStorage.setItem("like", JSON.stringify(heartItems));
      Toastify({
        text: "Chúc mừng bạn đã thêm sản phẩm vào yêu thích thành công.",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          "margin-top": "80px",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    }
  });
});
