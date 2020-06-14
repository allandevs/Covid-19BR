import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransmisaoPage } from './transmisao.page';

describe('TransmisaoPage', () => {
  let component: TransmisaoPage;
  let fixture: ComponentFixture<TransmisaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmisaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransmisaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
