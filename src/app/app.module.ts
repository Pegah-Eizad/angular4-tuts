import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    NewCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide: 'mail', useClass: MailService},
  {provide: 'api', useValue: 'http://localhost:3000/'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}