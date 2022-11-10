import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";
  form!: FormGroup; 

  //Injeção de dependência -
  constructor(private formBuilder: FormBuilder){ 
    this.form = formBuilder.group({
      img: ['', [Validators.required,Validators.minLength(5)]],
      titulo: ['', [Validators.required,Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
  }

  //Método usado no formGroup (data driven)
  cadastro(){
    alert("Cadastrado com sucesso");
    console.log(this.form);
  }



  //Modo usado no ngForn (template driven)
  /*cadastrar(bastao:any){
    console.log(bastao.value);
  }*/

}
