# Sidebar and Modal Project

This project is a simple React application featuring a toggleable sidebar and modal. The application uses React's Context API to manage global state, allowing seamless control of both the sidebar and modal across components.

## Features

- **Sidebar**: A responsive sidebar that can be opened or closed with a button. The sidebar includes navigation links and social media links.
- **Modal**: A modal window that appears over the main content when triggered.
- **Global State Management**: Uses the Context API to handle the open/close state of the sidebar and modal.

## Project Structure

    /src
    ├── App.js # Main App component
    ├── context.js # Context API setup for global state
    ├── Home.js # Home component with toggle buttons
    ├── Modal.js # Modal component
    ├── Sidebar.js # Sidebar component with navigation and social links
    ├── data.js # Data for links and social media
    └── index.css # Main CSS file for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sidebar-modal-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sidebar-modal-project
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

- **Home Component**: Contains buttons to open the sidebar and modal.
- **Sidebar Component**: Displays navigation links and social icons. Uses the `isSidebarOpen` state to control its visibility.
- **Modal Component**: Shows modal content based on the `isModalOpen` state.
- **Context API**: Provides global state for sidebar and modal visibility across components.

## Components

- **App**: The main component that renders `Home`, `Modal`, and `Sidebar`.
- **Home**: Contains buttons to open the sidebar and modal.
- **Sidebar**: Renders a sidebar with navigation links and social icons.
- **Modal**: Renders a modal window with overlay.
- **AppProvider**: Manages global state for opening and closing both the sidebar and modal using React Context.

## Dependencies

- **React Icons**: Provides icons for the sidebar, modal, and buttons.
- **React Context API**: Used for global state management across components.

## Figma Design

The project’s design can be viewed on Figma:  
[Figma Design Link](https://www.figma.com/design/cFyEiRb6jQdVIVK9M5eoe6/Sidebar-and-modal?node-id=0-1&node-type=canvas&t=tMRyhMPoO17qAZiW-0)

## License

This project is open-source and available under the MIT License.
