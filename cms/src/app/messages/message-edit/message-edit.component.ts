import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Message} from "../message.model";
import {MessagesService} from '../messages.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css'],
  providers: [MessagesService]
})
export class MessageEditComponent implements OnInit {
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender:string = 'Hansen';
  id:string = '1';
  @ViewChild('subject')subjectRef:ElementRef;
  @ViewChild('msgTxt')msgTxtRef:ElementRef;

  onSendMessage(){
    const msgSub = this.subjectRef.nativeElement.value;
    const msgText = this.msgTxtRef.nativeElement.value;
    const newMessage = new Message(this.id, msgSub, msgText, this.currentSender);
    this.addMessageEvent.emit(newMessage);
    this.MessageService.addMessage(newMessage);
  }

  onClear() {
    this.addMessageEvent.emit(null);
  }

  constructor(private MessageService: MessagesService) { }

  ngOnInit() {
  }

}
