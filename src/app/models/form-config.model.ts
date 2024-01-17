// form-config.model.ts
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
  validation?: {
    pattern?: string;
    // Add other validation rules as needed
  };
  options?: {
    value: string;
    label: string;
  }[];
  mask?: string;
}
