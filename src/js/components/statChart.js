import {select, settings} from '../settings.js';
import dataSource from '../data.js';

class StatChart {
  constructor() {
    this.getData();
    this.initPlugin();
    this.renderLegend();
    this.getElements();
  }

  getData(){
    const colors = settings.chart.colors;

    let colorNbr = 0;
    const datasets = [];
    const labels = [];

    for (let dataset in dataSource.stats) {
      const dataToParse = dataSource.stats[dataset];
      const chartSet = {
        label: dataToParse.label,
        backgroundColor: colors[colorNbr],
        borderColor: colors[colorNbr],
        data: [],
      };

      for (let property in dataToParse.data) {
        let value = dataToParse.data[property];
        chartSet.data.push(value);
        const label = this.prepareLabel(property);
        if (!labels.includes(label)) {labels.push(label);}
      }

      colorNbr++;
      datasets.push(chartSet);
    }

    this.data = {
      labels: labels,
      datasets: datasets,
    };
  }

  prepareLabel(int) {
    let label = int.toString();
    if (int < 10) {
      label = '0' + label;
    }
    return label;
  }

  initPlugin() {
    const context = document.querySelector(select.chart.context).getContext('2d');

    // eslint-disable-next-line no-undef
    this.myBar = new Chart(context, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      }
    });
  }

  renderLegend() {
    const legendHTML = this.myBar.generateLegend();
    this.legendWrapper = document.querySelector(select.chart.legendWrapper);
    this.legendWrapper.innerHTML = legendHTML;
  }

  getElements(){

  }
}

export default StatChart;
