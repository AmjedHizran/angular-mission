import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../models/country.model";

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    public getCountry(callback: (countries: Country[]) => void): void {
        this.http.get("https://restcountries.eu/rest/v2/all")
                 .subscribe(callback);
    }

    public getCountries(id:number, callback: (country: Country) => void): void{
        this.getCountry(country => {
            for(let i = 0; i < country.length; i++){callback(country[id]);}});
    }
}
