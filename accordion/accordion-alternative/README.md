# FAQ Accordion App

## Overview

The FAQ Accordion App is a simple React application that allows users to toggle the visibility of answers to frequently asked questions. It provides an interactive way to display information while keeping the UI clean and organized.

## Features

- **Toggle Functionality**: Users can click on a question to expand or collapse the corresponding answer.
- **One-at-a-Time Display**: Only one question's answer can be open at a time, ensuring a focused view for users.
- **Dynamic Rendering**: The app dynamically renders a list of questions and answers from a data source.
- **Clean UI**: Utilizes icons to indicate whether a question is expanded or collapsed, enhancing user experience.
- **Responsive Design**: The layout adapts to different screen sizes, making it usable on both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Icons**: A library for including icons easily in React applications.

## Usage

1. **Run the Application**: After starting the development server, open your browser and navigate to `http://localhost:3000` to view the app.

2. **Interacting with Questions**:

   - You will see a list of questions displayed on the screen.
   - Click on any question to reveal its corresponding answer.
   - Only one question's answer can be open at a time. When you open a new question, any previously opened answer will automatically close.

3. **Visual Indicators**:

   - A plus (`+`) icon indicates that the answer is hidden.
   - A minus (`-`) icon indicates that the answer is currently visible.

4. **Explore**: Feel free to click on different questions to see how the answers toggle.
