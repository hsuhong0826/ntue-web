// ============================================
// 儀表板圖表初始化
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // 學習時間趨勢圖表（最近7天的使用時間）
    const timeChartCanvas = document.getElementById('timeChart');
    if (timeChartCanvas) {
        const timeChart = new Chart(timeChartCanvas, {
            type: 'line',
            data: {
                // 日期標籤（最近7天）
                labels: ['12/2', '12/5', '12/8', '12/11', '12/14', '12/17', '12/20'],
                datasets: [{
                    label: '使用時間（小時）',
                    // 每天的使用時間數據
                    data: [2.5, 3.2, 4.1, 3.8, 5.2, 4.7, 5.0],
                    borderColor: '#4A90E2',
                    backgroundColor: 'rgba(74, 144, 226, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4A90E2',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false,
                        onClick: null
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
                                return context.dataset.label + ': ' + context.parsed.y + ' 小時';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                family: "'Microsoft JhengHei', sans-serif"
                            },
                            callback: function (value) {
                                return value + ' 小時';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
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

    // 單元狀態分布圓餅圖
    const progressChartCanvas = document.getElementById('progressChart');
    if (progressChartCanvas) {
        const progressChart = new Chart(progressChartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['已完成', '進行中', '未開始'],
                datasets: [{
                    // 數據說明：
                    // - 已完成 2個單元 = 2/8 = 25%（分數概念100%、分數比較100%）
                    // - 進行中 2個單元 = 2/8 = 25%（分數加減65%、同分母分數加減45%）
                    // - 未開始 4個單元 = 4/8 = 50%（其餘4個單元）
                    data: [54, 15, 31],
                    backgroundColor: [
                        '#66BB6A',  // 綠色 - 已完成
                        '#FFA726',  // 橘色 - 進行中
                        '#E0E0E0'   // 灰色 - 未開始
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            font: {
                                family: "'Microsoft JhengHei', sans-serif",
                                size: 12
                            },
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        },
                        onClick: null  // 禁用圖例點擊
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
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
});
