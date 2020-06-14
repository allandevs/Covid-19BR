import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasPage } from './sintomas.page';

describe('SintomasPage', () => {
  let component: SintomasPage;
  let fixture: ComponentFixture<SintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
