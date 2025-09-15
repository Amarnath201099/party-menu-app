import DishCard from "./DishCard";

const DishList = ({
  dishes,
  selectedDishes,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) => {
  return (
    <div className="dish-list d-flex flex-wrap justify-content-center">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
};

export default DishList;
