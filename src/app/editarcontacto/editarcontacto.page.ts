import { Component, OnInit } from '@angular/core';

import { ContactosService } from '../services/contactos.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.page.html',
  styleUrls: ['./editarcontacto.page.scss'],
})
export class EditarcontactoPage implements OnInit {

  id: any; 
  seleccionado! : Contacto;

  constructor(
    private contactosService: ContactosService,
    private route: ActivatedRoute,
    private nav: NavController,
    private loadingController: LoadingController,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.route.params.forEach(async (params: Params)=>{
      (await this.contactosService.getContactoById(params['id'])).subscribe((seleccionado)=>{
        this.id = params['id'];
        this.seleccionado = seleccionado!;
      })
    })
  }

  regresar(): void{
    this.router.navigate(['tabs/contactos']);
  }

  editar():void{
    this.contactosService.editarContacto(this.seleccionado, this.id).then(()=>{
      this.mostrarMensaje('Contacto actualizado');
      this.regresar();
    }, err=>{
      this.mostrarMensaje('Hubo un error');
    });
  }

  mostrarMensaje(mensaje: string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).then(toast=>toast.present());
  }

}
