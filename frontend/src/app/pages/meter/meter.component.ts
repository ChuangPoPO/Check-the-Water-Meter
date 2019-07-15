import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {

  displayedColumns = ['ip', 'hostname', 'detail'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  ip: string;
  hostname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ip: '192.168.1.1', hostname: 'host_H' },
  { ip: '192.168.1.2', hostname: 'host_He' },
  { ip: '192.168.1.3', hostname: 'host_Li' },
  { ip: '192.168.1.4', hostname: 'host_Be' },
  { ip: '192.168.1.5', hostname: 'host_B' },
  { ip: '192.168.1.6', hostname: 'host_C' },
  { ip: '192.168.1.7', hostname: 'host_N' },
  { ip: '192.168.1.8', hostname: 'host_O' },
  { ip: '192.168.1.9', hostname: 'host_F' },
  { ip: '192.168.1.10', hostname: 'host_Ne' },
];
