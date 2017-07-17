import {Component, OnInit} from '@angular/core';
import { Contact} from '../contact.model'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;
  id: string;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  onDelete(){
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['../contacts']);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      }
    );
  }

}
