import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { FormValidationService } from '../services/form-validation.service';

@Component({
    selector: 'ng-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    firstName = new FormControl('')
    lastName =  new FormControl('')
    email = new FormControl('')
    phoneNumber = new FormControl('');
    message = new FormControl('');

    constructor(private cs: ContactService,  private fv: FormValidationService) {

    }
    ngOnInit(): void {
        
    }

    onSubmit() {
        
    }
}
