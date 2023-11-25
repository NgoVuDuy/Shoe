// Tính thời gian kết thúc là sau 12 tiếng (12 giờ)
const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 12);

// Hàm cập nhật đồng hồ đếm ngược
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Hiển thị thời gian trên giao diện
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    // Kiểm tra nếu thời gian kết thúc
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Hết giờ!';
    }
}

// Gọi hàm cập nhật mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);

// Gọi hàm cập nhật ngay khi trang web được tải
updateCountdown();

