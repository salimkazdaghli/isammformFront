import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireListComponent } from '../components/formulaire-list/formulaire-list.component';
import { FormulaireNewComponent } from '../components/formulaire-new/formulaire-new.component';
import { FormulaireUpdateComponent } from '../components/formulaire-update/formulaire-update.component';
import { ReponseNewComponent } from '../components/reponse-new/reponse-new.component';

const routes: Routes = [
  { path: 'formulaires', component: FormulaireListComponent  },
  { path: 'formulaire' , component : FormulaireNewComponent },
  { path:'formulaire/:id/reponse' , component: ReponseNewComponent},
  { path: 'formulaire/:id' , component: FormulaireUpdateComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
