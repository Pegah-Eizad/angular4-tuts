import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
     messages = [
       'You\'re now following John on Twitter',
       'John is your friend.',
       'you\'ll never believe what John said'
     ];
  constructor() { }
}
