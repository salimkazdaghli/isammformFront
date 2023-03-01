import { Component, OnInit } from '@angular/core';
import {FormulaireService} from "../../services/formulaire.service";
import {QuestionService } from "../../services/question.service";
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-formulaire-new',
  templateUrl: './formulaire-new.component.html',
  styleUrls: ['./formulaire-new.component.css']
})
export class FormulaireNewComponent implements OnInit{

  formulaireForm!: FormGroup ;

  submitted = false;
  loading = false ;

  ngOnInit() : void{
    this.formulaireForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      questions: this.formBuilder.array([]),
    });

  }
  constructor(private formBuilder : FormBuilder , private formulaireService :FormulaireService , private  questionService : QuestionService) {
  }

  onSubmit(): void {

    // stop here if form is invalid
    if (this.formulaireForm.validator) {
      console.log("---form invalid ---");
      this.submitted=false;
      return;
    }

    this.loading = true;
    this.formulaireService.create(this.formulaireForm.value)
      .subscribe(
        response => {
          console.log(response)
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  get questions() : FormArray {
    return this.formulaireForm.get("questions") as FormArray
  }
  get options() : FormArray{
    const data = this.formulaireForm.get("questions") as FormArray;
    return data.value[0].options as FormArray
  }

  optionsData(id : number){
    const data = this.formulaireForm.get("questions") as FormArray;
    return data.value[id].options ;
  }

  newQuestion(): FormGroup {
    return this.formBuilder.group({
      titre: '',
      reponseType : '',
      options : this.formBuilder.array([]),
      option :  ""
    })
  }
  newOption(): FormGroup {
    return  this.formBuilder.group({
      option:''
    })
  }

  addQuestions() {
    this.questions.push(this.newQuestion());
  }

  addOptions(id:number){
    console.log('----option -----')
    console.log(this.formulaireForm.value );
    const data = this.formulaireForm.get("questions") as FormArray;
    (data.value[id].options as FormArray).push(this.formulaireForm.value.questions[id].option );

  }

  removeQuestion(i:number) {
    this.questions.removeAt(i);
  }
  removeOption(i:number){
    this.options.removeAt(i);
  }

  newFormulaire(): void {
    this.submitted = false;
  }


}
