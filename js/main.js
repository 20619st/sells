// 初始化 AOS 動畫
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// 購物車功能
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    showNotification('商品已加入購物車！');
}

function updateCart() {
    // 這裡可以更新購物車介面
    console.log('購物車內容：', cart);
}

function showNotification(message) {
    // 創建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;

    document.body.appendChild(notification);

    // 3秒後移除通知
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 為所有加入購物車按鈕添加事件監聽
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const productName = card.querySelector('.card-title').textContent;
            const priceText = card.querySelector('.card-text strong').textContent;
            const price = parseInt(priceText.replace('NT$ ', '').replace(',', ''));
            addToCart(productName, price);
        });
    });

    // 平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 滾動時更新導航欄樣式
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-light');
    } else {
        navbar.classList.add('bg-light');
        navbar.classList.remove('bg-white');
    }
});