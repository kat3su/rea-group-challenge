import {Component, OnInit} from '@angular/core';
import {Property} from './@models/property';
import {Http} from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private propertiesDataUrl = '/assets/data/properties.json';
  results: Property[] = [];
  savedProperty: Property[] = [];

  /**
   * Constructor
   */
  constructor(private http: Http) {}

  /**
   * Initialisation
   */
  ngOnInit(): void {
    // Get property data from json file and add to results & saved properties
    this.http.get(this.propertiesDataUrl).toPromise().then(response => {
        response = response.json();
        response['results'].map(propertyData => {
            this.results.push(new Property(propertyData));
        });
        response['saved'].map(propertyData => {
            this.savedProperty.push(new Property(propertyData));
        });
    }).catch(
      error => {
        console.log(error);
      }
    );
  }
}
