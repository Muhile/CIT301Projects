import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from  '../contact.model'
import {ContactService} from "../contact.service";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit, OnDestroy{
  contacts: Contact[] = [];
  private subscription: Subscription;

  constructor(private contactService: ContactService) {
  this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactChangedEvent
      .subscribe(
        (contact: Contact[]) => {
          this.contacts = contact;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

