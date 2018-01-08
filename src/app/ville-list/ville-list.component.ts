import { Component, OnInit } from '@angular/core';
import { VilleService } from '../shared';
import { Ville } from '../model/ville';
import { MatListModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent implements OnInit {

  villes$: Observable<Ville[]>;
  basePath: string = environment.basePath;
  rootUrl: string = environment.rootUrl;

  constructor(private villeService: VilleService) { }

  ngOnInit() {
    this.villes$ = this.villeService.getFiltered().map(
      data => {
        return data.sort((a, b) => a.Ville < b.Ville ? -1 : 1);
      },
      error =>  console.log(error)
    );
  }
}
