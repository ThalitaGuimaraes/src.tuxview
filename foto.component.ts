import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

import { Fotos } from './foto';
import { DatabaseService } from '../../service/database.service';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{
nameButton = "Fotos Pares";
titulo = "Minhas Fotos";
control = true;

//Criar um array de objetos para as fotos
imagens: Fotos[] = [];

constructor(private database: DatabaseService){}

ngOnInit(){
  this.database.getFoto().subscribe(caixa => this.imagens = caixa);
}

  //Método deletar - Apaga uma foto em nossa web api
  deletar(id:number){
   this.database.delFoto(id);
  }
;
    mudar(){
      this.control = !this.control;

    if(this.nameButton == "Todas Imagens" ){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton = "Todas Imagens";
    }
}
}