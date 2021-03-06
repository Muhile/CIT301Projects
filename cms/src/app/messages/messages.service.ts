import { Injectable, EventEmitter } from '@angular/core';
import {Message} from './message.model';
import {MOCKMESSAGES} from './MOCKMESSAGES';

@Injectable()
export class MessagesService {
  messages:Message[] =[];
  messageChangeEvent = new EventEmitter<Message[]>();

  addMessage(message: Message){
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice() );
  }
  getMessages(): Message[] {
    return this.messages.slice();
  };

  getMessage(id: string): Message {
    for(let message of this.messages){
      if(message.id === id) {
        return message;
      }
    }
    return null;
  }


  constructor () {
    this.messages = MOCKMESSAGES;
  }
}
