import {EventEmitter, Injectable} from '@angular/core';
import {Document} from './document.model';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';

@Injectable()
export class DocumentsService {

  documents:Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.documents){
      if (document.documentId === id) {
        return document;
      }
    }
    return null;
  }
  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

}
