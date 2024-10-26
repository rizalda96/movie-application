# Movie Listing Application

A web application built with **Laravel 5.8** on the backend and **Vue.js 2.7** on the frontend. This application allows users to log in, view a list of movies from OMDB API, filter movies, add movies to favorites, and switch between different languages.

## Features

1. **Login System**
   - Use the provided credentials to log in.
2. **Movie Listing (OMDB API Integration)**
   - Browse a list of movies fetched from the OMDB API.
3. **Movie Filtering**
   - Search and filter movies based on their title.
4. **Favorite Movies**

   - Add or remove movies from your favorite list.

5. **Multi-Language Support**
   - Switch between different languages for a better user experience.

## Installation Guide

Follow these steps to set up and run the project on your local machine.

### Backend Installation (Laravel 5.8)

1. **Download Project**

   Clone or download the project files to your local machine.

2. **Install PHP Dependencies**

   Navigate to the project directory and run the following command to install the required PHP dependencies:

   ```
   composer install
   ```

3. **Database Migration and Seeding**

   Run the database migrations and seed the data:

   ```
   php artisan db:migrate --seed
   ```

4. **Serve the Application**

   Run the Laravel development server:

   ```
   php artisan serve
   ```

### Frontend Installation (Vue.js 2.7)

1. **Install JavaScript Dependencies**

   In the project directory, install the required frontend dependencies:

   ```
   npm install
   ```

2. **Run Frontend Build**

   For continuous development, use the following command to build and watch for changes:

   ```
   npm run watch
   ```

   Alternatively, for production builds:

   ```
   npm run production
   ```

## Minimum Requirements

To run this project, ensure that your system meets the following requirements:

- PHP >= 7.1
- Composer
- Node.js and npm

## Credentials for Login

Use the following credentials to log into the system:

- **Username**: `aldmic`
- **Password**: `123abc123`

## Backend Packages

The following PHP packages are used in this project:

- **guzzlehttp/guzzle**: HTTP client for making requests.
- **tightenco/ziggy**: Generate JavaScript routes from Laravel routes.

## Frontend Packages

The following JavaScript packages are utilized:

- **axios**: Promise-based HTTP client.
- **bootstrap-vue**: Bootstrap components for Vue.js.
- **lodash**: Utility functions for common programming tasks.
- **sass**: CSS pre-processor for styling.
- **vee-validate**: Form validation for Vue.js.
- **vue-i18n**: Internationalization plugin for Vue.js.
- **vue-router**: Vue.js routing.
- **sweetalert2**: Beautiful alerts and modals.

## How to Use

1. **Login**
   - Use the provided credentials to access the application.
2. **Browse Movies**

   - View a list of movies fetched from OMDB API.

3. **Filter Movies**

   - Use the search feature to filter movies by title.

4. **Manage Favorites**

   - Add movies to your favorite list and remove them if necessary.

5. **Switch Language**
   - Change the language of the interface using the language switcher.
