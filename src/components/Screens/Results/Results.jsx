import React, { useState } from 'react'
import './Results.css'
import Chart from 'react-apexcharts'

function Results() {

  const [state, setState] = useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  )

  const [secondState, setSecondState] = useState(
    {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  )

  return (
    <div className="results">
        <div className="header">
          <h3>Results</h3>
        </div>

        <div className="content">

          <div className="chart 1">
            <h5 className="title">Chart 1</h5>
            <div className="row">
              <div className="col-4">
                <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
              />
              </div>
            </div>
          </div>

          <div className="chart 2">
            <h5 className="title">Chart 2</h5>
            <div className="row">
              <div className="col-4">
                <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
              />
              </div>
            </div>
          </div>

          <div className="chart 3">
            <h5 className="title">Chart 3</h5>
            <div className="row">
              <div className="col-4">
                <Chart options={secondState.options} series={secondState.series} type="donut" width="380" />
              </div>
            </div>
          </div>

        </div>      

    </div>
    )
}

export default Results