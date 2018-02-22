import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {

  @Input() inputValue: string;
  templateValue: string;

  constructor() { }

  ngOnInit() {
    this.templateValue = this.inputValue;
  }

}
