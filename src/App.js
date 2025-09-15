import { useState } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

const App = () => {
  // state for filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);

  // state for selected dishes and modal
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDish, setCurrentDish] = useState(null);

  // toggle between viewing all dishes or selected dishes
  const [viewSelectedOnly, setViewSelectedOnly] = useState(false);

  // reset all filters
  const resetFilters = () => {
    setSelectedCategory("");
    setSearchTerm("");
    setVegOnly(false);
    setViewSelectedOnly(false);
  };

  // filter logic based on current state
  const filteredDishes = dishes.filter((dish) => {
    if (viewSelectedOnly) {
      return selectedDishes.includes(dish.id);
    }

    const matchCategory = selectedCategory
      ? dish.mealType === selectedCategory
      : true;
    const matchSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchType = true;
    if (vegOnly && !nonVegOnly) {
      matchType = dish.type === "VEG";
    } else if (!vegOnly && nonVegOnly) {
      matchType = dish.type === "NON-VEG";
    } else if (vegOnly && nonVegOnly) {
      matchType = dish.type === "VEG" || dish.type === "NON-VEG";
    }

    return matchCategory && matchSearch && matchType;
  });

  // function to add dish
  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  // function to remove dish
  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  // open modal
  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
    setIsModalOpen(true);
  };

  // close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDish(null);
  };

  // toggle view selected dishes
  const toggleViewSelected = () => {
    if (viewSelectedOnly) {
      // going back to all dishes, clear filters
      resetFilters();
    } else {
      setViewSelectedOnly(true);
    }
  };

  // count selected dishes per category
  const categoryCounts = dishes.reduce((acc, dish) => {
    if (selectedDishes.includes(dish.id)) {
      acc[dish.mealType] = (acc[dish.mealType] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="app-container container">
      <h1 className="text-center my-4 title-style">Party Menu App</h1>

      {!viewSelectedOnly && (
        <>
          {/* filters section */}
          <Filters
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            vegOnly={vegOnly}
            onVegOnlyChange={setVegOnly}
            nonVegOnly={nonVegOnly}
            onNonVegOnlyChange={setNonVegOnly}
            categoryCounts={categoryCounts}
          />

          {/* Reset and View Selected buttons */}
          <div className="reset-select-container d-flex justify-content-center justify-content-md-end  mb-3 gap-2 flex-wrap">
            <button
              className="btn-style btn btn-outline-secondary w-25"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
            <button
              className="btn-style btn btn-outline-primary w-50"
              onClick={toggleViewSelected}
              disabled={selectedDishes.length === 0}
            >
              Show Selected Items
            </button>
          </div>
        </>
      )}

      {/* Back to all items button when viewing selected only */}
      {viewSelectedOnly && (
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-outline-dark" onClick={toggleViewSelected}>
            Back to All Items
          </button>
        </div>
      )}

      {/* Dish list or fallback message */}
      {filteredDishes.length > 0 ? (
        <DishList
          dishes={filteredDishes}
          selectedDishes={selectedDishes}
          onAddDish={handleAddDish}
          onRemoveDish={handleRemoveDish}
          onViewIngredients={handleViewIngredients}
        />
      ) : (
        <div className="text-center my-5 text-muted">
          {viewSelectedOnly && selectedDishes.length === 0 ? (
            <h5>No dishes selected yet.</h5>
          ) : (
            <h5>No dishes match your filters or search.</h5>
          )}
        </div>
      )}

      {/* Ingredient Modal */}
      {isModalOpen && (
        <IngredientModal dish={currentDish} onClose={handleCloseModal} />
      )}

      {/* selected dishes count at top */}
      <div
        className="fixed-bottom bg-light border-top px-md-5 p-3 d-flex flex-column flex-md-row justify-content-between align-items-center shadow"
        style={{ zIndex: 1050 }}
      >
        <div className="mb-3 me-auto mb-md-0">
          <strong>Total Selected Dishes: {selectedDishes.length}</strong>
        </div>
        <button className="btn btn-continue">Continue</button>
      </div>
    </div>
  );
};

export default App;
