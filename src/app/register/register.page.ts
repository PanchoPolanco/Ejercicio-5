import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuario } from '../usuario';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = {} as Usuario;

  constructor(
    public autenticar: AutenticacionService,
    public toastCtrl: ToastController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  register(usuario:Usuario){
    this.autenticar.registerUser(usuario.correo, usuario.contrasenia)
    .then ((resultado:any) => {
      this.mostrarMensaje('Usuario registrado');
      this.router.navigate(['./login']);
    }, err =>{
      this.mostrarMensaje('Hubo un error: '+err);
    });
  }

  mostrarMensaje(mensaje: string){
    this.toastCtrl.create({
      message: mensaje,
      duration: 2000
    }).then(toast => toast.present());
  }

  ngOnInit() {
  }

}
