import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})

export class GraficoDonaComponent implements OnInit {

  @Input() chartData: any;

  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  public leyenda: string;

  constructor() { }

  ngOnInit() {
    this.doughnutChartLabels = this.chartData.labels;
    this.doughnutChartData = this.chartData.data;
    this.leyenda = this.chartData.leyenda;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
