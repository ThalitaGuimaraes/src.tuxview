import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

import { Fotos } from './foto';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{
nameButton = "Fotos Pares";
titulo = "Minhas Fotos";
control = true;

imagens: Fotos[] = [];

constructor (private http: HttpClient){
   http.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixa => this.imagens = caixa)
}


  mudar(){

    this.control = !this.control;
    
    if(this.nameButton == "Todas Imagens" ){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton = "Todas Imagens";
    }
    }

    deletar(id:number){
      this.http.delete('http://localhost:3000/fotos/' + id).subscribe();
    }
}