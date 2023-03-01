import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FormulaireListComponent } from './components/formulaire-list/formulaire-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormulaireNewComponent } from './components/formulaire-new/formulaire-new.component';
import { ReponseNewComponent } from './components/reponse-new/reponse-new.component';
import { FormulaireUpdateComponent } from './components/formulaire-update/formulaire-update.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FormulaireListComponent,
    FormulaireNewComponent,
    ReponseNewComponent,
    FormulaireUpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{

}
