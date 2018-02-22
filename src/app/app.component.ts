import { Component, OnInit, ViewChild } from '@angular/core';
import { TestViewchildComponent } from './test-viewchild/test-viewchild.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  receivedOutput: string;
  twoWayString: string;
  childComponentString: string;

  @ViewChild(TestViewchildComponent) testViewchildComponent: TestViewchildComponent;

  hostMethod(): string {
    return 'host method invoked';
  }

  ngOnInit() {
    this.twoWayString = 'Initial Value';
    this.childComponentString = this.testViewchildComponent.childMethod();
  }

  handleOutputValue(event) {
    this.receivedOutput = event;
  }
}
