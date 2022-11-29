import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
    selector: 'app-newsletter-form',
    templateUrl: './newsletter-form.component.html',
    styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

    @Input() contact: Contact = {
        id: undefined,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    }

    // @ts-ignore
    form: FormGroup;

    @Output() save = new EventEmitter<Contact>();

    constructor(private fb: FormBuilder, private ns: NewsletterService) { }

    ngOnInit(): void {
    }

    onSubmit() {
        //? use the Zod package for typescript
        //? for validation
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    }
}
