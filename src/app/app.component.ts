import { Component, Inject, OnInit} from '@angular/core';
import { MailService } from './mail.service';
import { Http } from '@angular/http';
//import * as anything from 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  title = 'Angular 4 project!!';
  months = ['January', 'Feburary', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

  isavailable = false;
  constructor( private mail: MailService, private http: Http){
  }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((data) => console.log(data.json()));
 }
}