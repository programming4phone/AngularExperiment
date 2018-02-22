import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestInputComponent } from './test-input/test-input.component';
import { TestOutputComponent } from './test-output/test-output.component';
import { TestViewchildComponent } from './test-viewchild/test-viewchild.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { TestHostComponent } from './test-host/test-host.component';
import { HoverDirective } from './directives/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestOutputComponent,
    TestViewchildComponent,
    TwoWayComponent,
    TestHostComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
