import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Eco } from '../eco';
import { EcoService } from '../eco.service';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.css']
})

export class EcoComponent implements OnInit {
  ecos: Eco[];
  cols: any[];

  downloading: Boolean;
  selectedEco: Eco;

  constructor(
    private ecoService: EcoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fillColumns()
    this.fillEcos()
  }

  fillColumns() {
    this.cols = [
      { field: 'eco_number', header: 'ECO' },
      { field: 'department', header: 'Department' }
    ];
  }

  fillEcos() {
    this.downloading = true;
    this.ecoService.downloadEcos().subscribe(
      allEcos => {
        this.ecos = allEcos;
        this.downloading = false;
      })
  }

  onRowSelect(event) {
    let ecoNum = event.data.eco_number;
    this.router.navigate(['/eco-sheet/' + ecoNum]);
  }
}
