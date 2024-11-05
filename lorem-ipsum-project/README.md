# Custom Lorem Ipsum Generator

This is a React application that generates random placeholder text for web or design projects. Users can select the number of paragraphs they want to generate from a variety of humorous and thematic text samples.

## Features

- **Generate Paragraphs**: Users can select a number of paragraphs (1 to 8) to display.
- **Random Text Options**: Provides multiple options of text, such as pirate-themed, zombie-themed, and more.
- **Responsive UI**: A simple and clean user interface for easy use.

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
- **nanoid**: For generating unique keys for each paragraph element.

## Components

- **App**: The main component that handles state and renders the form and generated text.
- **Form**: Contains an input field for selecting the number of paragraphs and a submit button.

## Code Overview

- **App Component**:

  - Manages the state for the number of paragraphs and the displayed text.
  - Contains the `handleSubmit` function to set the number of paragraphs based on user input.

- **Form Component**:
  - Allows the user to select the number of paragraphs to display.
  - Calls the `handleSubmit` function to generate the requested amount of text.

## Usage

1. Select the number of paragraphs you want to generate (1-8) in the input field.
2. Click the "Generate" button to display the generated text.
3. The application will display the selected number of paragraphs from the pre-defined text array.

## License

This project is licensed under the MIT License.

## Design

The design layout for this project is available in Figma. You can view it here:

- **Figma URL**: [Lorem Ipsum Generator Project Design on Figma](https://www.figma.com/design/JRDDc3aN6uiBS3yvjbkk0s/Lorem-ipsum?node-id=0-1&node-type=canvas&t=s7vYdYzY2XMHEYkq-0)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or report issues.

## Contact

For any questions or feedback, reach out at [your-email@example.com].
