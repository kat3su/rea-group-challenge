import {Component, Input} from '@angular/core';
import {Property} from '../@models/property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {
  @Input()
  propertyDetail: Property;
  @Input()
  hoverButtonText: string;
}
