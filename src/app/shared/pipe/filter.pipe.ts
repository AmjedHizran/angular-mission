import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Country } from '../models/country.model';

@Pipe({
    name: 'filtered'
  })
  @Injectable()
  export class FilterPipe implements PipeTransform {

    transform(countries: any[], field: string, value: string): any[] {
        if (!countries) {return [];}
        if (!field || !value) {return countries;}

        return countries.filter(country => country[field].toLowerCase().includes(value.toLowerCase()));
    }
}