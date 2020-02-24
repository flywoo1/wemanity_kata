import { Component, OnInit } from '@angular/core';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: any;
  keyword = '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAll()
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.getContacts();
  }

  searchByKeyword() {
    this.contactService.findByKeyword(this.keyword)
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
