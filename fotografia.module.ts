import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/shared.module";
import { FormularioComponent } from "./formulario/formulario.component";

import { FotoComponent } from "./foto/foto.component";

import { InicioComponent } from "./inicio/inicio.component";

@NgModule({
    declarations: [
        FotoComponent,
        FormularioComponent,
        InicioComponent
    ],

    exports: [
        FotoComponent,
        FormularioComponent
    ],

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class FotografiaModule{}