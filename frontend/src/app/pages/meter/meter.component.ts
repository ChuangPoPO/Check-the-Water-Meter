import { Component, OnInit, ViewChild } from '@angular/core';
import { MeterDataService } from '../../@core/data/meter-data.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'ngx-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  displayedColumns = ['ip', 'hostname', 'detail'];
  dataSource ;
  detailData: MeterElement;

  constructor(private meterService: MeterDataService) { }

  ngOnInit() {
    this.meterService.getDate().subscribe(data => {
      this.dataSource = data;
    });
  }

  onDetail(data: object) {
    this.detailData = Object.assign(data);
    console.info(this.detailData);

    this.sidenav.open();
  }
}

export interface MeterElement {
  ip: string;
  hostname: string;
  username: string;
  phrase: string;
}
