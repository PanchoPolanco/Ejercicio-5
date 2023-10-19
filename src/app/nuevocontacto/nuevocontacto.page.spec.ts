import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevocontactoPage } from './nuevocontacto.page';

describe('NuevocontactoPage', () => {
  let component: NuevocontactoPage;
  let fixture: ComponentFixture<NuevocontactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevocontactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
