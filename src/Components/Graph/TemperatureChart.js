import React, { useEffect, useRef } from 'react';
import ApexCharts from 'react-apexcharts';

const TemperatureChart = ({temperature, time}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data and options
    const series = {
      monthDataSeries1: {
        prices: temperature,
        dates: time,
      },
    };

    const options = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };

    // Initialize chart
    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup function (destroy the chart on unmount)
      return () => {
        chart.destroy();
      };
    }
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return <div id="chart" ref={chartRef} />;
};

export default TemperatureChart;
