// 初始化 AOS 動畫
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // 初始化分類標籤
    const triggerTabList = document.querySelectorAll('#productTabs button');
    triggerTabList.forEach(triggerEl => {
        triggerEl.addEventListener('click', function(event) {
            event.preventDefault();
            const clickedTab = this;
            
            // 移除所有標籤的 active 類別
            triggerTabList.forEach(tab => tab.classList.remove('active'));
            
            // 添加 active 類別到被點擊的標籤
            clickedTab.classList.add('active');
        });
    });
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
    // TODO: 實作購物車介面更新
}

function showNotification(message) {
    // 創建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2ecc71;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 觸發動畫
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // 3秒後移除通知
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(50px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 為所有加入購物車按鈕添加事件監聽
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const productName = card.querySelector('.card-title').textContent;
            const priceText = card.querySelector('.card-text strong').textContent;
            const price = parseInt(priceText.replace('NT$ ', '').replace(',', ''));
            addToCart(productName, price);
            
            // 添加點擊動畫效果
            button.classList.add('clicked');
            setTimeout(() => button.classList.remove('clicked'), 200);
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
        navbar.classList.add('bg-white', 'navbar-light');
        navbar.classList.remove('bg-transparent', 'navbar-dark');
    } else {
        navbar.classList.add('bg-transparent', 'navbar-dark');
        navbar.classList.remove('bg-white', 'navbar-light');
    }
});