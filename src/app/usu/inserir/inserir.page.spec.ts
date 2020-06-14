import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirPage } from './inserir.page';

describe('InserirPage', () => {
  let component: InserirPage;
  let fixture: ComponentFixture<InserirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
