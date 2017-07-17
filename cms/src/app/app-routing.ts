import {RouterModule, Routes} from '@angular/router'
import {DocumentsComponent} from "./documents/documents.component";
import {MessagesComponent} from "./messages/messages.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NgModule} from "@angular/core";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {DocumentDetailComponent} from "./documents/document-detail/document-detail.component";
import {ContactEditComponent} from "./contacts/contact-edit/contact-edit.component";
import {ContactsDetailComponent} from "./contacts/contacts-detail/contacts-detail.component";
import {ContactStartComponent} from "./contacts/contact-start/contact-start.component";


const APP_ROUTES: Routes = [
  {path:'documents',component:DocumentsComponent, children: [
    {path:'new', component:DocumentEditComponent},
    {path:':id', component:DocumentDetailComponent},
    {path:':id/edit', component:DocumentEditComponent}
  ]},
  {path:'messages', component:MessagesComponent},
  {path:'contacts', component: ContactsComponent, children: [
    {path:'', component:ContactStartComponent},
    {path:'new', component:ContactEditComponent},
    {path:':id', component:ContactsDetailComponent},
    {path:':id/edit', component:ContactEditComponent}
  ]},
  {path:'', redirectTo:'/documents', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
