import { Component, OnInit } from '@angular/core';
import { MeterDataService } from '../../@core/data/meter-data.service';

@Component({
  selector: 'ngx-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {

  displayedColumns = ['ip', 'hostname', 'detail'];
  dataSource ;

  constructor(private meterService: MeterDataService) { }

  ngOnInit() {
    this.meterService.getDate().subscribe(data => {
      this.dataSource = data;
      console.info('Datasource: ', this.dataSource);
    });
  }
}

export interface MeterElement {
  ip: string;
  hostname: string;
  username: string;
  phrase: string;
}
