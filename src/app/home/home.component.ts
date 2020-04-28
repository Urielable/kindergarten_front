import {Component, OnInit, ViewChild} from '@angular/core';
import {GraphsService} from "../services/graphs.service";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public activityDurations:[]=[];

  constructor(private graphsService: GraphsService) {}

  @ViewChild('lineChart') private chartRef;
  chart: any;

  activityDurationSeries(){
    this.graphsService.getActivityDurations().subscribe((data: any) => {
      this.activityDurations = data['series'];
      this.loadGraph();
    });
  }

  ngOnInit() {
    this.activityDurationSeries()
  }

  loadGraph(){
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.activityDurations,
        datasets: [
          {
            data: this.activityDurations,
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }


}
