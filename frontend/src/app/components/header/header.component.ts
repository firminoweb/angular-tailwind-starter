import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CatService } from 'src/app/services/cat/cat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  @Output() offsetMenuEvent: EventEmitter<boolean> = new EventEmitter();
  offsetMenu = false;

  enteredSearchValue: String = '';
  showSuggested: boolean = false;
  showResults: boolean = false;
  suggestedCats: any = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

  onMenu(val: boolean) {
    this.offsetMenuEvent.emit(val);
    this.offsetMenu = !this.offsetMenu;
  }

  closeSearch() {
    this.showResults = false;
    this.enteredSearchValue = '';
    this.suggestedCats = [];
  }

  outSearch() {
    setTimeout(() => {
      this.closeSearch();
    }, 200)
  }

  onSearchChange() {
    if (this.enteredSearchValue !== '') {
      this.showResults = true;

      this.catService.searchByCatName(this.enteredSearchValue).subscribe(data => {
        this.suggestedCats = data;

        if (this.suggestedCats.length > 0) {
          this.showSuggested = true;
        } else {
          this.suggestedCats = [];
          this.showSuggested = false;
        }
      })
    } else {
      this.showResults = false;
      this.suggestedCats = [];
    }
  }
}
