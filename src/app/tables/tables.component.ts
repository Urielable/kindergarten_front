import {Component, Input, OnInit} from '@angular/core';
import { ActivityLogService } from "../services/activity-log.service";
import {ActivityLogs} from "../shared/models/ActivityLogs";
import {CatalogsService} from "../services/catalogs.service";
import {Catalogs} from "../shared/models/catalogs";

declare var $: any;

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  baby_id:any;
  assistant_id:any;
  status:any;
  p:number = 1;
  activityLogs : ActivityLogs[] = [];
  headers: any;
  index:any
  babiesCatalog : Catalogs[] = [];
  assistantsCatalog : Catalogs[] = [];
  statusCatalog : Catalogs[] = [];

  @Input() babySelectID:number;

  constructor(private activityLogService: ActivityLogService, private catalogService: CatalogsService) {
      this.headers = [ 'Bebé', 'Asistente', 'Actividad', 'Inicio', 'Estatus', 'Duración'];
      this.index = ['baby_name', 'assistant_name', 'activity_name', 'start_time', 'status', 'duration']
  }

  ngOnInit() {
      this.loadActivityLogsTable(0, 0, 0);
      this.loadAssistantsCatalog();
      this.loadBabiesCatalog();
      this.loadStatusCatalog();
  }

  loadActivityLogsTable(baby_id: any, assistant_id: any, status: any){
    this.activityLogService.getActivityLogs(baby_id, assistant_id, status).then((responseActivityLog: any) => {
        this.activityLogs = responseActivityLog['activities'];
    }).catch((errorGetDepositPaymentsSheet: any) => {
          console.log(errorGetDepositPaymentsSheet);
    });
  }

  loadBabiesCatalog(){
     this.catalogService.getBabiesCatalog().then((responseActivityLog: any) => {
         this.babiesCatalog = responseActivityLog['babies'];
     }).catch((errorGetDepositPaymentsSheet: any) => {
         console.log(errorGetDepositPaymentsSheet);
     });
  }

  loadAssistantsCatalog(){
    this.catalogService.getAssistantsCatalog().then((responseActivityLog: any) => {
        this.assistantsCatalog = responseActivityLog['assistants'];
    }).catch((errorGetDepositPaymentsSheet: any) => {
        console.log(errorGetDepositPaymentsSheet);
    });
  }


  loadStatusCatalog(){
    this.catalogService.getStatusCatalog().then((responseActivityLog: any) => {
        this.statusCatalog = responseActivityLog['status'];
    }).catch((errorGetDepositPaymentsSheet: any) => {
        console.log(errorGetDepositPaymentsSheet);
    });
  }

  advancedSearch(){
    let baby_id = $("#selectBabiesCatalog").children("option:selected").val();
    let assistant_id = $("#selectAssistanCatalog").children("option:selected").val();
    let status_id = $("#selectStatusCatalog").children("option:selected").val();
    this.loadActivityLogsTable(baby_id, assistant_id, status_id);
  }


}
