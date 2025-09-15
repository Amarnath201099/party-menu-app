# 🍽️ Party Menu App

A responsive React web app to build a custom party food menu by filtering, searching, and selecting dishes.

---

## 🛠 Tech Stack

- ⚛️ **React** (Functional Components + Hooks)
- 🎨 **Bootstrap 5**
- 💻 **CSS** (Responsive with media queries)
- 🔣 **React Icons**

---

## 🔗 Deployment

👉 Live App: [View on Vercel](https://your-vercel-app-link.vercel.app)  
_(Replace the URL with your actual deployment link)_

---

## 📦 Features

- 🔍 **Filter Dishes By**:
  - 🍽️ Meal Type (Starter, Main Course, etc.)
  - 🥦/🍗 Veg / Non-Veg (custom toggles with food symbols)
- 🔎 **Search** dishes by name
- ➕➖ **Add or Remove** dishes to/from your menu
- ✅ **View only selected** dishes
- 📋 **Modal popup** to view dish ingredients
- 🔢 **Selected dish counter** with a 📌 fixed bottom **"Continue"** button
- 📱💻 **Responsive Design** (Mobile, Tablet, Desktop)

---

## 🧩 Components

### `App.js`

Main logic and state management:

- Handles all filters, search, selection, and modal control
- Passes props to child components

### `Filters.js`

- Category buttons
- Search input with icon
- Veg/Non-Veg toggles (custom styled)

### `DishList.js`

- Renders dish cards from filtered list
- Shows fallback messages when no results or selections

### `DishCard.js`

- Shows dish info and image
- Add/Remove button floats over image
- View Ingredients button

### `IngredientModal.js`

- Modal with dish details and ingredients

---

## 📁 File Structure

```bash
src/
├── App.js
├── App.css
├── data/
│ └── mockDishes.js
├── components/
│ ├── Filters.js
│ ├── DishList.js
│ ├── DishCard.js
│ └── IngredientModal.js
```

---

## 📥 Usage

Follow these steps to run the project locally:

### 1. Clone this repository

```bash
git clone https://github.com/your-username/party-menu-app.git
cd party-menu-app
```

### 2. Install dependencies

```
npm install
```

### 3. Run the app locally

```
npm start
```

- The app will be available at http://localhost:3000.

---

## 🚀 Future Improvements

Here are a few enhancements planned for the next version:

- 🧾 Add a cart system to manage selected dishes
- 🛒 Integrate order summary and checkout page
- 🔗 Connect to a backend (e.g., Node.js + Express)
- 💾 Store dishes in a real database (e.g., MongoDB or Firebase)
- 👤 User login & authentication
- 📊 Admin panel to manage dishes and categories

---

## 💬 Feedback & Suggestions

Your input is valuable!  
If you have ideas, feature requests, or find a bug — feel free to open an issue or reach out directly.

---

## 🙋 About Me

Made by **Amarnath Racha**

- 📧 **Email**: [amarnath201099@gmail.com](mailto:amarnath201099@gmail.com)

---

## 🙏 Thank You

Thank you for checking out this project!  
If you found it useful, consider giving it a ⭐️ on [GitHub](https://github.com/your-username).
