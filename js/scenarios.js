// ============================================
// 情境挑戰頁面 - 年級收合功能 + 圖表
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // 情境完成狀態圓餅圖
    const scenarioProgressChartCanvas = document.getElementById('scenarioProgressChart');
    if (scenarioProgressChartCanvas) {
        const scenarioProgressChart = new Chart(scenarioProgressChartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['已完成', '未開始'],
                datasets: [{
                    data: [5, 4],
                    backgroundColor: [
                        '#50C878',
                        '#E1E8ED'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: "'Microsoft JhengHei', sans-serif"
                        },
                        bodyFont: {
                            size: 13,
                            family: "'Microsoft JhengHei', sans-serif"
                        },
                        callbacks: {
                            label: function (context) {
                                return context.label + ': ' + context.parsed + ' 個情境';
                            }
                        }
                    }
                }
            }
        });
    }

    // 情境主題表現長條圖
    const themePerformanceChartCanvas = document.getElementById('themePerformanceChart');
    if (themePerformanceChartCanvas) {
        const themePerformanceChart = new Chart(themePerformanceChartCanvas, {
            type: 'bar',
            data: {
                labels: ['學校的一天', '家裡的生活', '放假的日子'],
                datasets: [{
                    label: '成功率',
                    data: [85, 78, 82],
                    backgroundColor: [
                        'rgba(74, 144, 226, 0.85)',
                        'rgba(80, 200, 120, 0.85)',
                        'rgba(255, 159, 64, 0.85)'
                    ],
                    borderColor: [
                        '#4A90E2',
                        '#50C878',
                        '#FF9F40'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                    barThickness: 60
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        padding: 14,
                        titleFont: {
                            size: 14,
                            family: "'Microsoft JhengHei', sans-serif",
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13,
                            family: "'Microsoft JhengHei', sans-serif"
                        },
                        callbacks: {
                            label: function (context) {
                                return '成功率: ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
                                size: 12,
                                family: "'Microsoft JhengHei', sans-serif"
                            },
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 12,
                                family: "'Microsoft JhengHei', sans-serif"
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // 取得所有年級標題
    const gradeHeaders = document.querySelectorAll('.grade-header');

    gradeHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const gradeNum = this.getAttribute('data-grade');
            const content = document.getElementById('grade-' + gradeNum);
            const toggleIcon = this.querySelector('.toggle-icon');

            // 切換 active 類別
            this.classList.toggle('active');
            content.classList.toggle('active');

            // 切換箭頭方向
            if (this.classList.contains('active')) {
                toggleIcon.textContent = '▼';
            } else {
                toggleIcon.textContent = '▶';
            }
        });
    });
});
