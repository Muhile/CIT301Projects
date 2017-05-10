import { Component, OnInit } from '@angular/core';
import { contact} from  '../contact.model'
@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: contact[] = [
    new contact(1,"Bro. Jackson","jackson@byui.edu",208-496-3771,"https://web.byui.edu/Directory/Employee/jacksonk.jpg",null),
    new contact(2,"Bro. Barzee","barzeer@byui.edu",208-496-3768,"https://web.byui.edu/Directory/Employee/barzeer.jpg",null)
  ];
  constructor() { }

  ngOnInit() {
  }

}