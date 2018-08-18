import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  public search: string;
  countries: Country[];
  

  constructor(private CountryService: CountryService) { }

  ngOnInit() {
      this.CountryService.getCountry(countries => this.countries = countries);
  }

}
