const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
      <div
        className="modal-content bg-white p-4 rounded"
        style={{ width: "400px" }}
      >
        <h4>{dish.name}</h4>
        <p>{dish.description}</p>
        <h5>Ingredients:</h5>
        <ul>
          {dish.ingredients.map((ing, index) => (
            <li key={index}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <button className="btn btn-danger mt-3" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default IngredientModal;
