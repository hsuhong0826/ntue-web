// ============================================
// 課程頁面初始化
// ============================================

// 課程資料庫（模擬每個課程的學習數據）
const courseData = {
    '1': { // 10000以內的數
        name: '10000以內的數',
        studyTime: 5.2,
        accuracy: 94,
        suggestion: '太棒了！您已完全掌握10000以內數的概念，包括數的大小比較、位值概念都理解得很透徹。可以繼續學習下一個單元！'
    },
    '2': { // 小數
        name: '小數',
        studyTime: 4.8,
        accuracy: 91,
        suggestion: '您在小數的學習上表現優異！對於小數的讀法、寫法和大小比較都已掌握。建議繼續深入學習小數的應用。'
    },
    '3': { // 時間
        name: '時間',
        studyTime: 3.5,
        accuracy: 96,
        suggestion: '完美！您對時間的換算、時刻與時間的計算都非常熟練。這個單元的學習成果非常出色！'
    },
    '4': { // 長度
        name: '長度',
        studyTime: 4.1,
        accuracy: 93,
        suggestion: '您已完全理解長度的測量與單位換算。對於公分、公尺、公里的關係掌握得很好，繼續保持！'
    },
    '5': { // 容量
        name: '容量',
        studyTime: 3.8,
        accuracy: 95,
        suggestion: '太好了！您對容量單位（公升、毫升）的認識和換算都很清楚，實際應用題目也解得很棒！'
    },
    '6': { // 重量
        name: '重量',
        studyTime: 3.2,
        accuracy: 92,
        suggestion: '您對重量單位的學習表現很好！公克、公斤、公噸的換算都很熟練，應用能力也不錯。'
    },
    '7': { // 分數
        name: '分數',
        studyTime: 6.5,
        accuracy: 89,
        suggestion: '分數概念學習完成！您對分數的意義、比較、加減運算都有不錯的理解。這是很重要的數學基礎！'
    },
    '8': { // 角的認識與分類
        name: '角的認識與分類',
        studyTime: 2.8,
        accuracy: 75,
        suggestion: '您正在學習角的概念，進度不錯！建議多練習角的分類（銳角、直角、鈍角），並利用量角器實際測量加深印象。'
    },
    '9': { // 圓
        name: '圓',
        studyTime: 2.5,
        accuracy: 72,
        suggestion: '圓的學習需要多加練習。建議先熟悉圓心、半徑、直徑等基本概念，再練習圓周長和面積的計算。可以多使用圓規實際操作。'
    },
    '10': { // 找規律
        name: '找規律',
        studyTime: 0,
        accuracy: 0,
        suggestion: '找規律是培養數學思維的重要單元！建議您先完成前面的基礎單元後再來學習。學習時要仔細觀察數字或圖形的變化模式。'
    },
    '11': { // 乘除關係與應用
        name: '乘除關係與應用',
        studyTime: 0,
        accuracy: 0,
        suggestion: '這個單元會幫助您理解乘法和除法的關係。建議先確實掌握乘法和除法的基本運算，再來學習它們之間的關係會更容易理解。'
    },
    '12': { // 兩步驟問題解決
        name: '兩步驟問題解決',
        studyTime: 0,
        accuracy: 0,
        suggestion: '兩步驟問題需要綜合運用多種運算。建議您先完成基礎單元，培養解題思維後再來挑戰。解題時要仔細分析題意，找出先後順序。'
    },
    '13': { // 被乘數／乘數／被除數／除數未知
        name: '被乘數／乘數／被除數／除數未知',
        studyTime: 0,
        accuracy: 0,
        suggestion: '這是代數思維的入門！建議先熟練基本的乘除運算，理解運算的意義後，再來學習未知數的概念。可以從簡單的填空題開始練習。'
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
