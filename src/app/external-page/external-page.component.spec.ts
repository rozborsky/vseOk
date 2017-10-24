import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPageComponent } from './external-page.component';

describe('ExternalPageComponent', () => {
  let component: ExternalPageComponent;
  let fixture: ComponentFixture<ExternalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
