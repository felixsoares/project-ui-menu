import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//MODEL
import { Pessoa } from '../../models/pessoa';

//PROVIDER
import { PessoaData } from '../../providers/pessoa-data';

//PAGE
import { PessoaListar } from '../pessoa-listar/pessoa-listar';

@Component({
  selector: 'page-pessoa-formulario',
  templateUrl: 'pessoa-formulario.html'
})
export class PessoaFormulario {

  usuario = {};
  titulo = "Adicionando Usuario";

  constructor(public navCtrl: NavController, public navParams: NavParams, public pessoaData: PessoaData) {
      var usuarioAux = navParams.get('usuario');

      if(usuarioAux != undefined){
        this.usuario = usuarioAux;
        this.titulo = "Alterando Usuario";
      }
  }

  salvar(){
    
    if(!("_id" in this.usuario)){

      console.log('create');

      this.pessoaData.create(this.usuario).subscribe(res => {
        this.navCtrl.push(PessoaListar, {});
      }, error => {
          console.log(error);
      });
      

    }else{

      console.log('update');

      this.pessoaData.update(this.usuario).subscribe(res => {
        this.navCtrl.push(PessoaListar);
      }, error => {
          console.log(error);
      });

    }
  }

}
