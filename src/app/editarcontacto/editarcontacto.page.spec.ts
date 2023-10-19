import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarcontactoPage } from './editarcontacto.page';

describe('EditarcontactoPage', () => {
  let component: EditarcontactoPage;
  let fixture: ComponentFixture<EditarcontactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarcontactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
