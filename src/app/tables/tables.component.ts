import { Component, OnInit } from '@angular/core';
import { ActivityLogService } from "../services/activity-log.service";
import {ActivityLogs} from "../shared/models/ActivityLogs";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
    baby_id:any=null;
    assistant_id:any=null;
    status:any=null;
    p:number = 1;
    activityLogs : ActivityLogs[] = [];
    headers: any;
    index:any

  constructor(private activityLogService: ActivityLogService) {
      this.headers = [ 'Bebé', 'Asistente', 'Actividad', 'Inicio', 'Estatus', 'Duración'];
      this.index = ['baby_name', 'assistant_name', 'activity_name', 'start_time', 'status', 'duration']
  }

  ngOnInit() {
      this.loadActivityLogsTable();
  }

  loadActivityLogsTable(){
    this.activityLogService.getActivityLogs(this.baby_id, this.assistant_id, this.status).then((responseActivityLog: any) => {
        this.activityLogs = responseActivityLog['activities'];
    }).catch((errorGetDepositPaymentsSheet: any) => {
          console.log(errorGetDepositPaymentsSheet);
    });
  }

}
