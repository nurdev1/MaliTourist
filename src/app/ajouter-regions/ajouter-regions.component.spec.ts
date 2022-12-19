import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRegionsComponent } from './ajouter-regions.component';

describe('AjouterRegionsComponent', () => {
  let component: AjouterRegionsComponent;
  let fixture: ComponentFixture<AjouterRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
