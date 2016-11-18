import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//MODEL
import { Exercicio } from '../../models/exercicio';
import { Pessoa } from '../../models/pessoa';

//PROVIDER
import { ExercicioData } from '../../providers/exercicio-data';

//PAGE
import { PessoaListar } from '../pessoa-listar/pessoa-listar';

@Component({
  selector: 'page-exercicio-formulario',
  templateUrl: 'exercicio-formulario.html'
})
export class ExercicioFormulario {

  titulo = "Criando Exercício";
  exercicio = {};
  usuario = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public exercicioData: ExercicioData) 
  {
      var usuarioAux = navParams.get('usuario');
      this.usuario = usuarioAux;

      var exercicioAux = navParams.get('exercicio');

      if(exercicioAux != undefined){
        this.exercicio = exercicioAux;
        this.titulo = "Alterando Exercício";
      }
  }

  salvar(){
    
    if(!("_id" in this.exercicio)){

      console.log('create');

      console.log("USUARIO = ", this.usuario);
      this.exercicio["usuario"] = this.usuario["_id"];

      this.exercicioData.create(this.exercicio).subscribe(res => {
        this.navCtrl.push(PessoaListar, {});
      }, error => {
          console.log(error);
      });
      

    }else{

      console.log('update');

      this.exercicioData.update(this.exercicio).subscribe(res => {
        this.navCtrl.push(PessoaListar);
      }, error => {
          console.log(error);
      });

    }
  }
}
