# React Carousel Project

This project demonstrates two types of carousels created with React: a custom-built carousel (`Carousel` component) and a carousel powered by the [react-slick](https://github.com/akiran/react-slick) library (`SlickCarousel` component).

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
  - [Carousel](#carousel)
  - [SlickCarousel](#slickcarousel)
- [Data](#data)
- [Customizations](#customizations)

## Project Structure

The project includes the following structure:

    /src
    ├── Carousel.js
    ├── SlickCarousel.js
    ├── App.js
    ├── data.js
    ├── index.js
    ├── index.css
    └── ...

- `Carousel.js`: Custom React carousel component.
- `SlickCarousel.js`: Carousel component using the `react-slick` library.
- `App.js`: Main application component rendering the carousel.
- `data.js`: Sample data for rendering carousel items.

## Features

### Carousel Component

- Custom-built carousel with automatic slide transition every 2 seconds.
- Buttons to navigate to the next or previous slide.
- Each slide includes a name, title, image, and quote.

### SlickCarousel Component

- Built using the `react-slick` library for easy customization and improved performance.
- Auto-play with adjustable speed.
- Dots navigation with infinite scrolling.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **react-slick**: Carousel component library for React.
- **slick-carousel**: CSS for `react-slick`.
- **FontAwesome Icons**: For carousel icons.

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

### Carousel

- **File**: `Carousel.js`
- This component uses `useState` to keep track of the current slide and `useEffect` for auto-advancing slides.
- It provides `prevSlide` and `nextSlide` buttons to navigate through the carousel manually.

### SlickCarousel

- **File**: `SlickCarousel.js`
- This component uses `react-slick` with options like `autoplay`, `infinite scrolling`, and `dots` navigation.
- Customizable `settings` object allows for different slide speeds, pauses, and more.

## Data

The sample data used in both carousels is imported from `data.js`. Each object in the list contains:

- `id`: Unique identifier.
- `name`: Person's name.
- `title`: Job title.
- `image`: Image URL.
- `quote`: Text for the quote.

## Customizations

### Carousel Settings

- **Carousel component**: Adjust slide interval in `useEffect`.
- **SlickCarousel component**: Update the `settings` object in `SlickCarousel.js` to control options like `speed`, `autoplaySpeed`, `slidesToShow`, etc.

## Design

This project's design layout is available in Figma. You can view the design by following this link:

- **Figma URL**: [Slider Design on Figma](https://www.figma.com/design/QfMzzThSYmgabSvn4t8Yfe/Slider?node-id=0-1&node-type=canvas&t=N8UpPeasQIaXP9bl-0)

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the creators of `react-slick` for providing an easy-to-use carousel solution.
