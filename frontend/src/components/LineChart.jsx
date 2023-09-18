import React from "react";
import ReactApexChart from "react-apexcharts";

function AreaChart() {
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
        name: "",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],

    fill: {
      type: "gradient",
      gradient: {
        type: "linear",
        gradientToColors: ["rgba(255, 126, 7, 0)"],
        stops: [0, 100],
        colorStops: [
          {
            offset: -46.51,
            color: "rgba(255, 118, 76, 0.24)",
            opacity: 1,
          },
          {
            offset: 85.18,
            color: "rgba(255, 126, 7, 0)",
            opacity: 1,
          },
        ],
      },
    },
    xaxis: {

      show: false,
      labels: {
        show: false
      }
    },

    dataLabels: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
      lines: false,
    },

    colors: ["#FF764C"],
    // tooltip: {
    //   enabled: false,
    // },
    grid: {
        show: false,
      },
  };

  return (
    <div
      style={{
        width: "47.6rem",
      }}
    >
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={280}
      />
    </div>
  );
}

export default AreaChart;
