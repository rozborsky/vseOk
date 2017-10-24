import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChatButtonComponent } from './show-chat-button.component';

describe('ShowChatButtonComponent', () => {
  let component: ShowChatButtonComponent;
  let fixture: ComponentFixture<ShowChatButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChatButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
