import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {} as Usuario;

  constructor(
    public autenticar: AutenticacionService,
    public toastCtrl: ToastController,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ingresar(usuario: Usuario) {
    this.autenticar.signIn(usuario.correo, usuario.contrasenia)
    .then ((resultado:any)=> {
      this.mostrarMensaje('¡Bienvenido '+resultado.user._delegate.email+'!');
      this.router.navigate(['tabs']);
    }, err =>{
      this.mostrarMensaje('Hubo un error: '+err)
    });
  }

  mostrarMensaje(mensaje:string) {
    this.toastCtrl.create({
      message: mensaje,
      duration: 5000
    }).then(toast => toast.present());
  }

  loginGoogleAuth(){
    this.autenticar.googleAuth().then ((resultado:any)=>{
      console.log(resultado);
      this.mostrarMensaje('¡Bienvenido '+resultado.user.displayName+'!')
      this.router.navigate(['tabs']);
    }, err =>{
      this.mostrarMensaje('Hubo un error: '+err)
    });
  }

  ngOnInit() {
  }

}
