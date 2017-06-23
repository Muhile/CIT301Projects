import { Component, OnInit } from '@angular/core';
import {Contact} from "./contact.model";

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  selectedContact: Contact = null;

  constructor() {

  }


}
