import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeterComponent } from './meter/meter.component';
import { OptOneComponent } from './options/opt-one/opt-one.component';
import { OptTwoComponent } from './options/opt-two/opt-two.component';
import { QuestionComponent } from './question/question.component';

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
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
