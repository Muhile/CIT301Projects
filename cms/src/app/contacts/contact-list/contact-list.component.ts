import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from  '../contact.model'
import {ContactService} from "../contact.service";
@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];




  constructor(private ContactService: ContactService) {
  this.contacts = this.ContactService.getContacts();
  }

  ngOnInit() {
  }

}

