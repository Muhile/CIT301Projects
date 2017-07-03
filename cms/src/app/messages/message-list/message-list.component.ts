import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  providers: [MessagesService]
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];
  onAddMessage(message: Message){
    this.messages.push(message);
  }
  constructor(private MessagesService: MessagesService) {
    this.messages = this.MessagesService.getMessages();
  }


  ngOnInit() {
    this.MessagesService.messageChangeEvent.subscribe(
      (messages:Message[]) => {this.messages = messages}
    );
  }

}
