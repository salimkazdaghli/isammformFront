import { Component , OnInit , Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Formulaire } from 'src/app/models/formulaire.model';
import { Question } from 'src/app/models/question.model';
import {FormulaireService} from "../../services/formulaire.service";
import {ReponseService} from "../../services/reponse.service" ;
import { Reponse } from "../../models/reponse.model";

@Component({
  selector: 'app-reponse-new',
  templateUrl: './reponse-new.component.html',
  styleUrls: ['./reponse-new.component.css']
})
export class ReponseNewComponent  implements  OnInit{
  private sub: any;
  id!:number ;
  @Input() form!:Formulaire ;
  formulaire !: Formulaire ;
  reponseForm !: FormGroup;
  fields = [];
  reponse!:Reponse ;
  loading!:boolean;

  constructor(private route: ActivatedRoute ,
              private  formulaireService : FormulaireService ,
              private formBuilder : FormBuilder,
              private reponseService : ReponseService) {}

  ngOnInit() {
    this.loading=false ;
    this.id = this.route.snapshot.params["id"];
    if(this.id!==null){
      this.getFormulaire(this.id);
    }else {
      this.formulaire = this.form ;
    }
    /*
    this.reponseForm = this.formBuilder.group({
      253 : ['',Validators.required],
      254 : ['',Validators.required],
      255 : ['',Validators.required],
      256 : ['',Validators.required],
    });
     */

  }

  getFormulaire(id:number):void {
    this.formulaireService.get(id)
      .subscribe(
        data => {
          this.formulaire = data;
          let row : string ;
          row = '{' ;
          // @ts-ignore
          this.formulaire.questions.forEach((question) =>{
            // @ts-ignore
            row = row +'"'+question.id.toString()+'":[""],' ;
            // @ts-ignore
          })

          // @ts-ignore
          row = row.substr(0, row.length - 1);
          row = row + '}' ;
          this.reponseForm = this.formBuilder.group(JSON.parse(row));
          this.loading=true ;
        },
        error => {
          console.log(error);
        });
  }
  onSubmit(): void {
    //console.log(this.reponseForm.value);
    let values = this.reponseForm.value ;


    for (var value in values) {
      //console.log(value);
      //console.log(values[value.toString()]);
      const dataReponse = {
        options : [values[value.toString()]] ,
        question:{
          id : value
        }
      }
      this.reponseService.create(dataReponse).
        subscribe(data=>{
            console.log(data)
        },
        error=>{
            console.log(error);}
      )
      
    }
  }

}
