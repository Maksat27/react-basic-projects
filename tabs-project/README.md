# Job Tabs Project

This project displays job information from an API in a tab-like format using React. Users can navigate between different jobs by clicking on buttons representing each company, allowing them to view job details like title, company, dates, and duties.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
  - [App](#app)
  - [JobInfo](#jobinfo)
  - [Duties](#duties)
  - [BtnContainer](#btncontainer)
- [API](#api)
- [Design](#design)
- [License](#license)

## Overview

This project fetches data from an API containing job information and displays it in a tabbed layout. Users can switch between jobs to view relevant information and responsibilities.

## Project Structure

    /src
    ├── App.js               # Main component handling state and data fetching
    ├── JobInfo.js           # Component to display job details
    ├── BtnContainer.js      # Component to display navigation buttons for jobs
    ├── Duties.js            # Component to display a list of duties for each job
    ├── index.js             # Entry point for the application
    └── index.css           # Styles for components

## Features

- Fetches job data from an API and stores it in state.
- Displays a loading indicator while fetching data.
- Allows navigation through different jobs using a button container.
- Shows each job’s title, company, dates, and a list of duties.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Icons**: Used for icons in the duties list.
- **UUID**: For generating unique keys for the duties list.

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
- Fetches job data from the API and manages the loading state.
- Uses `BtnContainer` to render navigation buttons for jobs.
- Uses `JobInfo` to display details of the currently selected job.

### JobInfo

- **File**: `JobInfo.js`
- Displays the selected job’s title, company, dates, and a list of duties.
- Uses the `Duties` component to render each duty.

### Duties

- **File**: `Duties.js`
- Displays each duty with an icon.
- Uses `uuid` to generate unique keys for each duty item.

### BtnContainer

- **File**: `BtnContainer.js`
- Renders a list of buttons for each job.
- Highlights the active button based on the selected job and allows navigation.

## API

The project fetches job data from the following API:

- **URL**: [https://www.course-api.com/react-tabs-project](https://www.course-api.com/react-tabs-project)
- Each job object contains:
  - `id`: Unique identifier for the job
  - `company`: Name of the company
  - `title`: Job title
  - `dates`: Employment period
  - `duties`: Array of duties related to the job

## Design

This project's design layout is available in Figma. You can view the design by following this link:

- **Figma URL**: [Tabs Design on Figma](https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1)

## License

This project is open-source and available under the [MIT License](LICENSE).
