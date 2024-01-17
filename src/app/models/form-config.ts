export interface FormConfig {
    type: string;
    label: string;
    fields: FormField[];
  }
  
  export interface FormField {
    type: string;
    label: string;
    name: string;
    required: boolean;
    // ... other properties
  }
  