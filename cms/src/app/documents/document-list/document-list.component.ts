import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model'

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {


  documents: Document[] = [
    new Document(1,"Homework","this is the work you do at home","homework.com"),
    new Document(2,"Classwork","this is the work you do in class","classwork.com"),
    new Document(3,"Gymwork","this is the work you do at the gym","gymwork.com")
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  onSelectedDocument(document:Document){
    this.selectedDocumentEvent.emit(document);
  };

  constructor() { }

  ngOnInit() {
  }

}
