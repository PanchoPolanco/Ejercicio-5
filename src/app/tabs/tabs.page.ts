import { Component } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public autenticar: AutenticacionService,
  ) {}

  cerrarSesion() {
    this.autenticar.signOut();
  }

}
