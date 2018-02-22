import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  @Input()  twoWayValue: string;
  @Output() twoWayValueChange = new EventEmitter<string>();
  @ViewChild('inputter') inputter: ElementRef;

  constructor() { }

  ngOnInit() {
    this.inputter.nativeElement.value = this.twoWayValue;
  }

  changeValue(event: any) {
    console.log(event);
    this.twoWayValue = event.target.value;
    this.twoWayValueChange.emit(this.twoWayValue);
  }
}
