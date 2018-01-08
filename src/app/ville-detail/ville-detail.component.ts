import { Component, OnInit } from '@angular/core';
import { Ville } from '../model/ville';
import { Observable } from 'rxjs/Observable';
import { VilleService } from '../shared/index';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router/src/shared';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-ville-detail',
  templateUrl: './ville-detail.component.html',
  styleUrls: ['./ville-detail.component.css']
})
export class VilleDetailComponent implements OnInit {
  nbVilles = 4;
  villesByPop: Ville[];
  ville$: Observable<Ville>;
  diagrammeData: any;
  formUrl: string = environment.formURL;
  basePath: string = environment.basePath;
  rootUrl: string = environment.rootUrl;

  constructor(
    private service: VilleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ville$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.service.getVille(params.get('id'));
      });
    // Reinit de la phrase
    this.service.setQuery('');
  }

  isDataValid(ville: Ville) {
    let result = true;
    result = result && (ville.FPS_maxi && ville.FPS_maxi !== '-' && ville.FPS_maxi !== '');
    result = result && (ville.FPS_mini && ville.FPS_mini !== '-' && ville.FPS_mini !== '');
    return result;
  }

  displayVilleName(ville) {
    return ville.nom || ville.Ville;
  }
}
