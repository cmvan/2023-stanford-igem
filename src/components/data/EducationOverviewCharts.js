import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js/auto';
Chart.register(ArcElement);

class EducationOverviewCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [
        {
          id: "chart1",
          title: "Students were able to playtest the game. How effective was Phil’s Laberia in teaching the purpose and steps of bioengineering wet laboratory techniques?",
          data: {
            labels: ["Very Effective", "Effective", "Somewhat Effective", "Not Effective At All"],
            datasets: [
              {
                data: [81, 45, 31, 1],
                backgroundColor: [
                  "#cc8cf7",
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#d9a6fc",
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
              },
            ],
          },
        },
        {
          id: "chart2",
          title: "Would you recommend the Stanford iGEM Bioengineering Research Program to others interested in bioengineering and synthetic biology research?",
          data: {
            labels: ["Yes", "Maybe", "No"],
            datasets: [
              {
                data: [150, 7, 1],
                backgroundColor: [
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
              },
            ],
          },
        },
        {
          id: "chart3",
          title: "After this program, do you intend on using your research proposal for future research endeavors (e.g. science fairs, AP research / school course, etc.)?",
          data: {
            labels: ["Yes", "Maybe", "Hopefully!", "No"],
            datasets: [
              {
                data: [40, 48, 56, 14],
                backgroundColor: [
                  "#cc8cf7",
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#d9a6fc",
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
              },
            ],
          },
        },
        {
          id: "chart4",
          title: "How effective was the Guest Speaker Series at introducing the cutting edge science happening right now at the forefront of the bioengineering field?",
          data: {
            labels: ["Very Effective", "Effective", "Somewhat Effective", "Not Effective At All"],
            datasets: [
              {
                data: [98, 41, 17, 2],
                backgroundColor: [
                  "#cc8cf7",
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#d9a6fc",
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
              },
            ],
          },
        },
        {
          id: "chart5",
          title: "How effective was the group collaboration and mentorship at providing support during the process of developing a research proposal?",
          data: {
            labels: ["Very Effective", "Effective", "Somewhat Effective", "Not Effective At All",],
            datasets: [
              {
                data: [70, 45, 41, 2],
                backgroundColor: [
                  "#cc8cf7",
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#d9a6fc",
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
              },
            ],
          },
        },
        {
          id: "chart6",
          title: "How effective were the lectures in teaching the foundational bioE and synBio background knowledge necessary for writing a research proposal?",
          data: {
            labels: ["Very Effective", "Effective", "Somewhat Effective", "Not Effective At All"],
            datasets: [
              {
                data: [65, 74, 19, 0],
                backgroundColor: [
                  "#cc8cf7",
                  "#8cb9f7",
                  "#f5b561",
                  "#ec7278",
                ],
                hoverBackgroundColor: [
                  "#d9a6fc",
                  "#a0c1f7",
                  "#f7c28a",
                  "#f08a91",
                ],
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
        <div className="pie-charts row">
          {this.state.chartData.map((chart, index) => (
            <div key={index} className="col-md-4">
              <p><b>{chart.title}</b></p>
              <div className="pie-chart col">
                <Pie
                  id={chart.id}
                  data={chart.data}
                  options={{
                    responsive: true,
                    aspectRatio: 1,
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

export default EducationOverviewCharts;
