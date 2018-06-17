import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-simple-form',
  template: `<div>
  <p> inside app-simple-form component </p>
   <ul>
     <li *ngFor='let message of mail.messages'>
       {{message}}
     </li>
   </ul>
   <input #myInput type="text" [(ngModel)]="mail.message">
   <button (click)="onClick(myInput.value)">Click Me!</button>
  <input #myInput type="text" [(ngModel)]="mail.message">
  <button (click)="this.update.emit({text:message})">Click Me!</button> 
</div>`,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  onClick(value) {
    alert('Button Clicked in the event handler function.');
  }

  constructor(
    private mail: MailService
  ) { }

  ngOnInit() {
  }

}
