import{select,settings,classNames}from"../settings.js";import dataSource from"../data.js";class StatChart{constructor(){this.getData(),this.initPlugin(),this.renderLegend(),this.initActions()}getData(){const t=settings.chart.colors;let e=0;const a=[],s=[];for(let r in dataSource.stats){const n=dataSource.stats[r],d={label:n.label,backgroundColor:t[e],borderColor:t[e],data:[]};for(let t in n.data){let e=n.data[t];d.data.push(e);const a=this.prepareLabel(t);s.includes(a)||s.push(a)}e++,a.push(d)}this.data={labels:s,datasets:a}}prepareLabel(t){let e=t.toString();return t<10&&(e="0"+e),e}initPlugin(){const t=document.querySelector(select.statistics.chartcontext).getContext("2d");this.myBar=new Chart(t,{type:"bar",data:this.data,options:{responsive:!0,legendCallback:function(t){let e=[];e.push("<ul>");for(let a=0;a<t.data.datasets.length;a++)e.push('<li data-index="'+a+'">'),e.push('<span style="background-color:'+t.data.datasets[a].backgroundColor+'"></span>'+t.data.datasets[a].label),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{display:!1},title:{display:!1}}})}renderLegend(){const t=this.myBar.generateLegend();this.dom={},this.dom.legendWrapper=document.querySelector(select.statistics.legendWrapper),this.dom.legendWrapper.innerHTML=t,this.dom.legendButtons=this.dom.legendWrapper.querySelectorAll(select.statistics.legendButtons);for(let t of settings.chart.hiddenDefault)this.filterData(this.dom.legendButtons[t])}initActions(){this.dom.legendWrapper.addEventListener("click",t=>{"LI"===t.target.tagName&&this.filterData(t.target)})}filterData(t){let e=t.dataset.index,a=this.myBar.getDatasetMeta(e);a.hidden=null===a.hidden?!this.myBar.data.datasets[e].hidden:null,this.myBar.update(),t.classList.toggle(classNames.chart.datasetHidden,a.hidden)}}export default StatChart;