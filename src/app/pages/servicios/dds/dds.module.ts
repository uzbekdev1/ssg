import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DdsComponent } from './dds.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


export const routes = [
  { path: '', component: DdsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    NgbModule
  ],
  declarations: [
    DdsComponent,
  ]
})
export class DdsModule { }
