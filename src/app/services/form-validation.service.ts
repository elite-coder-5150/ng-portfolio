import { Injectable } from '@angular/core';
// import { * } as zod from 'zod'

@Injectable({
    providedIn: 'root'
})
export class FormValidationService {

    constructor() { }

    isRequired(value: string): boolean | string {
        if (!value || !value.length) {
            return "this field is required";
        }

        return true;
    }

    email(email: string): boolean | string {
        if (!email && !email.length) {
            return true;
        }

        //? check to see if the format is satisified or not
        //? if the format is not correct is displays a message
        //? otherwise return true.
        let regEx = new RegExp('', '');

        if (!regEx) {
            return 'error message'
        }

        return true
    }
}
