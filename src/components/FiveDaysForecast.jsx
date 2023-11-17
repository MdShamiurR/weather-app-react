import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { iconUrlFromCode } from "../service/service";

const FiveDaysForecast = ({ title, items }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const labels = items.map((item) => item.title);
      const temperatures = items.map((item) => item.temp);
      const maxTemperatures = items.map((item) => item.max);
      const minTemperatures = items.map((item) => item.min);

      // Create the line chart
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Temperature",
              data: temperatures,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Max Temperature",
              data: maxTemperatures,
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              fill: false,
            },
            {
              label: "Min Temperature",
              data: minTemperatures,
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              title: {
                display: true,
                text: "Days",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)", // Add white gridlines
              },
            },
            y: {
              title: {
                display: true,
                text: "Temperature (°C)",
              },
              grid: {
                color: "rgba(255, 255, 255, 0.1)", // Add white gridlines
              },
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [items]);

  return (
    <div>
      <div className="mt-6">
        <div className="flex items-center flex-col md:flex-col justify-center mb-2">
          <p className="text-orange-200 font-medium text-center md:text-left">
            {title}
          </p>
        </div>
        <hr className="my-2" />
        <div className="text-orange-200">
          <div className="flex flex-col md:flex-row items-center justify-around mt-6 space-y-4 md:space-y-0 md:space-x-4">
            {items.map((item, index) => (
              <div key={index} className="mb-4 md:mb-0 text-center">
                <p className="font-light text-sm">{item.title}</p>
                <img
                  src={iconUrlFromCode(item.icon)}
                  alt=""
                  className="w-12 my-1 mx-auto"
                />
                <p className="font-medium">{item.temp}°</p>
                <p className="font-medium">High: {item.max}°</p>
                <p className="font-medium">Low: {item.min}°</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <canvas
          ref={chartRef}
          className="w-full h-48 md:h-64 lg:h-80 xl:h-96"
        ></canvas>
      </div>
    </div>
  );
};

export default FiveDaysForecast;
