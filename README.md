# Table of Contents

- [Table of Contents](#table-of-contents)
- [The Booking App](#the-booking-app)
- [Setup and Evaluation](#setup-and-evaluation)
- [Front-end Architecture](#front-end-architecture)
  - [Folder Structure](#folder-structure)
  - [Component Architecture](#component-architecture)
  - [Naming Conventions](#naming-conventions)
  - [Use of Dependencies](#use-of-dependencies)
  - [Data Fetching](#data-fetching)
  - [Unit Testing](#unit-testing)
- [Future Considerations](#future-considerations)
- [Honour Code](#honour-code)

---

# The Booking App

This Booking App was created as the final capstone project of the **Meta Front-End Developer Certification**.

**Preview**: Little Lemon is a family-owned Mediterranean restaurant that blends traditional recipes with a modern twist. Our goal is to provide our customers with a unique dining experience that will take them on a culinary journey through the Mediterranean.

**Instructions Received**: To create a modern responsive Front-end for the Little Lemon app with a Bookings feature which they lack at present.

---

# Setup and Evaluation

```bash
# Clone the repository
~ git clone https://github.com/oussamabouchikhi/capstone.git

# Install the necessary dependencies
~ npm install

# Run the app
~ npm start

# Run tests
~ npm test

# Run tests with coverage
~ npm test:cv
```

---

# Front-end Architecture

The frontend architecture was designed with several key considerations in mind:

1. **Folder Structure**: Organizing files within the `src` folder to ensure clarity and maintainability.
2. **Component Architecture**: Developing reusable components to enhance modularity and efficiency.
3. **Naming Conventions**: Establishing consistent naming for CSS classes and variables to maintain a standardized codebase.
4. **Use of Dependencies**: Carefully selecting dependencies to minimize bloat and test core skills.
5. **Data Fetching**: Managing data effectively, considering future scalability and potential integration with a CMS.
6. **Unit Testing**: Ensuring comprehensive test coverage to maintain code quality and reliability.

---

## Folder Structure

The project is organized into several key folders:

- **components**: Contains individual components. Complex components may have nested `components` folders. Each component folder typically includes:
  - `Component.jsx`: The component itself.
  - `Component.css`: The stylesheet for the component.
  - `index.js`: For exporting the component.
  - `Component.test.jsx`: Test file for the component.

- **pages**: Contains single pages in the application, which are composed of various components. Pages may have their own `components` and `pages` folders for nested components and pages.

- **context**: Contains Context Providers and hooks for accessing context data.

- **hooks**: Contains hooks that are unrelated to context, such as `useWindowResize` for tracking window resizing.

- **actions**: Contains reducer functions, initial states, and related hooks.

- **utilities**: Contains utility functions, such as `validateNumber`.

- **settings**: Contains global settings, including a `cms` folder that mocks a content management system for sourcing page content. This can be internationalized later.

> **Note**: The following directory tree was generated with `tree -d -I 'node_modules|coverage'`.

**Directory Tree** (excluding `node_modules` and `coverage`):

```s
├── public
└── src
    ├── actions
    ├── assets
    ├── components
    │   ├── Backdrop
    │   ├── Button
    │   ├── Card
    │   ├── Error
    │   ├── Footer
    │   ├── Header
    │   │   └── components
    │   │       └── BurgerMenu
    │   ├── Heading
    │   ├── Icon
    │   ├── Label
    │   ├── Logo
    │   ├── Main
    │   ├── ProgressBar
    │   ├── ReviewStar
    │   ├── Select
    │   │   └── components
    │   │       └── Option
    │   ├── SocialMediaWidget
    │   ├── Stack
    │   ├── Table
    │   │   └── components
    │   │       ├── TableBody
    │   │       ├── TableCell
    │   │       ├── TableHeader
    │   │       └── TableRow
    │   └── Textfield
    ├── context
    │   ├── AppProvider
    │   ├── FormProvider
    │   └── ThemeProvider
    ├── hooks
    ├── pages
    │   ├── Booking
    │   │   ├── components
    │   │   │   └── BookingForm
    │   │   └── pages
    │   │       └── ConfirmedBooking
    │   └── Home
    │       └── components
    │           ├── About
    │           ├── Hero
    │           ├── Specials
    │           └── Testimonials
    ├── settings
    │   └── cms
    └── utilities
        └── tests
```

---

## Component Architecture

The following design patterns have been implemented:

- Most components are single units of functional code.
- Complex components that can be used standalone are broken into separate components. The folder structure above shows their locations.

- Responsibilities are isolated where necessary, e.g., Table ([read more](./src/components/../../../src/components/Table/README.md)).

- The **`Stack`** and **`Table`** elements optionally follow the **[Composite Components pattern](https://betterprogramming.pub/compound-component-design-pattern-in-react-34b50e32dea0)**, providing additional flexibility as detailed in the Table documentation.

  **Example**:

  ```jsx
  import { Table } from './components';

  const CustomTable = () => {
    return (
      <Table>
        <Table.Body>
          <Table.Header>
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Price</Table.Cell>
          </Table.Header>

          <Table.Header>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Tchimbou</Table.Cell>
            <Table.Cell>30.00</Table.Cell>
          </Table.Header>

          <Table.Header>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Della3</Table.Cell>
            <Table.Cell>570.00</Table.Cell>
          </Table.Header>
        </Table.Body>
      </Table>
    );
  };
  ```

- A **FormContextProvider** supplies the current `state` and `dispatch` function to the Booking Form, allowing for multiple forms with individual contexts as the app grows.

---

## Naming Conventions

The naming conventions followed are:

- **CSS Component and Page specific Classes**: `LL-Component` for the top-level class of the root element of each component. Child elements follow an appended PascalCase name, e.g., `LL-ComponentSubComponent`.

- **CSS Utility Classes**: Utility classes like `text-sm`, `text-m`, `text-xl` are preset in `App.css` for global styles, allowing quick font-size adjustments by any component, e.g., the **`Heading`** component.

- **CSS Variables**: CSS Variables provide globally used presets for a standardized look and feel. For example, instead of repeatedly writing a complex `box-shadow` property, presets like `box-shadow-1`, `box-shadow-2`, `box-shadow-3` are available.

---

## Use of Dependencies

This project aims to minimize dependencies to test core skills.

- No CSS library has been used; all CSS is written from scratch.
- No form library like Formik or validation library like Yup has been used. Instead, utility functions like `validateNumber` are created and used, found in the `src/utilities` folder.
- Font Awesome is used for icons.

---

## Data Fetching

Data is often replicated (e.g., header and footer links) or available as arrays/objects that may change in size. Future considerations include retrieving this data from a database or CMS. Currently, data is mocked using the `settings/cms` folder to simulate fetching from a CMS.

---

## Unit Testing

Unit testing is done using React Testing Library, Jest, and Jestdom, which come with `create-react-app`.

- `setupTests.js` is modified to interact with the window global object.
- React hooks are mocked within components. Mocks for `useContext`, `useLocation`, `useForm`, and `dispatch` function of `useReducer` are included.
- Unit tests are located in each component and page folder.

---

# Future Considerations

- The use of **Context API** and **`useReducer`** in the form ensures flexibility for future modifications. For example, adding a Mobile Phone OTP Validation service to prevent bot bookings.
- A `ThemeProvider` wrapping all pages to provide styling when switching between dark and light themes.

---

# Honour Code

This project is solely done by me, Oussama Bouchikhi. Contact me on **[GitHub](https://www.linkedin.com/in/oussamabouchikhi)** for collaboration on interesting projects.
