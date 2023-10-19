import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Contacto } from '../contacto';

import { ContactosService } from '../services/contactos.service';

@Component({
  selector: 'app-nuevocontacto',
  templateUrl: './nuevocontacto.page.html',
  styleUrls: ['./nuevocontacto.page.scss'],
})
export class NuevocontactoPage implements OnInit {

  nuevoContacto = {} as Contacto;

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,

    private contactosService: ContactosService,

    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  nuevo(nuevoContacto: any){
    this.mostrarMensaje('Guardando...');
    this.contactosService.crearNuevo(this.nuevoContacto).then(() => {
      this.router.navigateByUrl('tabs/contactos');
      this.mostrarMensaje('Contacto Registrado');
    }, err => {
      this.mostrarMensaje('Hubo un error:');
    });

  }

  mostrarMensaje(mensaje: string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).then(toast => toast.present());
  }

}
