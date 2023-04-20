import React from 'react';
import ReactECharts from 'echarts-for-react';

function WorkLifeBalanceChart() {
  const data = {
    productivity: [70, 80, 60, 90, 75],
    stressLevels: [30, 20, 40, 10, 25],
    breaksTaken: [3, 5, 2, 4, 6],
    daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  };

  const option = {
    title: {
      text: 'Productivity Chart',
    },
    legend: {
      data: ['Productivity', 'Stress Levels', 'Breaks Taken'],
      padding: 30,
    },
    tooltip: {
      show: true
    },
    xAxis: {
      type: 'category',
      data: data.daysOfWeek,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Productivity',
        type: 'line',
        data: data.productivity,
      },
      {
        name: 'Stress Levels',
        type: 'line',
        data: data.stressLevels,
      },
      {
        name: 'Breaks Taken',
        type: 'line',
        data: data.breaksTaken,
      },
    ],
  };

  return (
    <div >
      <ReactECharts option={option} />
    </div>
  );
}

export default WorkLifeBalanceChart;
