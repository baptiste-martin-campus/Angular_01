import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] | any;
  selectedPastrie: Pastrie | null = null;
  selectedPastries: string[] = [];
  p: number = 1;

  constructor(private service: PastrieService) { }

  ngOnInit() {
    this.pastries = this.service.getPastries();
    this.count();
  }

  ngOnChanges(searchWord: string) {
    this.pastries = this.service.search(searchWord);
  }

  setPriority(el: any) {
    let html = document.getElementById("priority-" + el);
    html?.classList.contains("d-none") ? html?.classList.remove("d-none") : html?.classList.add("d-none");
  }

  onSelect(pastrie: Pastrie) {
    // console.log(pastrie);
    this.selectedPastrie = pastrie;
  }

  changeParentPreference(el: string) {
    if (this.selectedPastries.length < 3) {
      if (!this.selectedPastries.includes(el)) {
        this.selectedPastries.push(el);
      } else {
        const index = this.selectedPastries.indexOf(el);
        if (index > -1) { // only splice array when item is found
          this.selectedPastries.splice(index, 1); // 2nd parameter means remove one item only
        }
      }
    }
    this.selectedPastries.forEach((el) => {
      this.setPriority(el);
    })
    console.log(this.selectedPastries)
  }

  search(el: string) {
    this.pastries = this.service.search(el);
  }

  count() {
    let arr: any = this.pastries;
    let arr2: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].ref != arr[j].ref && !arr2.includes(arr[i].ref)) {
          arr2.push(arr[i].ref);
        }
      }
    }
    console.log(arr2);
    console.log(arr2.length);
  }

}
