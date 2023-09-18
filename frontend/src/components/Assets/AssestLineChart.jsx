import React from "react";
import ReactApexChart from "react-apexcharts";

function AssestAreaChart() {
  const options = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },

    yaxis: {
      show: false,
    },
    series: [
      {
        name: "km",
        data: [60, 45, 30, 23, 2],
      },
    ],

    fill: {
      type: "gradient",
      gradient: {
        type: "linear",
        // gradientToColors: ["rgba(255, 126, 7, 0)"],
        gradientToColors: ["rgba(161, 98, 247, 0.38) "],
        stops: [0, 100],
        colorStops: [
          {
            offset: -46.51,
            color: "rgba(161, 98, 247, 0.38) ",
            opacity: 1,
          },
          {
            offset: 85.18,
            color: "rgba(161, 98, 247, 0) ",
            opacity: 1,
          },
        ],
      },
    },

    dataLabels: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
      lines: false,
    },

    colors: ["rgba(161, 98, 247, 0.38)"],
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "12/9",
        "12/9",
        "12/9",
        "12/9",
        "12/9",
        "12/9",
        "12/9",
        "12/9",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="area"
      height={280}
    />
  );
}

export default AssestAreaChart;
