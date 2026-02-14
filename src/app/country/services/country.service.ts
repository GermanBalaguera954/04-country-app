import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(term: string) {
    const url = `https://restcountries.com/v3.1/capital/${term}`;
    return this.http.get(url);
  }
}
