# TastyBook - Vue.js 3 APP

A simple and responsive recipe application built with **Vue 3**, **Pinia**, **TailwindCSS**, and **Vue Router**, integrating with the public API [TheMealDb](https://www.themealdb.com/api.php) to fetch recipe data.

---

## 🚀 Features

- 🎨 Responsive design powered by TailwindCSS
- 🏠 Homepage with featured recipe categories
- 🔍 Search recipes by name with instant feedback
- 📖 Detailed recipe pages with images, descriptions, and ingredients
- ⏳ Loading spinner for smooth UX during API calls
- 🔄 State management with Pinia for reactive data handling
- 🛣️ Vue Router dynamic routing for seamless navigation
- ⚠️ Graceful error handling for invalid API requests

---

## 💻 Technologies

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [TheMealDb API](https://www.themealdb.com/api.php)

---

## 🎯 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Install dependencies

```bash
npm install
# or
yarn install
```

### Running Locally

Start the development server:

```bash
npm run dev

# or

yarn dev
```

Open your browser at http://localhost:3000 (or the port shown) to explore the app!

---

## 🗂️ Project Structure

-src/
-├── assets/ # Static assets like images, styles
-├── components/ # Vue components (AppNavbar, FoodItem, HeroSection, TheSpinner, )
-├── layouts/ # (optional) Layout components
-├── pages/ # Views (HomeView, FoodsView, FoodView)
-├── router/ # Vue Router config
-├── stores/ # Pinia stores (recipes)
-├── App.vue # Root component
-└── main.js # Entry point

---

## 📝 Usage

```
Browse recipe categories on the homepage.

Click a category to see related recipes.

Search recipes by name on the Foods page.

Click a recipe to view detailed info with image and description.

Enjoy smooth loading feedback with spinner animations.
```

---

## 🔗 API Endpoints Used

Categories: /categories.php

Search Recipes by Name: /search.php?s=

Lookup Recipe by ID: /lookup.php?i=

Explore the official docs: TheMealDb API

---

## 👤 Author

Filipe de Souza Santana

GitHub: https://github.com/filipesantanadev
Linkedin: https://www.linkedin.com/in/filipe-de-souza-santana-409b351a2/
Email: fsantana.code@gmail.com
