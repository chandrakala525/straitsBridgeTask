import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GetDataService } from '../services/get-data.service';
import _ from 'lodash';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-multi-line-graph',
  templateUrl: './multi-line-graph.component.html',
  styleUrls: ['./multi-line-graph.component.css']
})
export class MultiLineGraphComponent implements OnInit {

  constructor(private _getDataService: GetDataService) { }

  ngOnInit(): void {


  var margin = { top: 30, right: 30, bottom: 50, left: 30 };
  var width = 1100 - margin.left - margin.right;
  var height = 600 - margin.top - margin.bottom;

  var svg = d3.select("#line")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


  this._getDataService.getLineChartData().subscribe(res => {
    console.log(res);
    var data = res['GraphData'];
    // var data =  _.groupBy(res['GraphData'], 'Sc_OpenDate');
    // let objList = []
    // for (const key in data) {
    //   objList = [...objList, ...data[key]]
    // }
    // console.log(objList)
// const list  = ['01-2017', '01-2018', '01-2019', '01-2020']
    // res['GraphData'].forEach(obj => {

    // })

    // var data = res['GraphData'].map(d => {
    //   return {
    //     'Month': d.Month,
    //     'Y-Axis': d['Y-Axis'],
    //     'Sc_OpenDate16':res['GraphData'].filter()
    //     // 'Sc_OpenDate17':d['Y-Axis']
    //     // 'Sc_OpenDate18':d['Y-Axis']
    //     // 'Sc_OpenDate19':d['Y-Axis']
    //   }
    // });
    console.log(data);

    var x = d3.scaleBand()
    .range([0, width])
    .domain(data.map(function(d) { return d.Month; }))

    var y = d3.scaleLinear()
    .range([height, 0])
    .domain([d3.min(data.map(d => d['Y-Axis'])), d3.max(data.map(d => d['Y-Axis']))]);      

    var xAxis = d3
    .axisBottom(x)

    var yAxis = d3
    .axisLeft(y);

    svg.append('g')
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

    var valueline = d3.line<any>()
      // .curve(d3.curveCardinal)
      .x((d) => x(d['Month']))
      .y((d) => y(d['Y-Axis']));

    svg.append('path')
    .data([data])
    .attr("class", "line")
    .style("stroke", "black")
    .style('fill', 'none')
    .attr("d", valueline(data))
  });

  }

}
