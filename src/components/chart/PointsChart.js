import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/toolbox';

const PointsChart = () => {
  const chartRef = useRef(null);

  const initChart = () => {
    const chart = echarts.init(chartRef.current);

    chart.setOption({
      title: {
        text: 'Points Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        name: 'Days',
        data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30']
      },
      yAxis: {
        type: 'value',
        max: 15,
        name: 'Points',
      },
      series: [{
        data: [1, 2, 3, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 7, 8, 9, 9, 8, 7, 8, 9, 8, 9, 10, 8, 9, 10, 11, 12],
        type: 'line',
        name: 'Points',
        smooth: true
      }]
    });
  };

  useEffect(() => {
    initChart();
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
  );
};

export default PointsChart;
