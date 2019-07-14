import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MeterComponent } from './meter.component';

@NgModule({
  declarations: [MeterComponent],
  imports: [
    ThemeModule,
  ],
})
export class MeterModule { }
