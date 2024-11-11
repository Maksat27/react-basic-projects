# Strapi Navbar Project

This project is a responsive, dynamic navigation bar built with React, allowing users to manage and display navigation links, a sidebar, and submenu components. The app uses context for global state management to control the sidebar and submenu visibility.

## Features

- **Dynamic Navigation**: Renders navigation links, sidebar links, and submenu items dynamically from a data file.
- **Sidebar and Submenu**: Toggles the sidebar on button click and shows a submenu on hovering over a navigation item.
- **Responsive Design**: Built to work across different screen sizes.
- **Global State Management**: Uses the React Context API to manage the sidebar and submenu visibility throughout the app.

## Project Structure

    /src
    ├── App.js # Main App component
    ├── Context.js # Context API setup for global state
    ├── Hero.js # Hero component
    ├── Navbar.js # Navbar component
    ├── Sidebar.js # Sidebar component
    ├── Submenu.js # Submenu component
    ├── NavLinks.js # Component for displaying nav links
    ├── data.js # Contains page and link data
    └── index.css # Main CSS file

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/strapi-navbar-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd strapi-navbar-project
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

- **Logo and Navigation Links**: Customizable through the `data.js` file.
- **Sidebar and Submenu Control**: Uses `AppProvider` from the Context API to manage sidebar and submenu visibility across components.

## Components

- **App**: The main component that renders `Navbar`, `Hero`, `Sidebar`, and `Submenu`.
- **Navbar**: Contains the main navigation links and the sidebar toggle button.
- **Hero**: Displays the header text and introduction section.
- **Sidebar**: A sidebar that toggles open and closed, displaying the sublinks in a categorized layout.
- **Submenu**: A submenu component that shows additional links related to the navigation item currently being hovered.
- **NavLinks**: Renders the navigation links with hover effects to show submenus.

## Dependencies

- **React Icons**: For icons in navigation, sidebar, and submenu.
- **React Context API**: For global state management across components.
- **React**: A JavaScript library for building user interfaces.

## Figma Design

The project’s design can be viewed on Figma:  
[Figma Design Link](https://www.figma.com/design/rXeU2gYTyKL2FrYmUNgv4r/Strapi-Submenus?node-id=0-1&node-type=canvas&t=y1nttAHQMAI9Q12K-0)

## License

This project is open-source and available under the MIT License.
