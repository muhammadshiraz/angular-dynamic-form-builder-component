# Angular Dynamic Form Builder Component

## Deliverables

This project includes a fully functional Angular application with a dynamic form builder component. Below are the deliverables for this project:

1. **Angular Application:** The project consists of a fully functional Angular application that incorporates the dynamic form builder component. The component allows users to create dynamic forms based on a JSON configuration.

2. **Code Repository Link:** The source code for the project is available on GitHub. You can access it through the following link: [GitHub Repository](https://github.com/muhammadshiraz/angular-dynamic-form-builder-component)

3. **README File:**

### Project Setup

To set up the project, follow these steps:

1. Ensure you have Angular and Bootstrap 5 CSS installed in your project.
2. Use the provided JSON configuration as the data source for the form builder component.

### Key Functionalities

- **Dynamic Form Builder Component:** The core functionality of the project is the dynamic form builder component. This component allows users to define multi-section forms with various field types, including text inputs, email inputs, date pickers, dropdown lists, checkboxes, textarea inputs, and dynamic fields.

- **Validation and Required Rules:** The dynamic form builder enforces validation and required rules on the form elements, ensuring data integrity.

### Implemented Coding Standards

The project adheres to the following coding standards:

- **ESLint:** A pre-configured ESLint rule set for Angular is enforced using tools like Husky or lint-staged.

- **EditorConfig:** Common editor settings like indentation, spacing, and line endings are defined for consistent code formatting across the team.

- **Prettier:** Code is automatically formatted on save with Prettier to ensure consistent code style and avoid manual formatting conflicts.

- **IgnoreFile:** A well-defined .gitignore file is utilized to exclude unnecessary files and directories from version control.

- **Additional Standards:** Other standards relevant to coding practices, such as naming conventions, file organization, and commit messages, are considered.

### Sample Usage

```html
<app-dynamic-form [source]="formContent" (submit)="onSubmit()"></app-dynamic-form>
```

## JSON Configuration Example

```base
[
  {
    "type": "section",
    "label": "Personal Information",
    "fields": [
      {
        "type": "text",
        "label": "First Name",
        "name": "firstName",
        "required": true
      },
      {
        "type": "text",
        "label": "Last Name",
        "name": "lastName",
        "required": true
      },
      {
        "type": "email",
        "label": "Email",
        "name": "email",
        "required": true,
        "validation": {
          "pattern": "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"
        }
      },
      {
        "type": "date",
        "label": "Date of Birth",
        "name": "dateOfBirth"
      }
    ]
  },
  {
    "type": "section",
    "label": "Contact Information",
    "fields": [
      {
        "type": "text",
        "label": "Phone Number",
        "name": "phoneNumber",
        "mask": "(###) ###-####"
      },
      {
        "type": "select",
        "label": "Country",
        "name": "country",
        "options": [
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          },
          {
            "value": "CA",
            "label": "Canada"
          }
        ]
      },
      {
        "type": "checkbox",
        "label": "Subscribe to newsletter",
        "name": "subscribe"
      }
    ]
  },
  {
    "type": "section",
    "label": "Additional Information",
    "fields": [
      {
        "type": "textarea",
        "label": "Bio",
        "name": "bio"
      },
      {
        "type": "dynamic",
        "label": "Skills",
        "name": "skills",
        "options": [
          {
            "value": "programming",
            "label": "Programming"
          },
          {
            "value": "design",
            "label": "Design"
          },
          {
            "value": "writing",
            "label": "Writing"
          }
        ]
      }
    ]
  }
]
```
