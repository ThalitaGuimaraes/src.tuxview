import { Component } from "@angular/core";

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{

titulo = "Minhas Fotos";

imagens = [
    {imagem: "https://cdn.pixabay.com/photo/2022/08/31/10/20/buttercup-7422987__340.jpg",titulo:"Flor amarela"},
    {imagem: "https://cdn.pixabay.com/photo/2022/09/01/04/40/anemone-7424709__340.jpg",titulo:"Flor verde"},
    {imagem: "https://cdn.pixabay.com/photo/2022/08/01/13/20/lily-of-the-valley-7358144__340.jpg",titulo:"Flor branca"},
    {imagem: "https://cdn.pixabay.com/photo/2022/10/10/06/12/yellow-flower-7510901__340.jpg",titulo:"Flor colorida"},
    {imagem: "https://cdn.pixabay.com/photo/2022/08/11/09/53/hummingbird-hawk-moth-7379059__340.jpg",titulo:"Flor vermelha"},
    {imagem: "https://cdn.pixabay.com/photo/2022/09/15/09/47/sunflower-7456101__340.jpg",titulo:"Girassol"},
  ];
  
  par(){
    if(this.titulo == "Minhas Fotos"){
      this.titulo = "Minhas Imagens";
    }else{
      this.titulo = "Minhas Fotos";
    }
    }
  }
  