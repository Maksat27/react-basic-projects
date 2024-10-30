# Menu Filter Project

This project displays a filterable menu where users can sort items by category using buttons. The layout and functionality are built using React, with separate components for the title, category buttons, menu items, and individual menu item details.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
  - [App](#app)
  - [Categories](#categories)
  - [Menu](#menu)
  - [MenuItem](#menuitem)
  - [Title](#title)
- [Design](#design)
- [License](#license)

## Overview

This project uses React to build a dynamic menu filtering application. The menu items are filtered by category, and a list of all available categories is generated automatically based on the menu data.

## Project Structure

      /src
      ├── App.js             # Main component handling state and filtering
      ├── Categories.js      # Renders filter buttons for each category
      ├── Menu.js            # Displays all filtered menu items
      ├── MenuItem.js        # Component to render individual menu item details
      ├── Title.js           # Component to display the title of the menu section
      ├── data.js            # Data file containing menu items
      └── index.css         # Styles for components

## Features

- **Dynamic Category Filter**: Filters menu items based on selected category.
- **Automatic Category List**: Generates category buttons based on available categories in the data.
- **Styled Components**: Custom styles for each component for a clean UI.

## Technologies Used

- **React**: JavaScript library for building user interfaces.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the project**
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Components Overview

### App

- **File**: `App.js`
- Manages the main state and filtering logic for the menu items.
- Passes category and menu data to child components.

### Categories

- **File**: `Categories.js`
- Renders a button for each category.
- Triggers filtering in the `App` component when a category is selected.

### Menu

- **File**: `Menu.js`
- Renders all filtered menu items.
- Uses `MenuItem` component for individual menu item details.

### MenuItem

- **File**: `MenuItem.js`
- Displays individual menu item details like title, price, image, and description.

### Title

- **File**: `Title.js`
- Renders the section title with a styled underline.

## Design

The design layout for this project is available in Figma. You can view it here:

- **Figma URL**: [Menu Filter Design on Figma](https://www.figma.com/design/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0-1&node-type=canvas&t=I7Q3gd2FqOwROXfR-0)

## License

This project is open-source and available under the [MIT License](LICENSE).
