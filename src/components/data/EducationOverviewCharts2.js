import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class SideBySideBarCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [
        {
          id: "chart7",
          title: "Prior to the start of the research program, how would you rate your understanding of the following topics?",
          data: {
            labels: ["Basic BioE Concepts", "Genetic Circuitry", "Research Process", "BioE Lab Techniques"],
            datasets: [
              {
                label: "None",
                backgroundColor: "#f08a91",
                borderColor: "#ec7278",
                borderWidth: 1,
                data: [50, 87, 20, 65],
              },
              {
                label: "Somewhat",
                backgroundColor: "#f7c28a",
                borderColor: "#f5b561",
                borderWidth: 1,
                data: [58, 51, 59, 55],
              },
              {
                label: "Familiar",
                backgroundColor: "#a0c1f7",
                borderColor: "#8cb9f7",
                borderWidth: 1,
                data: [34, 13, 46, 27],
              },
              {
                label: "Proficient",
                backgroundColor: "#d9a6fc",
                borderColor: "#cc8cf7",
                borderWidth: 1,
                data: [16, 7, 33, 11],
              },
            ],
          },
        },
        {
          id: "chart8",
          title: "After participating in the research program, how would you rate your understanding of the following topics?",
          data: {
            labels: ["Basic BioE Concepts", "Genetic Circuitry", "Research Process", "BioE Lab Techniques"],
            datasets: [
              {
                label: "None",
                backgroundColor: "#f08a91",
                borderColor: "#ec7278",
                borderWidth: 1,
                data: [0, 0, 0, 0],
              },
              {
                label: "Somewhat",
                backgroundColor: "#f7c28a",
                borderColor: "#f5b561",
                borderWidth: 1,
                data: [12, 46, 6, 19],
              },
              {
                label: "Familiar",
                backgroundColor: "#a0c1f7",
                borderColor: "#8cb9f7",
                borderWidth: 1,
                data: [84, 82, 60, 89],
              },
              {
                label: "Proficient",
                backgroundColor: "#d9a6fc",
                borderColor: "#cc8cf7",
                borderWidth: 1,
                data: [62, 30, 92, 50],
              },
            ],
          },
        },
        
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="bar-charts row">
          {this.state.chartData.map((chart, index) => (
            <div key={index} className="col-md-6">
              <p><b>{chart.title}</b></p>
              <div className="bar-chart">
                <Bar
                  id={chart.id}
                  data={chart.data}
                  options={{
                    responsive: true,
                    aspectRatio: 1.5,
                    scales: {
                      y: {
                        beginAtZero: true,
                        suggestedMax: 110,
                      },
                    },
                    plugins: {
                      legend: {
                        display: true,
                        position: 'top',
                        labels: {
                          color: 'rgb(255, 99, 132)',
                          size: 18,
                        },
                      },
                      tooltip: {
                        bodyFont: {
                          size: 18,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SideBySideBarCharts;
