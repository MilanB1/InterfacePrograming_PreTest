import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviedescription',
  templateUrl: './moviedescription.component.html',
  styleUrls: ['./moviedescription.component.css']
})
export class MoviedescriptionComponent implements OnInit {

  constructor() { }
  @Input() Description: string;
  ngOnInit() {
  }

}
