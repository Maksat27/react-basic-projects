# Color Generator App

This is a React application that generates color shades and tints based on a user-specified color. Users can select a color, view various shades and tints, and copy color codes directly to the clipboard.

## Features

- **Color Selection**: Users can pick a color using an input field or color picker.
- **Generate Shades & Tints**: Creates a range of 10 shades and tints of the selected color.
- **Copy to Clipboard**: Easily copy color codes by clicking on a color.
- **Error Handling**: Notifies users of any errors, such as invalid color inputs.

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
- **values.js**: Utility library to generate color shades and tints.
- **react-toastify**: Provides notifications for actions and errors.
- **nanoid**: For generating unique keys for colors.

## Components

- **App**: Main component that manages the state of colors and renders the form and color list.
- **Form**: Allows users to input or select a color and submit it to generate shades/tints.
- **ColorList**: Displays a list of colors generated based on the input.
- **SingleColor**: Renders each individual color with functionality to copy the color code.

## Code Overview

- **App Component**:

  - Manages the color shades and tints.
  - Contains the `addColor` function that creates color variations and catches any errors.

- **Form Component**:

  - Contains a color picker and text input for entering a color.
  - Submits the color value to generate shades and tints.

- **ColorList Component**:

  - Maps through the generated colors and renders each as a `SingleColor` component.

- **SingleColor Component**:
  - Displays a single color box.
  - Allows users to copy the color code to the clipboard by clicking the color.

## Usage

1. Use the color picker or type a hex color code in the input field.
2. Click "Submit" to generate color shades and tints.
3. Click any color box to copy the hex color code to the clipboard.

## License

This project is licensed under the MIT License.

## Design

The design layout for this project is available in Figma. You can view it here:

- **Figma URL**: [Color Generator Project Design on Figma](https://www.figma.com/design/P2SJ5QGOZvi49EOpoVTvsT/Color-generator?node-id=0-1&node-type=canvas&t=ZPeuEB1ERuCNy3Fh-0)

## Contributing

Contributions are welcome! Please submit a pull request or report issues.
