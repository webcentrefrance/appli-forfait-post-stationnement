import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { Ville } from '../model/ville';
import { VilleService } from '../shared/index';


@Component({
  selector: 'app-ville-autocomplete',
  templateUrl: './ville-autocomplete.component.html',
  styleUrls: ['./ville-autocomplete.component.css']
})
export class VilleAutocompleteComponent implements OnInit {
  constructor(private villeService: VilleService) {}

  filter(query: string) {
    return this.villeService.setQuery(query);
  }

  ngOnInit() {
  }
}
