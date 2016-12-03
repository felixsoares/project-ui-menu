import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { AlertController } from 'ionic-angular';

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

  imagem:string = "";

  usuario = {
    nome: "",
    idade: "",
    altura: "",
    peso: "",
    imagem: "https://www.outsystems.com/PortalTheme/img/UserImage.png?24860"
  };
  titulo = "Adicionando Usuario";

  constructor(public navCtrl: NavController, public navParams: NavParams, public pessoaData: PessoaData, public alertCtrl: AlertController) {
      var usuarioAux = navParams.get('usuario');

      if(usuarioAux != undefined){
        this.usuario = usuarioAux;
        this.titulo = "Alterando Usuario";
        this.imagem = usuarioAux.imagem;
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

  abrirCamera(){

    Camera.getPicture().then((imageData) => {

      this.imagem = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      let alert = this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Erro ao tentar capturar a foto, tente novamente!',
        buttons: ['OK']
      });
      alert.present();
    });

  }

}
