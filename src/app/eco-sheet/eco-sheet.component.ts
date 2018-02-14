import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eco } from '../eco';

@Component({
  selector: 'app-eco-sheet',
  templateUrl: './eco-sheet.component.html',
  styleUrls: ['./eco-sheet.component.css']
})

export class EcoSheetComponent implements OnInit {
  ecoNumber: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ecoNumber = params['eco-number'];
    });
  }
}