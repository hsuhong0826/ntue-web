// ============================================
// 課程頁面初始化
// ============================================

// 課程資料庫（模擬每個課程的學習數據）
const courseData = {
    '1': { // 分數概念
        name: '分數概念',
        studyTime: 3.2,
        accuracy: 95,
        suggestion: '太棒了！您已完全掌握分數概念，理解非常透徹。建議您可以開始學習下一個單元「分數比較」，繼續保持優秀的學習表現！'
    },
    '2': { // 分數比較
        name: '分數比較',
        studyTime: 2.8,
        accuracy: 92,
        suggestion: '您在分數比較的學習上表現優異！對於同分母與異分母的比較方法都已掌握。建議繼續深入學習「分數加減」，這會讓您對分數的理解更上一層樓。'
    },
    '3': { // 分數加減
        name: '分數加減',
        studyTime: 4.5,
        accuracy: 78,
        suggestion: '您正在努力學習分數加減，進度不錯！建議多練習同分母分數的加減運算，熟練後再進階到異分母。系統發現您較適合透過動態教材學習，可以多觀看教學動畫。'
    },
    '4': { // 同分母分數加減
        name: '同分母分數加減',
        studyTime: 3.1,
        accuracy: 71,
        suggestion: '您在同分母分數加減的學習上需要多加練習。建議先複習分數概念，確保對分子分母的意義完全理解後，再進行計算練習。可以從簡單的題目開始，逐步增加難度。'
    },
    '5': { // 異分母分數加減
        name: '異分母分數加減',
        studyTime: 0,
        accuracy: 0,
        suggestion: '這是一個重要的單元！在開始學習前，建議您先確實掌握「同分母分數加減」和「通分」的概念。可以先觀看教學影片了解基本原理，再透過互動練習加深印象。'
    },
    '6': { // 分數乘法
        name: '分數乘法',
        studyTime: 0,
        accuracy: 0,
        suggestion: '分數乘法是新的概念！建議您先學習前面的加減單元，打好基礎後再來學習乘法會更容易理解。學習時可以結合生活實例，例如「半塊披薩的一半是多少」來幫助理解。'
    },
    '7': { // 分數除法
        name: '分數除法',
        studyTime: 0,
        accuracy: 0,
        suggestion: '分數除法需要先理解分數乘法的概念。建議按照單元順序循序漸進學習，這樣能建立完整的知識架構。學習時要特別注意「倒數」的概念，這是理解分數除法的關鍵。'
    },
    '8': { // 分數應用題
        name: '分數應用題',
        studyTime: 0,
        accuracy: 0,
        suggestion: '應用題是綜合運用所學知識的好機會！建議您先完成前面的基礎單元，再來挑戰應用題。解題時要仔細閱讀題目，找出關鍵資訊，並思考要用哪種運算方式。'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // 從 URL 參數取得課程資訊
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id') || '1';
    const courseName = urlParams.get('name') || '分數概念';
    const courseProgress = urlParams.get('progress') || '0';

    // 從資料庫取得該課程的詳細資訊
    const currentCourse = courseData[courseId] || courseData['1'];

    // 更新頁面標題
    const courseTitleElement = document.getElementById('courseTitle');
    if (courseTitleElement) {
        courseTitleElement.textContent = courseName;
    }

    // 更新進度資訊
    const courseProgressElement = document.getElementById('courseProgress');
    if (courseProgressElement) {
        courseProgressElement.textContent = courseProgress + '% 完成';
    }

    // 更新狀態標籤
    const courseStatusElement = document.getElementById('courseStatus');
    if (courseStatusElement) {
        const progress = parseInt(courseProgress);
        if (progress === 100) {
            courseStatusElement.textContent = '已完成';
            courseStatusElement.className = 'course-status completed';
        } else if (progress > 0) {
            courseStatusElement.textContent = '進行中';
            courseStatusElement.className = 'course-status in-progress';
        } else {
            courseStatusElement.textContent = '尚未開始';
            courseStatusElement.className = 'course-status not-started';
        }
    }

    // 更新學習時間
    const studyTimeElement = document.getElementById('courseStudyTime');
    if (studyTimeElement) {
        studyTimeElement.textContent = currentCourse.studyTime + ' 小時';
    }

    // 更新答題正確率
    const accuracyElement = document.getElementById('courseAccuracy');
    if (accuracyElement) {
        if (currentCourse.accuracy === 0) {
            accuracyElement.textContent = '尚無數據';
        } else {
            accuracyElement.textContent = currentCourse.accuracy + '%';
        }
    }

    // 更新個人化學習建議
    const suggestionElement = document.getElementById('suggestionText');
    if (suggestionElement) {
        suggestionElement.textContent = currentCourse.suggestion;
    }

    // 為所有「查看」按鈕添加點擊事件（包含教材和練習題）
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function () {
            const materialInfo = this.previousElementSibling;
            const title = materialInfo.querySelector('h4').textContent;
            alert(`正在開啟：${title}\n\n（這是展示用頁面，實際系統中會開啟相應的內容）`);
        });
    });

    // 儲存筆記按鈕
    const saveNotesButton = document.querySelector('.course-notes .btn-secondary');
    if (saveNotesButton) {
        saveNotesButton.addEventListener('click', function () {
            const notesInput = document.querySelector('.notes-input');
            if (notesInput && notesInput.value.trim()) {
                alert('筆記已儲存！\n\n（這是展示用頁面，實際系統中會儲存到資料庫）');
            } else {
                alert('請先輸入筆記內容');
            }
        });
    }
});
