import { isPropsEqual } from "@fullcalendar/react";
import { render } from "node-sass";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Leave from "./index";

class ApexChart extends React.Component {
  state: any;

  constructor(props: any) {
    super(props);
    let max = 8;
    let leaveTaken = 5;
    let val = ((max - leaveTaken) / max) * 100;
    this.state = {
      series: [val],
      options: {
        chart: {
          height: 350,
          max: 10,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          yaxis: {
            max: 9,
          },
          radialBar: {
            startAngle: -135,
            endAngle: 215,
            range: [0, 8],
            max: 8,
            hollow: {
              margin: 10,
              size: "80%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
            },

            track: {
              background: "#fff",
              strokeWidth: "14%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              show: true,
              strokeWidth: "5%",
              name: {
                offsetY: -10,
                show: true,
                color: "#888",
                fontSize: "17px",
              },
              value: {
                formatter: function (val: any) {
                  return leaveTaken;
                },
                color: "#111",
                fontSize: "36px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "solid",
          solid: {
            color: "#CF2C09",
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Leave"],
      },
    };
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={230}
          />
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#app");
// render(React.createElement(ApexChart));

export default ApexChart;
