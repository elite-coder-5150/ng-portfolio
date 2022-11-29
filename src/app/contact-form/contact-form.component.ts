import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'ng-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    //? goto angular.io and find out how they create forms.
    //? because they have the best documentation i have ever seen
    // @ts-ignore
    formData: FormGroup;


    contact: Contact = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phoneNumber: ''
    }
    constructor(private fb: FormBuilder, private cs: ContactService) { }

    ngOnInit(): void {
        //? 
        this.formData = this.fb.group({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            // @ts-ignore
            email: new FormControl('', [Validators.compose([Validators.required, Validators.email])])
        })
    }

    onSubmit(formData: FormGroup) {
        //? submit the form data to the database.
        console.log(formData);

        //? validation is 
        this.cs.sendFormData()
    }
}
