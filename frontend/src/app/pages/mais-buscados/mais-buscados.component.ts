import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat/cat.service';

@Component({
  selector: 'app-mais-buscados',
  templateUrl: './mais-buscados.component.html'
})

export class MaisBuscadosComponent {
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
