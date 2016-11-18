import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

//MODEL
import { Pessoa } from '../../models/pessoa';

//PAGINAS
import { PessoaListar } from '../pessoa-listar/pessoa-listar';
import { PessoaFormulario } from '../pessoa-formulario/pessoa-formulario';
import { ExercicioFormulario } from '../exercicio-formulario/exercicio-formulario';

//PROVIDER
import { PessoaData } from '../../providers/pessoa-data';
import { ExercicioData } from '../../providers/exercicio-data';

@Component({
  selector: 'page-pessoa-detalhes',
  templateUrl: 'pessoa-detalhes.html'
})
export class PessoaDetalhes {

  usuario = {};
  exercicios = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public pessoaData: PessoaData, public exercicioData: ExercicioData) {
      this.usuario = navParams.get('objeto');

      this.loadExercicios();
  }

  editExercicio(event, item){
    this.navCtrl.push(ExercicioFormulario, {exercicio: item});
  }

  removerExercicio(event, item){
    this.exercicioData.delete(item).subscribe( res => {
      this.navCtrl.push(PessoaListar);
    });
  }

  goToCreateExercicio(){
    this.navCtrl.push(ExercicioFormulario, {usuario: this.usuario});
  }

  loadExercicios(){
    this.exercicioData.findByUser(this.usuario["_id"]).subscribe( res => {
        this.exercicios = res;
    });
  }

}
