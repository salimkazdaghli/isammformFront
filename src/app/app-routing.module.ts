import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {FormulaireListComponent} from "./components/formulaire-list/formulaire-list.component";
import {FormulaireNewComponent} from "./components/formulaire-new/formulaire-new.component" ;
import {ReponseNewComponent} from "./components/reponse-new/reponse-new.component";
import * as path from "path";
import { FormulaireUpdateComponent } from './components/formulaire-update/formulaire-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/formulaires', pathMatch: 'full' },
  { path: 'dashboard' ,
    component: DashboardComponent,
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      )
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    })
  ]
})
export class AppRoutingModule { }
