import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Formulaire } from 'src/app/models/formulaire.model';
import { Question } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';
import { FormulaireService } from '../../services/formulaire.service'

@Component({
  selector: 'app-formulaire-update',
  templateUrl: './formulaire-update.component.html',
  styleUrls: ['./formulaire-update.component.css']
})
export class FormulaireUpdateComponent implements OnInit {
  formulaireForm!: FormGroup ;
  id!:number ;
  submitted = false;
  loading = true ;
  formulaire!:Formulaire ;
  formQuestions!: Question[] ;
  questionsOptions !: string[] ;
  constructor(private formBuilder : FormBuilder ,
              private formulaireService :FormulaireService ,
              private  questionService : QuestionService ,
              private route : ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];

  }

  ngOnInit() : void{
    this.formulaireService.get(this.id)
      .subscribe(data=>{
          this.formulaire= data ;
          this.formInit();
        },
        error=>{
          console.log(error);
        })

  }
  formInit():void{
    // @ts-ignore
    this.formQuestions = this.formulaire.questions ;
    this.formulaireForm = this.formBuilder.group({
      titre: [this.formulaire.titre, Validators.required],
      description: [this.formulaire.description, Validators.required],
      questions:  this.formBuilder.array(this.formQuestions.map(value=>this.initQuestion(value))),
    });

    console.log('**************************')
    console.log(this.formulaireForm)
    this.loading=false ;
  }
  onSubmit(): void {

    // stop here if form is invalid
    if (this.formulaireForm.validator) {
      console.log("---form  ---");
      console.log(this.formulaireForm.value);
      console.log(this.formulaire);
      this.submitted=false;
      return;
    }
    this.loading = true;
    for(var i in this.formulaireForm.value.questions ){
      const questionData = this.formulaireForm.value.questions[i] ;
      if(questionData.id != null){
        this.questionService.update(questionData.id, questionData)
          .subscribe(data=> {
            console.log(data)
          },
          error=>{
            console.log(error)
          }
        )
      }else{
        questionData.formulaire={
          id : this.formulaire.id
        }
        this.questionService.create(questionData)
          .subscribe(
            data=>console.log(data)
          )
      }

    }

    if(this.formulaire.titre != this.formulaireForm.value.titre ||
      this.formulaire.description != this.formulaireForm.value.description){
      this.formulaireService.update(this.formulaire.id ,this.formulaireForm.value)
        .subscribe(
          response => {
            console.log(response)
            this.submitted = true;
            this.loading = false;

          },
          error => {
            console.log(error);
          });
    }else {
      this.submitted = true;
      this.loading = false ;
    }

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
  initQuestion(value : Question): FormGroup {
    // @ts-ignore
    this.questionsOptions = value.options ;
    return this.formBuilder.group({
      id : value.id ,
      titre: [value.titre , Validators.required ],
      reponseType : [value.reponseType , Validators.required ],
      options : this.formBuilder.array(this.questionsOptions),
      option :  ""
    })
  }
  newOption(): FormGroup {
    return  this.formBuilder.group({
      option:''
    })
  }

  initOption(opt : any): FormGroup {
    return  this.formBuilder.group({
      option:opt
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
