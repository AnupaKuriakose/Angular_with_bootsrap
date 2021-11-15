import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from '../../models/country';
import {CountryService} from '../../services/country.service';
import {NgbdSortableHeader, SortEvent} from '../../directives/sortable.directive';


@Component(
    {selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'], 
    providers: [CountryService, DecimalPipe]})
export class TableComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}