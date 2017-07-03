import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model'
import {DocumentsService} from '../documents.service'

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  providers: [DocumentsService]
})
export class DocumentListComponent implements OnInit {


  documents: Document[] = [];


  onSelectedDocument(document:Document){
    this.DocumentsService.documentSelectedEvent.emit(document);
  }

  constructor(private DocumentsService: DocumentsService) {
    this.documents = this.DocumentsService.getDocuments();
  }

  ngOnInit() {
  }

}
