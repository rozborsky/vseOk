import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyBackgroundComponent } from './spy-background.component';

describe('SpyBackgroundComponent', () => {
  let component: SpyBackgroundComponent;
  let fixture: ComponentFixture<SpyBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
