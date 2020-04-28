import {Component, OnInit, ViewChild} from '@angular/core';
import {GraphsService} from "../services/graphs.service";
import { Chart } from 'chart.js';
import {Catalogs} from "../shared/models/catalogs";
import {CatalogsService} from "../services/catalogs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public activityDurations:[]=[];
  public babyActivities:[]=[];
  babiesCatalog : Catalogs[] = [];

  constructor(private graphsService: GraphsService, private catalogService: CatalogsService) {}

  @ViewChild('lineChart') private chartRef;
  chart: any;
  @ViewChild('radar') private chartRadarRef;
  chartRadar: any;

  ngOnInit() {
    this.activityDurationSeries();
    this.loadBabiesCatalog();
  }

  activityDurationSeries(){
    this.graphsService.getActivityDurations().subscribe((data: any) => {
      this.activityDurations = data['series'];
      this.loadGraph();
    });
  }

  babyActivitiesSeries(baby_id: any){
    this.graphsService.getBabyActivities(baby_id).subscribe((data: any) => {
      this.babyActivities = data['series'];
    });
  }

  loadBabiesCatalog(){
    this.catalogService.getBabiesCatalog().then((responseActivityLog: any) => {
      this.babiesCatalog = responseActivityLog['babies'];
    }).catch((errorGetDepositPaymentsSheet: any) => {
      console.log(errorGetDepositPaymentsSheet);
    });
  }

  loadRadarGraph(value:any){
    console.log('baby activity');
    console.log(value)
    this.babyActivitiesSeries(value);
    console.log(this.babyActivities);
    this.chartRadar = new Chart(this.chartRadarRef.nativeElement, {
      type: 'radar',
      data: {
        labels: this.babyActivities,
        datasets: [
          {
            data: this.babyActivities
          }
        ]
      },
      options: {
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 10,
            suggestedMax: 80
          }
        }
      }
    });
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
