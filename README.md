# StreamOn - Movie & Series Streaming Platform

StreamOn is a web-based platform for browsing movies and series, featuring a responsive UI with a Swiper carousel, search functionality, and category-based content organization. It integrates with the OMDB API to fetch detailed movie and series information, such as titles, posters, genres, and IMDb ratings.

## Features
- **Dynamic Content**: Fetches movie and series data from local JSON files (`movies.json`, `series.json`) and enriches it with OMDB API data.
- **Category Sections**: Displays content grouped by genre with a "View All" option for each category.
- **Newly Added Section**: Showcases the latest 7 movies and 3 series in a carousel.
- **Search Functionality**: Allows users to search for movies and series with real-time results and IMDb ratings.
- **Responsive Design**: Utilizes Swiper for smooth, autoplay-enabled carousels with navigation and pagination.
- **Caching**: Stores OMDB API data in `localStorage` to reduce API calls, with a cache limit of 1000 items.
- **Fixed Navbar**: Navbar sticks to the top during scrolling for easy navigation.
- **Dropdown Menu**: Displays categories dynamically fetched from the data.

## Technologies Used
- **HTML5**: Structure of the web pages.
- **CSS3**: Styling (via `styles.css`).
- **JavaScript**: Handles dynamic content, API calls, and interactivity.
- **Swiper.js**: Powers the carousel for content display (version 11).
- **OMDB API**: Provides movie and series metadata.
- **LocalStorage**: Caches API responses to optimize performance.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- An active internet connection for fetching OMDB API data.
- An OMDB API key (free tier available at [OMDB API](http://www.omdbapi.com/)).

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sarker5523/streamon.git
   cd streamon
