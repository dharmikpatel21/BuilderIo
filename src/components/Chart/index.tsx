"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Pie Chart Example",
    },
    colors: ["#FF5733", "#3399FF", "#FFD700", "#33CC33", "#9933FF", "#FFA500"],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        showInLegend: true,
        data: [
          {
            name: "Chrome",
            y: 50,
          },
          {
            name: "Internet Explorer",
            y: 25,
          },
          {
            name: "Firefox",
            y: 25,
          },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
