import { Component, Inject, OnInit, Input} from '@angular/core';
import { MailService } from './mail.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  httpdata;
  searchparam = 2;
  jsondata;
  name;
  title = 'Angular 4 project!!';
  months = ['January', 'Feburary', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September',
            'October', 'November', 'December'];

  isavailable = false;
  constructor( private mail: MailService, private http: Http) {
  }
  /*
  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe((data) => console.log(data.json()));
 } */
  @Input() message;
  
  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe( data => this.displaydata(data.json()));
    this.http.get('http://jsonplaceholder.typicode.com/users').
    subscribe((data) => this.converttoarray(data.json()));
  }

  displaydata(data) {
    this.httpdata = data;
  }

  converttoarray(data) {
    console.log(data);
    this.name = data[0].name;
  }
}
