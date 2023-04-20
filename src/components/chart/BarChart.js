import ReactECharts from 'echarts-for-react';
import item from "../assets/item"; // import data

const workHours = []
const nonWorkHours = []

for (const element of Object.keys(item)) {
  item.entries.map((e) => {
    nonWorkHours.push(e["nonWorkMinutes"])
    workHours.push(e["workMinutes"])
  })
}

const BarChart = ({ data }) => {
  const options = {
    title: {
      text: 'Coding Chart'
    },
    legend: {
      data: ['Coding at work', 'Coding outside of work hours']
    },
    tooltip: {
      show: true
    },
    xAxis: [
      {
        name: 'days',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'hours',
        min: 0,
        max: 3,
        interval: 1,
        axisLabel: {
          formatter: '{value}'
        }
      },
    ],
    series: [{
      name: 'coding on Non Working Hours',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' hr';
        }
      },
      data: nonWorkHours
    },
    {
      name: 'coding on Working Hours',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' hr';
        }
      },
      data: workHours
    },]
  };

  return <ReactECharts option={options} />;
};

export default BarChart