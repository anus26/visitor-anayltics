import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BrowserPieChart = ({ visits }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

 const transformDataForPieChart = (visits2) => {
  if (!Array.isArray(visits2)) {
    console.error('Expected array but got:', visits2);
    return {
      labels: [],
      datasets: [{ data: [] }]
    };
  }

  const browserCount = {};
  visits2.forEach((v) => {
    const browser = v.browser;
    // const browser= v.ip
    // const browser= v.device
    browserCount[browser] = (browserCount[browser] || 0) + 1;
  });
  const browserCount1 = {};
  visits2.forEach((v) => {
    // const browser = v.browser;
    const browser= v.ip
    // const browser= v.device
    browserCount1[browser] = (browserCount1[browser] || 0) + 1;
  });  const browserCount2 = {};
  visits2.forEach((v) => {
    // const browser = v.browser;
    // const browser= v.ip
    const browser= v.device
    browserCount2[browser] = (browserCount2[browser] || 0) + 1;
  });
  return {
    labels: Object.keys(browserCount,browserCount1,browserCount2),
    datasets: [{
      data: Object.values(browserCount),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e44ad', '#2ecc71'],
    }],
  };
};

  useEffect(() => {
    if (!visits || visits.length === 0) return;

    const chartData = transformDataForPieChart(visits);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [visits]);

  return <canvas ref={chartRef} />;
};

export default BrowserPieChart;

