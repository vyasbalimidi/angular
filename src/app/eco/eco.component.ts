import { Component, OnInit } from '@angular/core';
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

  constructor(private ecoService: EcoService) { }

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
    console.log(event.data.eco_number);
  }
}
