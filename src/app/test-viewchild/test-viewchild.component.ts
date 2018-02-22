import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-viewchild',
  templateUrl: './test-viewchild.component.html',
  styleUrls: ['./test-viewchild.component.css']
})
export class TestViewchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  childMethod(): string {
    return 'child component method invoked';
  }
}
