import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat/cat.service';

@Component({
  selector: 'app-most-searched',
  templateUrl: './most-searched.component.html'
})

export class MostSearchedComponent {
  cats: any;
  showLoader: boolean = true;

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.showLoader = true;

    this.catService.getCats(10).subscribe(data => {
      this.cats = data;
      this.showLoader = false;
     })
  }
}
