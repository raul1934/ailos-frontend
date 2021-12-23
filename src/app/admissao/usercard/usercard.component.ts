import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'als-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  constructor() { }

  @Input() name = "";

  ngOnInit(): void {
  }

}
