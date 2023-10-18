import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarChartData } from "./BarChartData";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faWallet,
  faBagShopping,
  faClipboardList,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS } from "chart.js/auto";
import DonutChart from "./DonutChart";

const Dashboard = () => {
  const [barChartData, setBarChartData] = useState({
    labels: BarChartData.map((data) => data.month),
    datasets: [
      {
        label: "Monthly Earnings",
        data: BarChartData.map((data) => data.income),
        backgroundColor: [
          "rgb(110,43,243)",
          "rgb(238,240,248)",
          "rgb(110,43,243)",
        ],
        borderRadius: 15,
      },
    ],
  });

  const options = {
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="container text-center" id="dashboard">
        <div className="row d-flex justify-content-around pt-3 pb-3">
          <div className="col-auto rounded dashboard-cards">
            <div className="row">
              <div className="col-5 p-2">
                <div
                  className=" dashboard-card-icon p-3 justify-content-center"
                  style={{ backgroundColor: "#87e897" }}
                >
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{ color: "#348041" }}
                    className="p-2"
                  />
                </div>
              </div>
              <div className="col-6 pt-2 text-start">
                <p>
                  <small className="text-secondary">Earning</small>
                  <br />
                  <b className="fw-bold"> $159k</b>
                  <br />
                  <span className="text-success">&uarr; 37.8% </span>
                  <span>this month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto rounded dashboard-cards">
            {" "}
            <div className="row">
              <div className="col-5 p-2">
                <div
                  className=" dashboard-card-icon p-3 justify-content-center"
                  style={{ backgroundColor: "#d3baf5" }}
                >
                  <FontAwesomeIcon
                    icon={faClipboardList}
                    style={{ color: "#7953ad" }}
                    className="p-2"
                  />
                </div>
              </div>
              <div className="col-6 pt-2 text-start">
                <p>
                  <small className="text-secondary">Orders</small>
                  <br />
                  <b className="fw-bold"> $2.4k</b>
                  <br />
                  <span className="text-danger">&darr; 2% </span>
                  <span>this month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto rounded dashboard-cards">
            {" "}
            <div className="row">
              <div className="col-5 p-2">
                <div
                  className=" dashboard-card-icon p-3 justify-content-center"
                  style={{ backgroundColor: "#b5e9f5" }}
                >
                  <FontAwesomeIcon
                    icon={faWallet}
                    style={{ color: "#3363a3" }}
                    className="p-2"
                  />
                </div>
              </div>
              <div className="col-6 pt-2 text-start">
                <p>
                  <small className="text-secondary">Balance</small>
                  <br />
                  <b className="fw-bold"> $2.4k</b>
                  <br />
                  <span className="text-danger">&darr; 2% </span>
                  <span>this month</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto rounded dashboard-cards">
            {" "}
            <div className="row">
              <div className="col-5 p-2">
                <div
                  className=" dashboard-card-icon p-3 justify-content-center"
                  style={{ backgroundColor: "rgb(255, 214, 220)" }}
                >
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    style={{ color: "rgb(238,75,104)" }}
                    className="p-2"
                  />
                </div>
              </div>
              <div className="col-6 pt-2 text-start">
                <p>
                  <small className="text-secondary">Total Sales</small>
                  <br />
                  <b className="fw-bold"> $89k</b>
                  <br />
                  <span className="text-success">&uarr; 11% </span>
                  <span>this week</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row charts">
        <div className="col-7 my-4 rounded-3 bar-chart-card p-2">
          <div className="row d-flex justify-content-around pt-3 pb-3 dashboard-cards rounded-3 bar-chart-bg">
            <div>
              <p className="float-start lh-1 p-1">
                <b className="fw-bold"> Overview</b>
                <br />
                <small className="text-secondary">Monthly earning</small>
              </p>
              <span className="float-end text-secondary">
                Quaterly <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
            <Bar data={barChartData} options={options} />
          </div>
        </div>
        <div className="col-4 my-4 donut-chart-card p-2">
          <div className="float-start p-3 mb-4">
            <p className="fw-bold mb-0 pb-0">Customers</p>
            <small className="text-secondary">Customers that buy our products</small>
          </div>
          <div className="p-3 rounded-3 donut-chart-bg w-75">
            <div className="pt-4 pb-4 mb-4" >
            <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
