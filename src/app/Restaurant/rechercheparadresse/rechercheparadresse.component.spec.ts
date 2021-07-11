import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheparadresseComponent } from './rechercheparadresse.component';

describe('RechercheparadresseComponent', () => {
  let component: RechercheparadresseComponent;
  let fixture: ComponentFixture<RechercheparadresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheparadresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheparadresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
