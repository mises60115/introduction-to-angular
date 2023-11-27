import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locListFromHousingListComponent: HousingLocation[] = [];
  srchResultsFromHousingListComponent: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }


  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    this.srchResultsFromHousingListComponent = this.locListFromHousingListComponent.filter((location: HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase()));

  }

}
