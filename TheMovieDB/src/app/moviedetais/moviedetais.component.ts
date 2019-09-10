import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-moviedetais',
  templateUrl: './moviedetais.component.html',
  styleUrls: ['./moviedetais.component.css']
  
})
export class MoviedetaisComponent implements OnInit {

@Input() movieRating: number;
@Input() movieRuntime: number;
  constructor() { }

  ngOnInit() {
  }

}
