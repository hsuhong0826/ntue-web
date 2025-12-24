// ============================================
// 情境挑戰頁面初始化
// ============================================

// 情境資料庫
const scenarioData = {
    '1': {
        name: '早自習時間',
        theme: '學校的一天',
        difficulty: '簡單',
        story: '小美每天都很期待到學校學習！今天早上，她看了看時鐘，現在是早上7:30，媽媽送她到校門口。小美記得老師說過，第一節課是8:00開始。她想知道，從現在到上課還有多少時間呢？',
        challenge: '請計算：從7:30到8:00，中間經過了多少分鐘？',
        hint: '可以用時鐘圖來幫助思考，或是想想從30分到60分（也就是下一個整點）要加多少分鐘。',
        answer: '30',
        unit: '分鐘',
        topics: ['時間', '加法', '時間計算'],
        suggestion: '很棒！你已經掌握了時間的計算方式。時間問題在日常生活中很常見，繼續多練習類似的題目，你會更熟練的！',
        wrongSuggestion: '別擔心！時間計算需要多練習。建議你可以用時鐘或畫圖的方式來理解，從起始時間數到結束時間，數數看經過了多少分鐘。'
    },
    '2': {
        name: '午餐分配',
        theme: '學校的一天',
        difficulty: '適中',
        story: '午餐時間到了！營養午餐阿姨推著餐車來到小美的班上。今天的主食是白飯，全班有30位同學，老師說每個人可以盛3/4碗飯。小美是今天的值日生，她想知道要準備多少碗飯才夠全班吃。',
        challenge: '請計算：30個人每人吃3/4碗飯，總共需要準備多少碗飯？',
        hint: '可以想成：1個人吃3/4碗，2個人吃多少碗？3個人呢？找到規律後，再算30個人。或是用乘法：30 × 3/4。',
        answer: '22.5',
        unit: '碗',
        topics: ['分數', '乘法', '分數應用'],
        suggestion: '太棒了！你理解分數的乘法應用。在生活中，我們常需要計算「部分」的總和，你已經掌握這個技巧了！',
        wrongSuggestion: '分數乘法需要多練習。試著把問題分解：先算1個人、2個人、3個人的量，找出規律後就能理解30個人需要多少了。'
    },
    '3': {
        name: '體育課跑步',
        theme: '學校的一天',
        difficulty: '適中',
        story: '體育課時間！體育老師帶著大家到操場跑步。老師說：「我們學校的操場一圈是200公尺，今天大家要跑5圈喔！」小美跑完後，想知道自己總共跑了多遠，而且她還想換算成公里來看看。',
        challenge: '請計算：操場一圈200公尺，跑5圈總共是多少公里？',
        hint: '先算出總共幾公尺：200 × 5，然後記得1公里 = 1000公尺，用除法換算。',
        answer: '1',
        unit: '公里',
        topics: ['長度', '單位換算', '乘法'],
        suggestion: '完美！你已經會長度的單位換算了。記住公尺和公里的關係很重要，這在日常生活中很實用！',
        wrongSuggestion: '單位換算需要記住換算關係。1公里 = 1000公尺。建議多做換算練習，熟悉不同單位之間的關係。'
    },
    '4': {
        name: '做家事時間',
        theme: '家裡的生活',
        difficulty: '簡單',
        story: '星期六早上，小美決定幫忙做家事。她先花了15分鐘掃地，把家裡每個角落都掃得乾乾淨淨。掃完地後，她又花了20分鐘拖地。做完這些家事後，小美想知道自己總共花了多少時間。',
        challenge: '請計算：掃地15分鐘加上拖地20分鐘，總共花了多少分鐘？',
        hint: '這是一個加法問題，把兩段時間加起來就可以了：15 + 20 = ?',
        answer: '35',
        unit: '分鐘',
        topics: ['時間', '加法'],
        suggestion: '很好！時間的加法你很熟練。在規劃自己的時間時，能夠計算總共需要多久是很重要的能力！',
        wrongSuggestion: '這是簡單的加法題。把兩個時間加起來：15分鐘 + 20分鐘，再數數看答案是多少。'
    },
    '5': {
        name: '烘焙蛋糕',
        theme: '家裡的生活',
        difficulty: '適中',
        story: '小美最喜歡和媽媽一起烘焙了！今天她們要做巧克力蛋糕，食譜上寫著需要500公克的麵粉。小美打開櫃子檢查，發現家裡的麵粉罐裡只剩下300公克。她想知道還需要買多少麵粉。',
        challenge: '請計算：需要500公克麵粉，家裡有300公克，還需要買多少公克？',
        hint: '這是一個減法問題。用需要的總量減去已有的量：500 - 300 = ?',
        answer: '200',
        unit: '公克',
        topics: ['重量', '減法'],
        suggestion: '答對了！重量的計算你掌握得很好。在烹飪或烘焙時，準確計算材料的重量很重要！',
        wrongSuggestion: '這題要用減法。想想看：需要500公克，已經有300公克，那麼缺少的部分是多少？用減法來算。'
    },
    '6': {
        name: '分享零食',
        theme: '家裡的生活',
        difficulty: '簡單',
        story: '小美的媽媽買了一盒餅乾回來，裡面總共有24片。剛好有小美的3個表兄弟來家裡玩，加上小美自己共4個人。媽媽說要把餅乾平分給大家，小美想算算看每個人可以分到幾片。',
        challenge: '請計算：24片餅乾平分給4個人，每人可以分到幾片？',
        hint: '這是除法問題。想像把24片餅乾一片一片分給4個人，每人會拿到幾片？可以用24 ÷ 4來計算。',
        answer: '6',
        unit: '片',
        topics: ['除法', '平分'],
        suggestion: '太棒了！你理解平分的概念，這就是除法的基本應用。繼續保持！',
        wrongSuggestion: '平分就是除法。把總數24除以人數4，可以試著用畫圖的方式，把24個圓圈分給4個人。'
    },
    '7': {
        name: '遊樂園門票',
        theme: '放假的日子',
        difficulty: '困難',
        story: '暑假到了！爸爸帶小美去遊樂園玩。售票口的牌子上寫著：全票350元，兒童票打8折。小美買兒童票，她想算算看要付多少錢，這樣才能準備好剛好的零錢。',
        challenge: '請計算：全票350元，兒童票打8折，兒童票要付多少元？',
        hint: '打8折就是乘以0.8（或是8/10）。用350 × 0.8來計算，或是想成350的十分之八。',
        answer: '280',
        unit: '元',
        topics: ['小數', '乘法', '折扣計算'],
        suggestion: '厲害！折扣的計算你都會了。理解打折的數學原理，以後購物就能快速算出優惠價格！',
        wrongSuggestion: '打折的計算比較複雜。打8折就是原價乘以0.8（或80%）。建議先練習小數乘法，再來做折扣題目。'
    },
    '8': {
        name: '野餐準備飲料',
        theme: '放假的日子',
        difficulty: '適中',
        story: '週末天氣很好，小美和5個朋友約好要去公園野餐，總共6個人。小美負責準備果汁，她想每個人帶500毫升的果汁。她想知道總共需要準備多少果汁，而且想知道這樣換算成公升是多少。',
        challenge: '請計算：每人500毫升，6個人總共需要幾公升的果汁？',
        hint: '先算出總毫升數：500 × 6，然後記得1公升 = 1000毫升，用除法換算成公升。',
        answer: '3',
        unit: '公升',
        topics: ['容量', '單位換算', '乘法'],
        suggestion: '完美！容量的計算和單位換算你都掌握了。這在日常生活中很實用！',
        wrongSuggestion: '這題要分兩步驟：先算總共幾毫升，再換算成公升。記住1公升 = 1000毫升。'
    },
    '9': {
        name: '電影時刻表',
        theme: '放假的日子',
        difficulty: '適中',
        story: '放假的午後，小美和媽媽去看電影。電影14:30開始播放，電影票上寫著片長120分鐘。小美想算算看電影會在幾點幾分結束，這樣才能安排接下來的行程。',
        challenge: '請計算：電影14:30開始，播放120分鐘（2小時），會在幾點幾分結束？',
        hint: '120分鐘等於2小時。從14:30開始，加上2小時。14 + 2 = 16，所以答案是16:30（也就是下午4點30分）。',
        answer: '16:30',
        unit: '',
        topics: ['時間', '加法', '時間計算'],
        suggestion: '太好了！你會計算時間的加減，而且也理解分鐘和小時的換算。這個能力對安排時間很有幫助！',
        wrongSuggestion: '時間的加法要小心。120分鐘 = 2小時，從14:30加上2小時。記得時間的進位是60分鐘進1小時。'
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // 從 URL 參數取得情境資訊
    const urlParams = new URLSearchParams(window.location.search);
    const scenarioId = urlParams.get('id') || '1';
    const scenarioName = urlParams.get('name') || '情境挑戰';
    const theme = urlParams.get('theme') || 'school';

    // 從資料庫取得該情境的詳細資訊
    const currentScenario = scenarioData[scenarioId] || scenarioData['1'];

    // 更新頁面標題
    document.getElementById('scenarioTitle').textContent = scenarioName;
    document.getElementById('scenarioName').textContent = currentScenario.name;
    document.getElementById('scenarioTheme').textContent = currentScenario.theme;
    document.getElementById('scenarioDifficulty').textContent = '難度：' + currentScenario.difficulty;

    // 更新主題標題和返回連結
    const themeNames = {
        'school': '學校的一天',
        'home': '家裡的生活',
        'holiday': '放假的日子'
    };
    const themeName = themeNames[theme] || '情境挑戰';
    document.getElementById('themeLink').textContent = themeName;

    // 設定主題連結返回儀表板並切換到情境教科書
    document.getElementById('themeLink').href = 'dashboard.html?tab=scenario';

    // 更新情境故事
    document.getElementById('storyContent').innerHTML = '<p>' + currentScenario.story + '</p>';

    // 更新問題挑戰
    document.getElementById('challengeContent').innerHTML = '<p class="challenge-question">' + currentScenario.challenge + '</p>';
    document.getElementById('hintText').textContent = currentScenario.hint;

    // 更新相關知識點（同時更新兩個位置）
    const topicsContainer = document.getElementById('relatedTopics');
    topicsContainer.innerHTML = '';
    currentScenario.topics.forEach(topic => {
        const badge = document.createElement('span');
        badge.className = 'topic-badge-inline';
        badge.textContent = topic;
        topicsContainer.appendChild(badge);
    });

    // 儲存當前答案到全域變數
    window.currentScenario = currentScenario;
});

// 切換提示顯示/隱藏
function toggleHint() {
    const hintDiv = document.getElementById('challengeHint');
    const btn = document.getElementById('showHintBtn');
    if (hintDiv.style.display === 'none' || hintDiv.style.display === '') {
        hintDiv.style.display = 'block';
        btn.textContent = '隱藏提示';
    } else {
        hintDiv.style.display = 'none';
        btn.textContent = '顯示提示';
    }
}

// 隱藏提示
function hideHint() {
    const hintDiv = document.getElementById('challengeHint');
    const btn = document.getElementById('showHintBtn');
    hintDiv.style.display = 'none';
    btn.textContent = '顯示提示';
}

// 檢查答案
function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const feedbackDiv = document.getElementById('answerFeedback');
    const aiSuggestion = document.getElementById('aiSuggestion');

    if (!userAnswer) {
        feedbackDiv.innerHTML = '<p class="feedback-error">請先輸入答案喔！</p>';
        return;
    }

    const correctAnswer = window.currentScenario.answer;

    if (userAnswer === correctAnswer || userAnswer === correctAnswer + window.currentScenario.unit) {
        feedbackDiv.innerHTML = `
            <div class="feedback-success">
                <h4>🎉 答對了！</h4>
                <p>正確答案是：${correctAnswer}${window.currentScenario.unit}</p>
            </div>
        `;
        aiSuggestion.textContent = window.currentScenario.suggestion;
    } else {
        feedbackDiv.innerHTML = `
            <div class="feedback-error">
                <h4>💭 再想想看</h4>
                <p>你的答案：${userAnswer}</p>
                <p>提示：試著重新閱讀題目，或點擊上方「顯示提示」按鈕。</p>
            </div>
        `;
        aiSuggestion.textContent = window.currentScenario.wrongSuggestion;
    }
}

// 重新作答
function resetAnswer() {
    document.getElementById('answerInput').value = '';
    document.getElementById('answerFeedback').innerHTML = '';
    document.getElementById('challengeHint').style.display = 'none';
    document.getElementById('aiSuggestion').textContent = '根據你的答題狀況，系統會提供個人化的學習建議...';
}
