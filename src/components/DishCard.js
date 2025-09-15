import { FaPlus } from "react-icons/fa6";

const DishCard = ({
  dish,
  isSelected,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) => {
  return (
    <div className="d-flex flex-column w-100">
      <div className="dish-card m-2 mb-4 gap-3 position-relative">
        {/* Dish info */}
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          <p className="card-text">
            <strong>Type:</strong> {dish.type}
          </p>

          {/* View ingredients button */}
          <button
            className="btn btn-ing"
            onClick={() => onViewIngredients(dish)}
          >
            Ingredients
          </button>
        </div>

        {/* Dish image */}
        <div className="position-relative dish-img-container">
          <img src={dish.image} className="card-img" alt={dish.name} />

          {/* Floating Add/Remove Button */}
          <button
            className={`btn position-absolute add-btn-overlap  m-2 ${
              isSelected ? "btn-remove" : "btn-add"
            }`}
            style={{ bottom: 0, right: 0 }}
            onClick={() =>
              isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id)
            }
          >
            {isSelected ? (
              "Remove"
            ) : (
              <>
                Add <FaPlus className="plus-icon" />
              </>
            )}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default DishCard;
