# Tours Project

This is a simple React-based project that fetches tour data from an API and displays it in a user-friendly format. Users can view a list of available tours, toggle the information display, and remove tours they're not interested in. If all tours are removed, a button allows users to refresh the list.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
- [Design](#design)
- [License](#license)

## Overview
The project displays user tours with each tour including the name, price, image, and description. Users can view the details of each tour and remove tours they're not interested in.

## Project Structure
      /src  
      ├── App.js           # Main component managing the state and fetching data
      ├── Loading.js       # Component displaying a loading spinner  
      ├── Tours.js         # Component rendering the list of tours  
      ├── Tour.js          # Component rendering individual tour details  
      └── index.css       # Styles for the tour components  

## Features
- **Loading Indicator**: Displays a loading spinner while fetching data.
- **Tours List**: Shows tour information including images, names, prices, and descriptions.
- **Expandable Text**: Allows users to read more or less of the tour description.
- **Remove Tour**: Users can remove tours from the list. If all tours are removed, a "Refresh" button appears to reload the list.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Basic styling for layout, buttons, and animations.
- **API**: Data fetched from a sample API at `https://www.course-api.com/react-tours-project`.

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
- Manages state and renders `Loading` or `Tours` based on data fetched.

### Loading
- **File**: `Loading.js`
- Displays a loading spinner while data is being fetched.

### Tours
- **File**: `Tours.js`
- Maps through tour data and renders each `Tour` component.

### Tour
- **File**: `Tour.js`
- Displays individual tour details, including the ability to read more/less and remove a tour.

## Design
The design layout for this project is available in Figma. You can view it here:
- **Figma URL**: [Tours Project Design on Figma](https://www.figma.com/design/OnLoM3AzBFaHzSc2iolJS0/Tours?node-id=4-2&node-type=frame&t=9ICnPDuwhb2nAazc-0)

## License
This project is open-source and available under the [MIT License](LICENSE).
