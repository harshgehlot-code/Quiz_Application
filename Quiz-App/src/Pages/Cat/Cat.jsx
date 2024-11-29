import Categories from '../../Data/Categories';

const CategorySelector = () => {
  return (
    <select className="form-select form-select-lg mb-3 inputSize" aria-label="Large select example">
      <option value="" selected disabled>
        Select Categories
      </option>

      {/* Map the categor */}
      {Categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
