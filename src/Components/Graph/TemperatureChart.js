import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const TemperatureChart = ({ value, time , component }) => {
  const unit = useSelector((state)=>state.weather.units)

  const chartData = {
    series: [
      {
        name: ` Max ${Math.max(...value)}`,
        data: value
      },
    ],
    options: {
    
      chart: {
        height: 200,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 4,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#ca9b08'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },

      markers: {
        size: 1
      },
      xaxis: {
        categories: time,
        title: {
          text: 'Time'
        }
      },
      yaxis: {
        title: {
          text: component
        },
        min: Math.min(...value) ,
        max: Math.max(...value)
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
        colors: ["green"]
      }
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={200} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default TemperatureChart;
