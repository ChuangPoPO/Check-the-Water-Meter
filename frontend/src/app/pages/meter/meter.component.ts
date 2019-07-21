import { Component, OnInit, ViewChild } from '@angular/core';
import { MeterDataService } from '../../@core/data/meter-data.service';
import { MatSidenav } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss'],
})
export class MeterComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  displayedColumns = ['ip', 'hostname', 'detail'];
  dataSource;
  detailData: MeterElement;
  dataForm: FormGroup;

  constructor(private meterService: MeterDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.meterService.getDate().subscribe(data => {
      this.dataSource = data;
    });
  }

  onDetail(data: MeterElement) {
    this.detailData = Object.assign(data);
    this.setDataForm(data);
    this.sidenav.open();
  }

  private createForm() {
    this.dataForm = this.fb.group({
      ip: [null],
      hostname: [null],
      username: [null],
      phrase: [null],
    });
  }

  private setDataForm(data: MeterElement) {
    this.dataForm.reset({
      ip: data.ip,
      hostname: data.hostname,
      username: data.username,
      phrase: data.phrase,
    });
  }
}

export interface MeterElement {
  ip: string;
  hostname: string;
  username: string;
  phrase: string;
}
