import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapytComponent } from './zapyt.component';

describe('ZapytComponent', () => {
  let component: ZapytComponent;
  let fixture: ComponentFixture<ZapytComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZapytComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZapytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
