import React, { useState } from "react";
import Chart from "react-apexcharts";
const SellerChartBar = () => {
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
          // borderRadiusTop:,
          colors: {
            ranges: [
              {
                from: 0,
                to: 100,
                color: "#FF6370",
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
        text: "Tracking Histroy",
        align: "center",
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#263238",
        },
      },

      grid: {
        show: false,
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    },

    series: [
      {
        name: "Km/h",
        data: [30, 40, 45, 50, 49, 60, 100],
      },
    ],
  });

  return (
    <div
      id="sellerlinechart"
      style={{
        width: "380px",
        marginTop:"2rem"
      }}
    >
      <Chart
        options={chartbar.options}
        series={chartbar.series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default SellerChartBar;
