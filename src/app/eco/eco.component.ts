import { Component, OnInit } from '@angular/core';
import { Eco } from '../Eco';
import { EcoService } from '../eco.service';

@Component({
  selector: 'app-eco',
  templateUrl: './eco.component.html',
  styleUrls: ['./eco.component.css']
})

export class EcoComponent implements OnInit {
  ecos: Eco[];

  constructor(private ecoService: EcoService) { }

  ngOnInit() {
    this.fillEcos()
  }

  fillEcos(): void {
    this.ecoService.downloadEcos().subscribe(allEcos => this.ecos = allEcos)
  }
}
