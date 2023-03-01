import { Component , OnInit } from '@angular/core';
import {Formulaire} from "../../models/formulaire.model";
import {FormulaireService} from "../../services/formulaire.service";

@Component({
  selector: 'app-formulaire-list',
  templateUrl: './formulaire-list.component.html',
  styleUrls: ['./formulaire-list.component.css']
})
export class FormulaireListComponent  implements OnInit{

  formulaires?: Formulaire[] ;
  constructor(private formulaireService: FormulaireService) { }

  ngOnInit() {
    this.retrieveFormulaires();
  }
  retrieveFormulaires(): void {
    this.formulaireService.getAll()
      .subscribe(
        data => {
          this.formulaires = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
