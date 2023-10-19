import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';
import { ContactosService } from '../services/contactos.service';

import { NavController, LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  contactos$: Contacto[];

  constructor(
    private contactosService: ContactosService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private router: Router,
    private toastCtrl: ToastController,
    // private contactos: Observable<Contacto[]>,
  ) { 
    this.contactos$ = [];
  }

  ngOnInit() {
  }

  async getContactos(): Promise<void> {
    (await this.contactosService.getContactos()).subscribe((contactos) => {
      this.contactos$ = contactos;
    });
  }

  ionViewDidEnter() {
    this.getContactos();
  }

  async selectContacto(contacto: any){
    let actionSheet = await this.actionSheetCtrl.create({
      header: "Que desea hacer?",
      buttons:[
        {
          text: "Borrar contacto",
          role: "destructive",
          handler:() => {
            this.borrar(contacto);
          }
        },
        {
          text: "Modificar contacto",
          handler:() =>{
            this.editar(contacto);
          }
        },
        {
          text: "Cancelar",
          role: "cancel",
          handler:() =>{
            console.log('cancelado');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async borrar(contacto: any){
    const alert = await this.alertCtrl.create({
      header: "Borrar!",
      message: "Seguro?",
      buttons: [
        {
          text: "Si",
          handler:()=>{
            this.contactosService.borrarContacto(contacto);
            this.getContactos();
            this.mostrarMensaje("Contacto eliminado!");
          }
        },
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary"
        }
      ]
    });
    await alert.present();
  }

  mostrarMensaje(mensaje: string){
    this.toastCtrl.create({
      message: mensaje,
      duration:2000
    }).then(toast => toast.present());
  }

  async editar(contacto: any){
    this.router.navigate(["tabs/editarcontacto", contacto]);
  }
}
