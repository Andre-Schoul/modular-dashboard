import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";

import styles from '../Chart.module.scss';

const Chart = (props: { width: number; height: number; color: string; data: number[]; }) => {

  const ref = useRef(null);

  useEffect(() => {
    drawChart(props.width, props.height, data);
  });

  const drawChart = (width: number, height: number, data: any) => {
    /*const margin = 40;
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;
    // Chart
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      // Set color scale
      const color = d3
        .scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])
      // Compute the position of each group on the pie
      const pie = d3
        .pie()
        .value((d: any) => d.value)
      const data_ready = pie(d3.entries(data));
      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
        .selectAll('whatever')
        .data(data_ready)
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(0)
          .outerRadius(radius)
          .startAngle(45 * (Math.PI/180)) //converting from degs to radians
          .endAngle(3))
        .attr('fill', (d: any) => { return(color(d.data.key)) })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7)*/
    }

  return (
    <div className={styles.Chart}><div ref={ref}></div></div>
  ); 
}

export default Chart;


const data = { a: 9, b: 20, c: 30, d: 8, e: 12 };
