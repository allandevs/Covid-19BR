import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevencaoPage } from './prevencao.page';

describe('PrevencaoPage', () => {
  let component: PrevencaoPage;
  let fixture: ComponentFixture<PrevencaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
