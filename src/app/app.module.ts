import { BrowserModule } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, RichTextEditorModule, AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
