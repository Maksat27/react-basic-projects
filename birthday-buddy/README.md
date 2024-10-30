# Birthday Buddy

Birthday Buddy is a simple React application that displays a list of people's birthdays. Users can see how many birthdays are today and can clear the list with a button.

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
The project displays a list of birthdays with each entry including the person's name, age, and image. Users can view the total number of birthdays today and have the option to clear the list.

## Project Structure
      /src
      ├── App.js # Main component managing the state and rendering the birthday list
      ├── data.js # Data file containing birthday information
      ├── List.js # Component rendering the list of people
      ├── Person.js # Component rendering individual person's details
      └── index.css # Styles for the application


## Features
- **Dynamic Birthday Count**: Displays the number of birthdays today.
- **Clear All**: Users can clear all entries with a single button click.
- **User-Friendly Interface**: Simple and clean layout for easy navigation.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **CSS**: Basic styling for layout and design.

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
- Manages state and displays the total number of birthdays. Renders the `List` component and a button to clear all entries.

### List
- **File**: `List.js`
- Maps through the array of people and renders a `Person` component for each entry.

### Person
- **File**: `Person.js`
- Displays individual person's details, including their name, age, and image.

## Design
The design layout for this project is available in Figma. You can view it here:
- **Figma URL**: [Birthday Buddy Design on Figma](https://www.figma.com/design/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=3-2&node-type=frame&t=VE27IEhhOSLA15cO-0)

## License
This project is open-source and available under the [MIT License](LICENSE).
