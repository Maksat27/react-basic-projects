# Grocery Bud App

This is a simple React application to manage a grocery list. Users can add items, mark them as completed, and remove items from the list. Data is stored in `localStorage` so the list persists even after refreshing the page.

## Features

- **Add items:** Enter a new item name to add it to the list.
- **Mark as completed:** Toggle items as completed or incomplete.
- **Remove items:** Delete items from the list.
- **Persistent storage:** Items are saved in `localStorage`.

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

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **react-toastify**: For showing success and error notifications.
- **nanoid**: For generating unique IDs for items.

## Components

- **App**: Main component that manages the state of the items and renders other components.
- **Form**: Component for adding new items.
- **Items**: Displays the list of items.
- **SingleItem**: Renders individual items with options to mark as completed or delete.

## Code Overview

- **App Component**:

  - Manages the list of items and saves it in `localStorage`.
  - Includes functions to remove an item and toggle completion.

- **Form Component**:

  - Takes the input for a new item.
  - Adds the new item to the list upon submission.

- **Items Component**:

  - Renders a list of `SingleItem` components.

- **SingleItem Component**:
  - Displays a single item with options to mark as completed or remove.

## Usage

1. Add a new item by typing it in the input field and clicking the "Add Item" button.
2. Mark an item as completed by clicking on the checkbox.
3. Delete an item by clicking the "Delete" button.
4. Notifications will appear for actions like adding or removing items.

## License

This project is licensed under the MIT License.

## Design

The design layout for this project is available in Figma. You can view it here:

- **Figma URL**: [Grocery Bud Project Design on Figma](https://www.figma.com/design/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0-1&node-type=canvas&t=z5TwgF0OaWsMR1G1-0)

## Contributing

Contributions are welcome! Feel free to submit a pull request or report issues.
