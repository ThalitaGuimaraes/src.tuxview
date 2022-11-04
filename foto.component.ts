import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{
nameButton = "Fotos Pares";
titulo = "Minhas Fotos";
control = true;

imagens = [];

constructor (private joao: HttpClient) {
   joao.get('http://localhost:3000/fotos')
}

  mudar(){

    this.control = !this.control;
    
    if(this.nameButton == "Todas Imagens" ){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton = "Todas Imagens";
    }
    }
  }
  