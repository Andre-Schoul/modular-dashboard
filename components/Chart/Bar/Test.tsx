import React, { useRef, useEffect } from 'react';

import { scaleBand, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { axisLeft, axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
//import { max } from 'd3-array';
//import * as d3 from 'd3';

import styles from '../Chart.module.scss';

const Chart = (props: { width: number; height: number; color: string; data: number[]; }) => {

  const ref = useRef(null);

  useEffect(() => {
    drawChart(props.width, props.height, data);
  });

  const drawChart = (width: number, height: number, data: { country: string, value: number}[]) => {
    // Set the dimensions and margins of the graph
    const margins = {top: 10, right: 0, bottom: 30, left: 40};
    width = width - margins.left - margins.right;
    height = height - margins.top - margins.bottom;
    // Append the svg object
    const svg = select(ref.current)
      .append('svg')
      .attr('width', width + margins.left + margins.right)
      .attr('height', height + margins.top + margins.bottom)
      .classed(styles.SvgContent, true)
      // Translate this svg element to leave some margin
      .append('g')
      .attr('transform', `translate(${margins.left}, ${margins.top})`);
    // x-scale & x-axis
    const x = scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map((d) => d.country));
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(axisBottom(x));
    // Calculate the highest value for the y-scale
    const highest = Math.max.apply(0, data.map(d => d.value));
    let highestLength = (highest + '').replace('.', '').length;
    highestLength > 2 ? highestLength -= 2 : highestLength -= 1;
    const highestValue = Math.ceil(highest / Math.pow(10, highestLength)) * Math.pow(10, highestLength);
    // y-scale & y-axis
    const y = scaleLinear()
      .domain([0, highestValue])
      .range([height, 0]);
    svg
      .append('g')
      .call(axisLeft(y));
    // Background-Lines
    svg
      .append('g')
      .attr('class', styles.Grid)
      .call(axisLeft(y)
      .tickSize(-width)
      .tickFormat(() => ''));
    // Bars
    svg
      .append('g')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', x.bandwidth())
      .attr('height', (_) => height - y(0))
      .attr('x', (d) => x(d.country) as number)
      .attr('y', (_) => y(0));
    // Bar value-labes
    svg
      .append('g')
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .classed('label', true)
      .text((d) => d.value)
      .attr('x', (d) => x(d.country) as number + x.bandwidth() / 2)
      .attr('y', (_) => y(0) - 10)
      .attr('text-anchor', 'middle');
    // Animation bars
    svg
      .selectAll('rect')
      .data(data)
      .transition()
      .duration(800)
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
      .delay((_d, i) => (i * 100));
    // Animation bar value-labes
    svg
      .selectAll('.label')
      .data(data)
      .transition()
      .duration(800)
      .attr('y', data => y(data.value) - 10)
      .delay((_, i) => (i * 100));
  }

  return (<div className={styles.Chart}><div ref={ref}></div></div>); 
}

export default Chart;


const data = [
  { country: 'United States', value: 12394 },
  { country: 'Russia', value: 6148 },
  { country: 'Germany', value: 1653 },
  { country: 'France', value: 2162 },
  { country: 'United Kingdom', value: 1214 },
  { country: 'China', value: 1131 },
  { country: 'Spain', value: 814 },
  { country: 'Netherlands', value: 1167 },
  { country: 'Italy', value: 660 },
  { country: 'Israel', value: 1263 },
  { country: 'Greece', value: 12394 },
  { country: 'Japan', value: 6148 },
  { country: 'Uruguay', value: 1653 },
  { country: 'Argentina', value: 2162 },
  { country: 'Ecuador', value: 1214 },
  { country: 'Sout Africa', value: 1131 },
  { country: 'Sweden', value: 814 },
  { country: 'Greenland', value: 1167 },
  { country: 'Iceland', value: 660 },
  { country: 'Iraq', value: 1263 }
];

