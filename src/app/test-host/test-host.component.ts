import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-test-host',
  templateUrl: './test-host.component.html',
  styleUrls: ['./test-host.component.css']
})
export class TestHostComponent implements OnInit {

  hostString: string;
  constructor(@Inject(forwardRef(() => AppComponent)) private _parent: AppComponent) { }

  ngOnInit() {
    this.hostString = this._parent.hostMethod();
  }

}
