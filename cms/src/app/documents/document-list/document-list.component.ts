import {Component, OnDestroy, OnInit} from '@angular/core';
import {Document} from '../document.model'
import {DocumentsService} from '../documents.service'
import {Router} from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  providers: [DocumentsService]
})
export class DocumentListComponent implements OnInit,OnDestroy {


  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private documentsService: DocumentsService, private router: Router) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {
    // this.documents = this.documentsService.getDocuments();
    this.subscription = this.documentsService.documentListChangedEvent
      .subscribe(
        (document: Document[]) => {
          this.documents = document;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
