import { Component, OnInit } from '@angular/core';

import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  currentContact = null;
  message = '';

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getContact(this.route.snapshot.paramMap.get('id'));
  }

  getContact(id) {
    this.contactService.get(id)
      .subscribe(
        data => {
          this.currentContact = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateContact() {
    this.contactService.update(this.currentContact.id, this.currentContact)
      .subscribe(
        response => {
          console.log(response);
          this.message = response["message"];
        },
        error => {
          console.log(error);
          this.message = error.error.message;
        });
  }

  clearMessage() {
    this.message = '';
  }
}
