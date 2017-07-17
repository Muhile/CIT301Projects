import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model'
import {DocumentsService} from '../documents.service'
import {Router} from "@angular/router";

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  providers: [DocumentsService]
})
export class DocumentListComponent implements OnInit {


  documents: Document[] = [];

  constructor(private documentsService: DocumentsService, private router: Router) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {
    this.documentsService.documentChangedEvent
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
  }


}
