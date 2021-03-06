import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

//MODEL
import {Pessoa} from '../../models/pessoa';

//PROVIDER
import { PessoaData } from '../../providers/pessoa-data';

//PAGINAS
import { PessoaFormulario } from '../pessoa-formulario/pessoa-formulario';
import { PessoaDetalhes } from '../pessoa-detalhes/pessoa-detalhes';

@Component({
  selector: 'page-pessoa-listar',
  templateUrl: 'pessoa-listar.html'
})
export class PessoaListar {

  itens: Pessoa[];

  constructor(
    public navCtrl: NavController,
    public pessoaData: PessoaData,
    public alertCtrl: AlertController
  ) {
    // Populate pessoas
    this.findAll();
  }

  getItems(ev: any) {

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.findAll();
    }
  }
  
  update(event, item){
    this.navCtrl.push(PessoaFormulario, {usuario: item});
  }

  delete(event, item){

    let confirm = this.alertCtrl.create({
      title: 'Removendo Usuário',
      message: 'Esta operação não poderá ser desfeita, deseja remover?',
      buttons: [
        {
          text: 'Não',
          handler: () => {}
        },
        {
          text: 'Sim',
          handler: () => {
            this.pessoaData.delete(item).subscribe( res => {
              this.navCtrl.push(PessoaListar);
            });
          }
        }
      ]
    });

    confirm.present();
  }
  
  findAll(){
    this.pessoaData.findAll().subscribe(pessoas => {
        this.itens = pessoas;
    });
  }

  goToCreateUsuario(){
    this.navCtrl.push(PessoaFormulario,{});
  }

  itemSelected(objeto){
      this.navCtrl.push(PessoaDetalhes, {
        objeto: objeto
      });
  }
}
