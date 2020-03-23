import React, { Component } from 'react';
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
	render() {
		let { data, contentQuestion, index, total } = this.props;
		let text = "Câu" + index + ": " + contentQuestion + " ( " + total + " câu trả lời )";
		const options = {
			theme: "dark2",
			animationEnabled: true,
			exportFileName: "surveyresult",
			exportEnabled: true,
			title: {
				text: text
			},
			axisY: {
				maximum: 100,
			},
			data: [
				{
					bevelEnabled: true,
					type: "column",
					legendText: "{label}",
					toolTipContent: "{label}: <strong>{y}%</strong>",
					indexLabel: "{y}%",
					indexLabelPlacement: "inside",
					dataPoints: data
				}
			]
		}
		return (
			<div>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
				<br></br>
			</div>
		);
	}
}
export default ColumnChart;