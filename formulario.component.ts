import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  nameButton = "Cadastrar";
  form!: FormGroup; 

  //Injeção de dependência -
  //O constructor da classe será somente para injeção de dependência.
  constructor(
    private formBuilder: FormBuilder,
    private database: DatabaseService
    ){}

  ngOnInit(): void {
    //Carrega o método 
    this.validaForm();
  }

//Método de validação do formulário
validaForm(){
    this.form = this.formBuilder.group({
      imagem: ['', [Validators.required,Validators.minLength(5)]],
      titulo: ['', [Validators.required,Validators.minLength(3)]]
    });
   }

  //Método usado no formGroup (data driven)
  //JSON.stringify converte os dados para o formato json
  cadastro(){
    this.database.postFoto(this.form.value);
  }

  //Todo método pode ou não receber um parâmetro.
  //Modo usado no ngForn (template driven)
  /*cadastrar(bastao:any){
    console.log(bastao.value);
  }*/

}
