import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


//IMPORTAR PROVIDERS HERE
import { PessoaData } from '../providers/pessoa-data';
import { ExercicioData } from '../providers/exercicio-data';

//IMPORTAR PAGINAS
import { PessoaListar } from '../pages/pessoa-listar/pessoa-listar';
import { PessoaFormulario } from '../pages/pessoa-formulario/pessoa-formulario';
import { PessoaDetalhes } from '../pages/pessoa-detalhes/pessoa-detalhes';
import { ExercicioFormulario } from '../pages/exercicio-formulario/exercicio-formulario';

@NgModule({
  //ADICIONA PÁGINAS AQUI
  declarations: [
    MyApp,
    Page1,
    Page2,
    PessoaListar,
    PessoaFormulario,
    PessoaDetalhes,
    ExercicioFormulario
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  //ADICIONA PÁGINAS AQUI
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    PessoaListar,
    PessoaFormulario,
    PessoaDetalhes,
    ExercicioFormulario
  ],
  //ADICIONA PROVIDERS AQUI
  providers: [PessoaData, ExercicioData]
})
export class AppModule {}
