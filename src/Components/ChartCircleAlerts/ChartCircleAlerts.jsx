import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts'
var CanvasJSChart = CanvasJSReact.CanvasJSChart

const ChartCircleAlerts  = () => {
  const options = {
    animationEnabled: true,
    data: [{
      type: "doughnut",
      showInLegend: false,
      indexLabel: "{name} {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "Unsatisfied", y: 5 },
        { name: "Very Unsatisfied", y: 31 },
        { name: "Very Satisfied", y: 40 },
        { name: "Satisfied", y: 17 },
        { name: "Neutral", y: 7 }
      ]
    }]
  }
  return (
    <div>
			<CanvasJSChart options = {options} />
		</div>
  )
}

export default ChartCircleAlerts 