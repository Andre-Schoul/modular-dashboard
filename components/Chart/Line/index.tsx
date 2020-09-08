import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";

import styles from '../Chart.module.scss';

const Chart = (props: { width: number; height: number; color: string; data: number[]; }) => {

  const ref = useRef(null);

  useEffect(() => {
    drawChart(props.width, props.height, props.color, data);
  });

  const drawChart = (width: number, height: number, color: string, data: { date: string, value: number}[]) => {
    const margins = { top: 20, right: 10, bottom: 10, left: 10 };
    width = width - margins.left - margins.right;
    height = height - margins.top - margins.bottom;
    // Append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margins.left + margins.right)
      .attr("height", height + margins.top + margins.bottom)
      .append("g")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([ 0, width ]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => +d.value)])
      .range([ height, 0 ]);
    svg
      .append("g")
      .call(d3.axisLeft(y));
    // Add the area
    svg
      .append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", d3.area()
        .x((d) => x(d.date))
        .y0(y(0))
        .y1((d) => y(d.value)))
  }

  return (<div className={styles.Chart}><div ref={ref}></div></div>); 
}

export default Chart;

const convertData = (d: { date: string; value: any; }) => {
  return { date : d3.timeParse("%Y-%m-%d")(d.date), value : d.value }
}

let data = [
  { date: '2013-04-28', value: 135.98 },
  { date: '2013-04-29', value: 147.49 },
  { date: '2013-04-30', value: 146.93 },
  { date: '2013-05-01', value: 139.89 },
  { date: '2013-05-02', value: 125.6  },
  { date: '2013-05-03', value: 108.13 }
];

data.map(entry => convertData(entry));