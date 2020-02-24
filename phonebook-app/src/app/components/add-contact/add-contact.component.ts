import { Component, OnInit } from '@angular/core';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact = {
    firstName: '',
    lastName: '',
    number: ''
  };
  message = '';
  submitted = false;

  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }

  saveContact() {
    const data = {
      firstName: this.contact.firstName,
      lastName: this.contact.lastName,
      number: this.contact.number
    };

    this.contactService.create(data)
      .subscribe(
        response => {
          this.message = response["message"];
          this.submitted = true;
        },
        error => {
          this.message = error.error.message;
        });
  }

  newContact() {
    this.message = '';
    this.submitted = false;
    this.contact = {
      firstName: '',
      lastName: '',
      number: ''
    };
  }
}
