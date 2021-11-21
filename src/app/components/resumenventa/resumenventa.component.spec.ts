import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenventaComponent } from './resumenventa.component';

describe('ResumenventaComponent', () => {
  let component: ResumenventaComponent;
  let fixture: ComponentFixture<ResumenventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
