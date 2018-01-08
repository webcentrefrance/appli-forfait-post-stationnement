import { Component, OnInit, Input} from '@angular/core';
import { VilleService } from '../shared/index';
import { Ville } from '../model/ville';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-diagramme-prix',
  templateUrl: './diagramme-prix.component.html',
  styleUrls: ['./diagramme-prix.component.css']
})
export class DiagrammePrixComponent implements OnInit {

  @Input() ville: Ville;
  @Input() field: string;
  @Input() nbVilles: number;

  villesByPop: Ville[];
  diagrammeData: any;
  rootUrl: string = environment.rootUrl;

  constructor(
    private service: VilleService
  ) { }

  ngOnInit() {
    if (!this.nbVilles) {
      this.nbVilles = 4;
    }

    this.service.getFiltered().subscribe(
      data => {
        if (this.ville.nomDepartement) {
          this.villesByPop =  data.filter(currentVille => (
            (currentVille.nomDepartement  && this.ville.nomDepartement === currentVille.nomDepartement)
            && (currentVille.FPS_mini !== '-' ||  currentVille.FPS_maxi !== '-' || this.ville.Ville === currentVille.Ville)))
                                  .sort((a, b) => a.habitants < b.habitants ? -1 : 1);
        } else {
          this.villesByPop =  data.filter(currentVille => (currentVille.FPS_mini !== '-'
                                             ||  currentVille.FPS_maxi !== '-'
                                             || this.ville.Ville === currentVille.Ville))
                                  .sort((a, b) => a.habitants < b.habitants ? -1 : 1);
        }
        this.diagrammeData = this.getSameSizeCities(this.ville);
      },
      error =>  console.log(error)
    );
  }

  isDataValid(ville: Ville) {
    let result = true;
    result = result && (ville.FPS_maxi && ville.FPS_maxi !== '-' && ville.FPS_maxi !== '');
    result = result && (ville.FPS_mini && ville.FPS_mini !== '-' && ville.FPS_mini !== '');
    return result;
  }

  orderBy(villes: Ville[], field: string) {
    return villes.sort((a, b) => a[field] < b[field] ? -1 : 1 );
  }

  computeWidth(currentCity: Ville) {
    return ((parseFloat(currentCity[this.field]) / this.diagrammeData[this.field]) * 100) + '%';
  }

  parseFloat(str: string) {
    return parseFloat(str ? str.replace(',', '.') : null);
  }

  getSameSizeCities(ville: Ville) {
    const result = {
      cities: [],
      FPS_maxi : -1,
      FPS_mini : -1
    };

    let idx: number;
    for (const index in this.villesByPop) {
      if ( ville.Ville === this.villesByPop[index].Ville ) {
        idx = parseInt(index, 10);

        // Calcul des bornes
        let bm: number = Math.floor(idx - (this.nbVilles / 2));
        let bM: number = Math.ceil(idx + (this.nbVilles / 2));

        if (this.nbVilles >= this.villesByPop.length) {
          bm = 0;
          bM = this.villesByPop.length - 1;
        } else {
          if (bm < 0) {
            bM -= bm;
            bm = 0;
          } else if ( bM >= this.villesByPop.length ) {
            bm -= bM - this.villesByPop.length + 1;
            bM = this.villesByPop.length - 1;
          }
        }

        let PV_mini = -1;
        let PV_maxi = -1;

        for (let i = bm; i <= bM; ++i) {
          if (this.villesByPop[i].FPS_mini && this.villesByPop[i].FPS_mini !== '-'
               && this.villesByPop[i].FPS_maxi && this.villesByPop[i].FPS_maxi !== '-') {
            const mini = parseFloat(this.villesByPop[i].FPS_mini.replace(',', '.'));
            const maxi = parseFloat(this.villesByPop[i].FPS_maxi.replace(',', '.'));
            if (maxi > PV_maxi) {
              PV_maxi = maxi;
            }
            if (mini > PV_mini) {
              PV_mini = mini;
            }
          }

          if (PV_maxi > result.FPS_maxi) {
            result.FPS_maxi  = PV_maxi;
          }
          if (PV_mini > result.FPS_mini) {
            result.FPS_mini  = PV_mini;
          }

          result.cities.push(this.villesByPop[i]);
        }
        break;
      }
    }
    return result;
  }


}
