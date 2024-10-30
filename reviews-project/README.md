# React Reviews Carousel

This project is a simple React-based reviews carousel. Users can navigate through various reviews using next and previous buttons or select a random review with the "Surprise Me" button.

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
The project displays user reviews with each review including the person’s name, job title, photo, and review text. Users can view the next, previous, or a random review by clicking the respective buttons.

## Project Structure
      /src  
      ├── App.js           # Main component for carousel functionality  
      ├── data.js          # Data file containing reviews information  
      └── styles.css       # Styles for the carousel components  


## Features
- **Next and Previous Navigation**: Navigate through reviews using arrow buttons.
- **Random Review**: Display a random review by clicking the "Surprise Me" button.
- **Smooth UI**: Simple and user-friendly interface.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Icons**: For arrow and quote icons in the carousel.

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
- Handles carousel logic for navigating through reviews and displaying random reviews.
- Uses `useState` for current review index.

## Design
The design layout for this project is available in Figma. You can view it here:
- **Figma URL**: [Reviews Carousel Design on Figma](https://www.figma.com/design/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0-1&node-type=canvas&t=4Jrfcetys6lwUl4a-0)

## License
This project is open-source and available under the [MIT License](LICENSE).
