// 獲取所有觸發按鈕
const btns = document.querySelectorAll('.trigger-btn');
const overlay = document.querySelector('.popup-overlay');
const closeBtns = document.querySelectorAll('.close-btn');
let currentPopup = null;  // 追踪當前打開的彈窗

// 開啟彈窗函數
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    document.body.style.overflow = 'hidden';
    popup.classList.add('show');
    overlay.classList.add('show');
    currentPopup = popup;
}

// 關閉彈窗函數
function closePopup() {
    if (currentPopup) {
        document.body.style.overflow = '';
        currentPopup.classList.remove('show');
        overlay.classList.remove('show');
        currentPopup = null;
    }
}

// 為每個按鈕添加點擊事件
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const popupId = btn.dataset.popup;
        openPopup(popupId);
    });
});

// 關閉按鈕事件
closeBtns.forEach(btn => {
    btn.addEventListener('click', closePopup);
});

// 點擊遮罩層關閉
overlay.addEventListener('click', closePopup);

// ESC 鍵關閉
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePopup();
});

// 防止彈窗內點擊穿透到背景
document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});