import { Component, OnInit } from '@angular/core';
import {contact} from "./contact.model";

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
contacts: contact[] = [
  new contact(10,"Hansen","hanscheng94@gmail.com",385-424-3905,"https://web.byui.edu/Directory/Employee/jacksonk.jpg","")
];
  constructor() {
    // setTimeout(() => {
    //   this.allowContact = true;
    // },2000);
  }


  // onCreateContact(){
  //   this.nameCreated = true;
  //   this.contactCreation = 'Contact was created! Name is ' + this.nameOfContact;
  // }
  //
  // onUpdateContact(event:any){
  //   this.nameOfContact = (<HTMLInputElement>event.target).value;
  // }
}
