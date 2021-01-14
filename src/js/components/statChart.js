import {select, settings} from '../settings.js';
import dataSource from '../data.js';

class StatChart {
  constructor() {
    this.getData();
    this.initPlugin();
    this.renderLegend();
    this.initActions();
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
        legendCallback: function(chart) {
          console.log(chart.data.datasets);
          let text = [];
          text.push('<ul>');
          for (let i=0; i<chart.data.datasets.length; i++) {
            text.push('<li data-index="' + i + '">');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>' + chart.data.datasets[i].label );
            text.push('</li>');
          }
          text.push('</ul>');
          return text.join('');
        },
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

  initActions(){
    this.legendWrapper.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI'){
        // console.dir(event.target);
        this.filterData(event.target.textContent);
      }
    });
  }

  filterData(labelName) {
    const filter = labelName.toLowerCase();
    // let meta = this.myBar.getDatasetMeta(filter);
    // console.log(this.myBar.data.datasets[2]);
    // meta.hidden = meta.hidden === null ? !this.myBar.data.datasets[filter].hidden : null;
    // this.myBar.update();
  }
}

export default StatChart;
