import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { MeterComponent } from './meter.component';

@NgModule({
  declarations: [MeterComponent],
  imports: [
    ThemeModule,
    CommonModule,
  ],
})
export class MeterModule { }
