import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ColorGraph = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      const response = await fetch('/api/all_colors');
      const data = await response.json();

      const ctx = chartRef.current.getContext('2d');

      if (myChartRef.current) {
        myChartRef.current.destroy();
      }

      myChartRef.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Luke', 'Mace', 'Vader', 'Anakin'],
          datasets: [{
            label: ' ',
            data: [data.green, data.purple, data.red, data.blue],
            backgroundColor: [
              '#01EB14',
              '#D000FF',
              '#FF0000',
              '#0077FF',
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            },
          },
        }
      });
    };

    fetchDataAndCreateChart();
  }, []);

  return (
    <div style={{height: '250px', width: '250px'}}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ColorGraph;
