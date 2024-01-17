import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() source: any[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    const group: any = {};

    this.source.forEach(section => {
      if (section.type === 'section') {
        section.fields.forEach((field: any) => {
          group[field.name] = [
            '',
            field.required ? Validators.required : null,
          ];
        });
      }
    });

    return this.fb.group(group);
  }

  onSubmit(): void {
    this.submit.emit(this.form.value);
  }

  onReset(): void {
    this.form.reset();
  
    // Reset checkbox values to false
    this.source.forEach(section => {
      if (section.type === 'section') {
        section.fields.forEach((field: any) => {
          const control = this.form.get(field.name);
          if (control && field.type === 'checkbox') {
            control.setValue(false);
          }
        });
      } else if (section.type === 'dynamic') {
        // Reset dynamic checkbox values to false
        section.fields.forEach((field: any) => {
          if (field.type === 'checkbox') {
            const control = this.form.get(field.name);
            if (control) {
              control.setValue(false);
            }
          }
        });
      }
    });
  
    // Mark the form as pristine
    this.form.markAsPristine();
  }  
}
