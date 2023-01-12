import { Component, OnInit, Input } from '@angular/core';
import { CatService } from 'src/app/services/cat/cat.service';

@Component({
  selector: 'app-latest-cats',
  templateUrl: './latest-cats.component.html'
})

export class LatestCatsComponent implements OnInit {
  cats: any;
  name: string = '';
  showLoader: boolean = true;

  @Input() limit = 1

  constructor(private catService:CatService) { }

  ngOnInit(): void {
    this.showLoader = true;

    this.catService.getCats(this.limit).subscribe(data=>{
        this.cats = data;
        this.showLoader = false;
    })
  }
}
