import React from "react";
import { Doughnut } from "react-chartjs-2";

const DonutChart = () => {
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [300, 450, 200],
        backgroundColor: ["#FF6384", "rgb(110,44,243)", "rgb(238,240,248)"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: false,
    },
    cutout: "70%",
  };

  const centerText = "65%";
  const centerText2 = "Total New Customers";

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
        plugins={[
          {
            beforeDraw: function (chart) {
              const ctx = chart.ctx;
              const width = chart.width;
              const height = chart.height;

              ctx.restore();
              ctx.font = "0.9rem Poppins"; 
              ctx.fillStyle = "#000";
              ctx.textBaseline = "middle";
              ctx.textAlign = "center";

              const centerX = width / 2;
              const centerY = height / 2;

              ctx.fillText(centerText, centerX, centerY - 10);

              ctx.font = "0.7rem Poppins"; 
              ctx.fillText(centerText2, centerX, centerY + 20);
              ctx.lineHeight = 1;
              ctx.save();
            },
          },
        ]}
      />
    </div>
  );
};

export default DonutChart;

