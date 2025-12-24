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
                labels: ['12/18', '12/19', '12/20', '12/21', '12/22', '12/23', '12/24'],
                datasets: [{
                    label: '使用時間（小時）',
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
    const unitProgressChartCanvas = document.getElementById('unitProgressChart');
    if (unitProgressChartCanvas) {
        const unitProgressChart = new Chart(unitProgressChartCanvas, {
            type: 'doughnut',
            data: {
                labels: ['已完成', '進行中', '未開始'],
                datasets: [{
                    data: [7, 2, 4],
                    backgroundColor: [
                        '#50C878',
                        '#FF9F40',
                        '#E1E8ED'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
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
                                return context.label + ': ' + context.parsed + ' 個單元';
                            }
                        }
                    }
                }
            }
        });
    }

    // 題型正確率比較長條圖
    const accuracyChartCanvas = document.getElementById('accuracyChart');
    if (accuracyChartCanvas) {
        const accuracyChart = new Chart(accuracyChartCanvas, {
            type: 'bar',
            data: {
                labels: ['靜態題', '動態題', '互動題'],
                datasets: [{
                    label: '正確率 (%)',
                    data: [68, 85, 82],
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
                    borderRadius: 6,
                    barThickness: 50
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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
                                return '正確率: ' + context.parsed.y + '%';
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
                                family: "'Microsoft JhengHei', sans-serif",
                                size: 12
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
                                size: 16,
                                family: "'Microsoft JhengHei', sans-serif",
                                weight: 'bold'
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
});
