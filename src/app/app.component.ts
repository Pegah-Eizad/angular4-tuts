import { Component, Inject} from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'Angular 4 project!!';

  months = ['January', 'Feburary', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

  isavailable = false;

  constructor( private mail: MailService){
  }
}