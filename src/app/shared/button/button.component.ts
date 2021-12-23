import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'als-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input() type = "default"; 
  @Input() size = "normal";
  @Input() buttonType = "text";
  @Input() disabled = false; 
  @Input() loading = false;
  @Input() form = false;

  constructor() { }

  ngOnInit(): void {
  }

}
