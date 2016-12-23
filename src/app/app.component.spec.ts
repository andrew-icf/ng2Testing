/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    //arrange
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    //act
    //assert
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular Testing Suite!'`, async(() => {
    // arrange
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    // act
    //assert
    expect(app.title).toEqual('Angular Testing Suite!');
  }));

  it('should render title in a h1 tag', async(() => {
    //arrange
    let fixture = TestBed.createComponent(AppComponent);
    let compiled = fixture.debugElement.nativeElement;
    //act
    fixture.detectChanges();
    //assert
    expect(compiled.querySelector('h1').textContent).toContain('Angular Testing Suite!');
  }));
});
