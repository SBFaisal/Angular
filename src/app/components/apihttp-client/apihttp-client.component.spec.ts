import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIHttpClientComponent } from './apihttp-client.component';

describe('APIHttpClientComponent', () => {
  let component: APIHttpClientComponent;
  let fixture: ComponentFixture<APIHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIHttpClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
