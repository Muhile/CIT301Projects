import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [
    new Message (2, "Hi", "This is the first messages", "Muhile"),
    new Message(3, "Hi", "This is the second messages" , "Muhile"),
    new Message(4, "Hi", "This is the third messages" , "Muhile"),
  ];
  onAddMessage(message: Message){
    this.messages.push(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
