# Angular Dynamic Form Builder

## Project Overview

The Angular Dynamic Form Builder Component is a powerful tool for creating dynamic forms based on a JSON configuration. It allows users to define multi-section forms with various field types, such as text inputs, email inputs, date pickers, dropdown lists, checkboxes, textarea inputs, and dynamic fields.

## Features

- Multi-section forms with different field types
- Dynamic fields enabling addition, removal, and reordering based on selected options
- Validation and required rules applied to form fields
- Easy customization using a JSON configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Angular installed globally
- Bootstrap 5 CSS library

```bash
npm install -g @angular/cli
```

Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/angular-dynamic-form-builder.git
cd angular-dynamic-form-builder
```

2. Dependencies:

```bash
npm install
```

3. Usage
   In your Angular component:

```bash
<app-dynamic-form [source]="formContent" (submit)="onSubmit()"></app-dynamic-form>
```

4. JSON Configuration
   Example JSON configuration:

```bash
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
      // ... other fields
    ]
  },
  // ... other sections
]
```

## Coding Standards (Continued)

- **ESLint:** Use a pre-configured ESLint rule set for Angular and enforce it using tools like Husky or lint-staged.
- **EditorConfig:** Define common editor settings like indentation, spacing, and line endings for consistent code formatting across the team.
- **Prettier:** Format all code automatically on save with Prettier to ensure consistent code style and avoid manual formatting conflicts.

### Setup ESLint with Husky and lint-staged

Install required packages:

```bash
npm install --save-dev eslint husky lint-staged
```
