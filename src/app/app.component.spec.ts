import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {PropertyCardComponent} from './property-card/property-card.component';
import {HttpModule} from '@angular/http';
import {Property} from './@models/property';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PropertyCardComponent
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents();
  }));
  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should add property to saved list on when clicking on add button`, async(() => {
    // First property in result list
    const propertyObject = component.results[0];
    // Add Button for the first property above
    const btn = fixture.debugElement.nativeElement.querySelector('.result-list .property-card button');
    // Mock up click event
    btn.click();
    // This property should be added to saved property list
    expect(component.savedProperty.indexOf(propertyObject) !== -1).toBeTruthy();
  }));

  it('should remove property from saved property list when clicking on remove button', async(() => {
    // First property in result list
    const propertyObject = component.savedProperty[0];
    // Add Button for the first property above
    const btn = fixture.debugElement.nativeElement.querySelector('.saved-list .property-card button');
    // Mock up click event
    btn.click();
    // This property should be added to saved property list
    expect(component.savedProperty.indexOf(propertyObject) === -1).toBeTruthy();
  }));

});
