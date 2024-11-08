# Navbar Project

This project is a responsive navigation bar built using React. The navigation bar includes links and social media icons, which toggle visibility on smaller screens.

## Features

- **Responsive Design**: The navbar adjusts to different screen sizes, with a toggle button to show or hide links on smaller screens.
- **Dynamic Links**: Links are dynamically rendered based on imported data.
- **Animated Toggle**: The height of the links container dynamically changes when toggled, providing a smooth open and close animation.
- **Social Media Icons**: Social icons are displayed alongside the links, also loaded dynamically.

## Project Structure

        ````plaintext
        src
        ├── App.js             # Main App component
        ├── Navbar.js          # Navbar component
        ├── data.js            # Links and social data
        ├── logo.svg           # Logo for navbar
        └── index.css          # CSS for styling


## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/navbar-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd navbar-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm start
    ```

## Usage

- The **logo** and **social media icons** are customizable.
- The navigation **links** are generated from the `data.js` file. To add or modify links, edit the `links` and `social` arrays in `data.js`.

## Components

- **App**: The main component that renders the `Navbar`.
- **Navbar**: The main navigation bar component. It uses `useState` and `useRef` for toggling visibility of links.

## Figma Design

You can view the Figma design of this project here:
[Figma Design Link](https://www.figma.com/design/Se61eLfK50x0JatmdSdLzL/Navbar?node-id=0-1&node-type=canvas&t=1UXnOXNwwbRWHyNO-0)

## Dependencies

- [React Icons](https://react-icons.github.io/react-icons/): For the hamburger icon (`FaBars`).
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.

## License

This project is open-source and available under the MIT License.
