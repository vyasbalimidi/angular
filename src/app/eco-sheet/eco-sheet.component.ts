import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eco } from '../models/eco';
import { CoverPage } from '../models/cover-page';
import { EcoSheetService } from '../services/eco-sheet.service';

@Component({
  templateUrl: './eco-sheet.component.html',
  styleUrls: ['./eco-sheet.component.css']
})

export class EcoSheetComponent implements OnInit {
  ecoNumber: string;

  downloading: Boolean;
  page: CoverPage;

  constructor(
    private route: ActivatedRoute,
    private service: EcoSheetService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ecoNumber = params['eco-number'];
      this.fetchCoverPage();
    });
  }

  fetchCoverPage() {
    this.downloading = true
    this.service.downloadCoverPage(this.ecoNumber)
      .subscribe(cp => {
        this.downloading = false;
        this.page = cp;
      });
  }
}