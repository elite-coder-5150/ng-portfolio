import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  isRequired = () => {
    return true;
    console.log('testing');
  }
}
