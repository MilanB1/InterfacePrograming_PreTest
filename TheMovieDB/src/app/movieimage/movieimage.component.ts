import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movieimage',
  templateUrl: './movieimage.component.html',
  styleUrls: ['./movieimage.component.css']
})
export class MovieimageComponent implements OnInit {


  @Input() image: string;
  constructor() { }

  ngOnInit() {
  }

}
