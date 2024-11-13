# Shopping Cart Project

This project is a React-based shopping cart application. It utilizes the Context API and `useReducer` hook for state management, allowing users to view items in their cart, update quantities, and remove items. The application includes a Navbar that displays the total amount of items and a Cart Container that shows individual cart items with options to adjust quantities or clear the cart.

## Features

- **Shopping Cart**: Add, increase, decrease, and remove items from the cart.
- **Total Calculation**: Displays the total quantity and total cost of items in the cart.
- **Loading Indicator**: Shows a loading spinner while data is being fetched from the API.
- **Global State Management**: Uses React Context and `useReducer` for managing cart state across components.

## Project Structure

    /src
    ├── App.js # Main App component
    ├── context.js # Context API setup with useReducer for global state
    ├── Navbar.js # Navbar component displaying cart total amount
    ├── CartContainer.js # Main cart container with item list and total cost
    ├── CartItem.js # Individual cart item component
    ├── actions.js # Action types for useReducer
    ├── reducer.js # Reducer functions for managing cart actions
    ├── data.js # Sample data for cart items
    └── utils.js # Utility functions for calculating totals

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd shopping-cart-project
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

- **Navbar Component**: Shows the total amount of items in the cart.
- **CartContainer Component**: Displays items in the cart and allows users to increase, decrease, or remove items. It also includes a "clear cart" button.
- **CartItem Component**: Represents each individual item in the cart with its details (title, price, amount) and buttons to adjust quantity.
- **Context API**: Provides global state for managing the cart, loading state, and total calculations.

## API

The app fetches data from a mock API: [https://www.course-api.com/react-useReducer-cart-project](https://www.course-api.com/react-useReducer-cart-project).

## Components and Functions

- **App**: The main component that renders `Navbar` and `CartContainer` based on loading state.
- **Navbar**: Displays the total amount of items in the cart.
- **CartContainer**: Renders the cart items and the total cost.
- **CartItem**: Represents an individual cart item, with buttons to increase or decrease quantity.
- **AppProvider**: Context provider that manages global state using `useReducer` and dispatches actions for cart management.
- **useGlobalContext**: Custom hook for accessing the global context.
- **Actions**:
  - `CLEAR_CART`: Clears all items in the cart.
  - `REMOVE_ITEM`: Removes a specific item from the cart.
  - `INCREASE_AMOUNT`: Increases the quantity of a specific item.
  - `DECREASE_AMOUNT`: Decreases the quantity of a specific item.
  - `LOADING`: Sets loading state while fetching data.
  - `DISPLAY_ITEMS`: Loads fetched cart items into the global state.

## Figma Design

The project’s design can be viewed on Figma:  
[Figma Design Link](https://www.figma.com/design/5AwKjnWuM6BhRYmxdQFpky/Cart?node-id=0-1&node-type=canvas&t=OgANxyI4ZglJrqWf-0)

## License

This project is open-source and available under the MIT License.
