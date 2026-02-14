import { CountryService } from './../../services/country.service';
import { Component, inject } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list/country-list';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  CountryService = inject(CountryService);

  onSearch(query: string) {
    this.CountryService.searchByCapital(query).subscribe((countries) => {
      console.log({ countries });
    });
  }
}
