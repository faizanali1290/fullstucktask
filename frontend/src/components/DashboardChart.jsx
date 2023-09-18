
import React, { useState } from "react";
import Chart from "react-apexcharts";
const DashboardChart = () => {
  const [chartbar, setCharbar] = useState({
    options: {
      chart: {
        // id: "bar",
        id: "bar",
      },

      colors: "#ffff",
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        followCursor: false,
        intersect: true,
        theme: false,
        style: {
          fontSize: "12px",
          fontFamily: undefined,
          background: "red",
          text: "center",
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },

        z: {
          formatter: undefined,
          title: "faizan",
        },
        marker: {
          show: true,
        },
      },
      plotOptions: {
        grid: {
          // show: false,
          yaxis: {
            show: true,
          },
          xaxis: {
            show: false,
          },
        },
        legend: {
          show: false,
        },

        bar: {
          colors: {
            ranges: [
              {
                from: 0,
                to: 100,
                color: "#2884FF",
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
        lines: false,
      },

      chart: {
        background: "#FFFFFF",
      },

      title: {
        text: "Miles Statistics",
        align: "center",
        // margin: 2,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238",
        },
      },
      yaxis: {
        show: false,
      },

      grid: {
        show: false,
      },
      xaxis: {
        categories: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
      },
      // grid:{
      //   show:true
      // }
      xaxis: {
        show: true,
        lines: true,
      },
    },

    series: [
      {
        name: "127k",
        data: [30, 40, 45, 50, 49, 60, 100],
      },
    ],
  });

  return (
    <div
      style={{
        width: "47.6rem",
      }}
    >
      <Chart options={chartbar.options} series={chartbar.series} type="bar" />
    </div>
  );
};

export default DashboardChart;
