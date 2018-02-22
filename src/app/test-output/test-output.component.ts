import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-output',
  templateUrl: './test-output.component.html',
  styleUrls: ['./test-output.component.css']
})
export class TestOutputComponent implements OnInit {

  outputMessage = 'this is my output';

  @Output()
  outputValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.outputValue.emit(this.outputMessage);
  }

}
