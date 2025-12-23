// ============================================
// 學習策略建議圖表初始化
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // 題型表現分析（長條圖）- 顯示各題型的答題數量
    const performanceChartCanvas = document.getElementById('performanceChart');
    if (performanceChartCanvas) {
        const performanceChart = new Chart(performanceChartCanvas, {
            type: 'bar',
            data: {
                labels: ['靜態題', '動態題', '互動題'],
                datasets: [{
                    label: '答題數量',
                    // 數據說明：靜態題45題、動態題52題、互動題38題
                    data: [45, 52, 38],
                    backgroundColor: [
                        '#FFA726',  // 橘色 - 靜態題
                        '#66BB6A',  // 綠色 - 動態題
                        '#42A5F5'   // 藍色 - 互動題
                    ],
                    borderColor: [
                        '#FFA726',
                        '#66BB6A',
                        '#42A5F5'
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
                        display: false  // 隱藏圖例
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
                                return context.dataset.label + ': ' + context.parsed.y + ' 題';
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
                                return value + ' 題';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                family: "'Microsoft JhengHei', sans-serif",
                                size: 13
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

    // 題型正確率比較（橫條圖）- 顯示各題型的答題正確率
    const accuracyChartCanvas = document.getElementById('accuracyChart');
    if (accuracyChartCanvas) {
        const accuracyChart = new Chart(accuracyChartCanvas, {
            type: 'bar',
            data: {
                labels: ['靜態題', '動態題', '互動題'],
                datasets: [{
                    label: '正確率 (%)',
                    // 數據說明：靜態題68%、動態題85%、互動題82%
                    data: [68, 85, 82],
                    backgroundColor: [
                        'rgba(255, 167, 38, 0.7)',  // 橘色半透明 - 靜態題
                        'rgba(102, 187, 106, 0.7)',  // 綠色半透明 - 動態題
                        'rgba(66, 165, 245, 0.7)'    // 藍色半透明 - 互動題
                    ],
                    borderColor: [
                        '#FFA726',
                        '#66BB6A',
                        '#42A5F5'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false  // 隱藏圖例
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
                                return context.dataset.label + ': ' + context.parsed.x + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            font: {
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
                    y: {
                        ticks: {
                            font: {
                                family: "'Microsoft JhengHei', sans-serif",
                                size: 13
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
});
