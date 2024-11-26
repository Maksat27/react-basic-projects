# Task Bud App

Task Bud is a simple task management application that allows users to create, edit, and delete tasks. It leverages **React**, **React Query**, and **Axios** for efficient state management, API interaction, and seamless user experience.

## Features

- **Create Tasks:** Add new tasks to your to-do list.
- **Edit Tasks:** Mark tasks as completed or toggle their completion status.
- **Delete Tasks:** Remove tasks from the list.
- **Real-Time Updates:** Automatically updates the task list with the latest changes using React Query's query invalidation.
- **Error Handling:** Displays user-friendly messages for errors using `react-toastify`.

## Technologies Used

- **React**: Frontend framework
- **React Query**: Data fetching and state management
- **Axios**: API communication
- **React Toastify**: Toast notifications
- **Node.js**: Backend API (assumed running at `http://localhost:5000/api/tasks`)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <file name>
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

- **Form Component**: Allows users to add new tasks by entering the task name and submitting the form.
- **Items Component**: Displays the list of tasks fetched from the backend API. Handles loading and error states.
- **SingleItem Component**: Represents each task, allowing users to toggle completion status and delete tasks.
- **React Query Custom Hooks**: Manages API calls for fetching, creating, editing, and deleting tasks.
- **Toast Notifications**: Provides feedback to users for success and error states using `react-toastify`.

## API

The app interacts with the following API endpoints:

1. **GET `/api/tasks`**: Fetches all tasks.
2. **POST `/api/tasks`**: Adds a new task.
   - **Request Body**: `{ "title": "task name" }`
3. **PATCH `/api/tasks/:id`**: Updates the completion status of a task.
   - **Request Body**: `{ "isDone": true }`
4. **DELETE `/api/tasks/:id`**: Deletes a task.

## Components and Functions

- **App**: The main component that renders `Form` and `Items` components.
- **Form**: Handles user input and submits new tasks to the API.
- **Items**: Renders the list of tasks and handles loading or error messages.
- **SingleItem**: Represents each task with buttons to toggle completion or delete the task.
- **Custom Hooks**:
  - `useFetchTasks`: Fetches the list of tasks from the API.
  - `useCreateTask`: Adds a new task and invalidates the query to refresh the task list.
  - `useEditTask`: Toggles the completion status of a task.
  - `useDeleteTask`: Deletes a task and refreshes the task list.
- **Utils**:
  - `customFetch`: Axios instance for API communication.

## License

This project is open-source and available under the MIT License.
