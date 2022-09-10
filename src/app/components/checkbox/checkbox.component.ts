import { Component, Input, OnInit } from '@angular/core';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'techfabric-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() size: number = 16;
  @Input() value: boolean = false;
  @Input() disabled: boolean = false;
  icon = faCheck;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    if(!this.disabled){
      this.value = !this.value;
    }
  }
}
