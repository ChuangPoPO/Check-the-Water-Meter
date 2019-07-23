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
  editMode: boolean = false;

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
    this.editMode = false;
    this.setDataForm(data);
    this.sidenav.open();
  }

  // 編輯虛擬機器資料
  edit() {
    console.info('edit');
    this.editMode = true;
    this.dataForm.enable();
  }

  // 將資料儲存，重新選染表單成新資料
  save(data: MeterElement) {
    console.info('save: ', data);
    this.editMode = false;
    // TODO: save new data into reactiveForm
    this.dataForm.disable();
  }

  private createForm() {
    this.dataForm = this.fb.group({
      ip: [{value: null, disabled: true}],
      hostname: [{value: null, disabled: true}],
      username: [{value: null, disabled: true}],
      phrase: [{value: null, disabled: true}],
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
