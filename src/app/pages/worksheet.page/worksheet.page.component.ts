import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-worksheet.page',
  templateUrl: './worksheet.page.component.html',
  styleUrls: ['./worksheet.page.component.scss']
})
export class WorksheetPageComponent implements OnInit {
  @Input() GapOptions: []
  constructor() { }

  ngOnInit() {
  }

}
