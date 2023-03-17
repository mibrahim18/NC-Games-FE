import { useEffect, useState } from "react";
import { getListAllCategories } from "../axios/apiQueries";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getListAllCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <ul className="review-card">
        {categories.map((category, i) => (
          <li key={i}>
            <h5>Category name: {category.slug}</h5>
            <p>Category description: {category.description}</p>
            <button onClick={() => handleClick(category.slug)}>
              All {category.slug} Reviews
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
