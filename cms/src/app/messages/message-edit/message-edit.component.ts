import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender:string = 'Hansen';
  id:number = 1;
  @ViewChild('subject')subjectRef:ElementRef;
  @ViewChild('msgTxt')msgTxtRef:ElementRef;

  onSendMessage(){
    const msgSub = this.subjectRef.nativeElement.value;
    const msgText = this.msgTxtRef.nativeElement.value;

    const newMessage = new Message(this.id, msgSub, msgText, this.currentSender);
    this.addMessageEvent.emit(newMessage);

  }

  onClear() {
    this.addMessageEvent.emit(null);
  }

  constructor() { }

  ngOnInit() {
  }

}
