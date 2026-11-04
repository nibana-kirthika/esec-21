import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAconex } from './cloud-aconex';

describe('CloudAconex', () => {
  let component: CloudAconex;
  let fixture: ComponentFixture<CloudAconex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudAconex],
    }).compileComponents();

    fixture = TestBed.createComponent(CloudAconex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
