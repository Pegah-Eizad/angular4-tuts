import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { MailService } from './mail.service';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './app.sqrt';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    NewCompComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path: 'new-comp',
         component: NewCompComponent
      }
   ])
  ],
  providers: [{provide: 'mail', useClass: MailService},
  {provide: 'api', useValue: 'http://localhost:3000/'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}