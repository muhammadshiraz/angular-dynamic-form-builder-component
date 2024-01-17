// src/app/form.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formDataSubject = new BehaviorSubject<any>({});
  formData$: Observable<any> = this.formDataSubject.asObservable();

  updateFormData(formData: any): void {
    this.formDataSubject.next(formData);
  }
}
