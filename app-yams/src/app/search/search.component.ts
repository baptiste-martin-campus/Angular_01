import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searching: EventEmitter<string> = new EventEmitter();

  constructor(private service: PastrieService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // récupération des données du formulaire
    this.searching.emit(form.value['word']);
  }

  onChangeEmit(event: any) {
    console.log(event);
  }

}
