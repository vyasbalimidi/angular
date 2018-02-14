import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Eco } from '../models/eco';
import { EcoService } from '../services/eco.service';

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
    private service: EcoService,
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
    this.service.downloadEcos().subscribe(
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
