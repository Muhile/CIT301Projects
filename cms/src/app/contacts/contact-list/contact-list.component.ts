import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from  '../contact.model'
@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
@Input() contacts = [
   {name: "Bro. Jackson", email: "jackson@byui.edu", imageUrl:"https://web.byui.edu/Directory/Employee/jacksonk.jpg"},
   {name: "Bro. Barzee", email: "barzeer@byui.edu", imageUrl:"https://web.byui.edu/Directory/Employee/barzeer.jpg"},
   {name: "Bro. Lindstrom", email: "lindstromc@byui.edu", imageUrl:"https://web.byui.edu/Directory/Employee/lindstromc.jpg"}
 ];

  @Output() selectedContactEvent = new EventEmitter<Contact>();

onSelected(contact:Contact){
  this.selectedContactEvent.emit(contact);
}
  constructor() { }

  ngOnInit() {
  }

}

// contacts: Contact[] = [
//   new Contact(1,"Bro. Jackson","jackson@byui.edu",208-496-3771,"https://web.byui.edu/Directory/Employee/jacksonk.jpg",null),
//   new Contact(2,"Bro. Barzee","barzeer@byui.edu",208-496-3768,"https://web.byui.edu/Directory/Employee/barzeer.jpg",null),
//   new Contact(3,"Bro. Lindstrom","lindstromc@byui.edu",208-496-3768,"https://web.byui.edu/Directory/Employee/lindstromc.jpg",null)
// ];
