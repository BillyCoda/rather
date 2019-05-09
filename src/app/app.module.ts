import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { OptOneComponent } from './options/opt-one/opt-one.component';
import { OptTwoComponent } from './options/opt-two/opt-two.component';
import { MeterComponent } from './meter/meter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    OptOneComponent,
    OptTwoComponent,
    MeterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
