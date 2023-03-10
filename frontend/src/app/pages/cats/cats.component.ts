import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from 'src/app/services/cat/cat.service';

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html'
})

export class CatsComponent implements OnInit {
  cat: any;
  image: string = '';
  rates: number[] = [1, 2, 3, 4, 5];
  catimages: any;
  showLoader: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.cat = {
      name: ''
    }

    let id  = this.route.snapshot.params['id'];
    //Get Cats
    this.showLoader = true;
    this.catService.getCat(id).subscribe( data => {
    this.cat = data;

    this.catService.getImage(data.reference_image_id).subscribe( data =>{
      this.image = data.url;
      })
    })

    //Get Cat Images
    this.catService.getcatImages(id).subscribe(data => {
      this.catimages = data;

      this.showLoader = false;
    })
  }

}
