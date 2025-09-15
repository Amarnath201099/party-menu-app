import { CiSearch } from "react-icons/ci";

const Filters = ({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  nonVegOnly,
  onNonVegOnlyChange,
  categoryCounts,
}) => {
  const categories = ["STARTER", "MAIN COURSE", "SIDES", "DESSERT"];

  return (
    <div className="filters mb-4">
      {/* Search Box */}
      <div className="search-container mb-3 d-flex justify-content-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-box"
            placeholder="Search dish for your party..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <span className="input-group-text bg-white search-icon">
            <CiSearch size={25} />
          </span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row align-items-md-center gap-2">
        {/* Category Buttons */}
        <div className="mb-3 mb-md-0 d-flex justify-content-between justify-content-md-start gap-1 gap-md-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn-style btn m-1 ${
                activeCategory === category ? "active-category" : ""
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
              {categoryCounts[category] > 0 ? (
                <span className="badge bg-danger ms-2">
                  {categoryCounts[category]}
                </span>
              ) : (
                " 0"
              )}
            </button>
          ))}
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center gap-2 ms-lg-auto">
          {/* Veg & Non-Veg Toggles */}
          <div className="d-flex justify-content-center gap-4 mb-2">
            {/* Veg Toggle */}
            <label className="form-check form-switch d-flex align-items-center gap-2">
              <input
                className="form-check-input veg-toggle"
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => onVegOnlyChange(e.target.checked)}
              />
              <span className="toggle-name">Veg</span>
              <span className="veg-symbol"></span>
            </label>
          </div>
          {/* Non-Veg Toggle */}
          <div className="d-flex justify-content-center gap-4 mb-2">
            <label className="form-check form-switch d-flex align-items-center gap-2">
              <input
                className="form-check-input nonveg-toggle"
                type="checkbox"
                checked={nonVegOnly}
                onChange={(e) => onNonVegOnlyChange(e.target.checked)}
              />
              <span className="toggle-name">Non-Veg</span>
              <span className="nonveg-symbol"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
