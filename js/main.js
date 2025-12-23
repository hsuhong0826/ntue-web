// ============================================
// 全域函式
// ============================================

// 格式化日期
function formatDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
    const weekday = weekdays[date.getDay()];

    return `${year} 年 ${month} 月 ${day} 日 星期${weekday}`;
}

// 數字動畫效果
function animateNumber(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
        if (suffix && element.nextElementSibling) {
            element.nextElementSibling.textContent = suffix;
        }
    }, 16);
}

// ============================================
// 登入表單處理
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // 簡單的表單驗證
            if (username && password) {
                // 儲存使用者名稱
                localStorage.setItem('studentName', username);

                // 添加載入動畫
                const submitBtn = loginForm.querySelector('.btn-primary');
                submitBtn.textContent = '登入中...';
                submitBtn.disabled = true;

                // 模擬登入延遲
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 800);
            }
        });
    }

    // ============================================
    // 儀表板頁面初始化
    // ============================================
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        currentDateElement.textContent = formatDate();
    }

    // 顯示學生姓名（測試環境統一使用固定名字）
    const studentNameElement = document.getElementById('studentName');
    if (studentNameElement) {
        // 測試環境固定顯示：王小明
        studentNameElement.textContent = '王小明';
    }

    // 數字動畫（已經在 HTML 中設定初始值，這裡只做動畫效果）
    const clickCountElement = document.getElementById('clickCount');
    const studyTimeElement = document.getElementById('studyTime');
    const completionElement = document.getElementById('completion');
    const completedUnitsElement = document.getElementById('completedUnits');

    if (clickCountElement) {
        const finalValue = parseInt(clickCountElement.textContent);
        clickCountElement.textContent = '0';
        setTimeout(() => animateNumber(clickCountElement, 0, finalValue, 1500), 300);
    }

    if (studyTimeElement) {
        const finalValue = parseFloat(studyTimeElement.textContent);
        studyTimeElement.textContent = '0';
        setTimeout(() => {
            const range = finalValue;
            const increment = range / (1500 / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalValue) {
                    current = finalValue;
                    clearInterval(timer);
                }
                studyTimeElement.textContent = current.toFixed(1);
            }, 16);
        }, 400);
    }

    if (completionElement) {
        const finalValue = parseInt(completionElement.textContent);
        completionElement.textContent = '0';
        setTimeout(() => animateNumber(completionElement, 0, finalValue, 1500), 500);
    }

    if (completedUnitsElement) {
        const finalValue = parseInt(completedUnitsElement.textContent);
        completedUnitsElement.textContent = '0';
        setTimeout(() => animateNumber(completedUnitsElement, 0, finalValue, 1200), 600);
    }
});

// ============================================
// 進度條動畫
// ============================================
window.addEventListener('load', function () {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300 + (index * 50));
    });
});
