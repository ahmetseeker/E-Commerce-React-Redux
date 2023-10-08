import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";
import Error from "../Error/Error";

const FilteredProducts = () => {
  const products = useSelector(
    (state) => state.productsReducer.filteredProducts
  );

  const error = useSelector((state) => state.productsReducer.error);

  const { type } = useParams();
  const dispatch = useDispatch();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];

  const sizeButtons = ["S", "M", "L", "XL"];

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container m-3 p-3">
        <h1 className="fw-bold text-scondary">{type}</h1>
        <div className="d-flex align-items-center justify-content-between py-4 m-1">
          <div className="d-flex aling-items-center justify-content-center gap-3">
            {genderButtons.map((item, index) => (
              <div key={index}>
                <button onClick={() => dispatch(filterGender(item))} className="btn btn-outline-secondary">{item}</button>
              </div>
            ))}
            <button onClick={() => dispatch(sortByPrice())} className="btn btn-outline-secondary">High Price</button>
            <div class="dropdown">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select a color
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {colorButtons.map((item, index) => (
                  <button onClick={() => dispatch(filterByColor(item))} key={index} class="dropdown-item">
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div class="dropdown">
              <button disabled = {type === "Bags" || type === "Shoes"}
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select a size
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {sizeButtons.map((item, index) => (
                  <button onClick={() => dispatch(filterBySize(item))} key={index} class="dropdown-item">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(filterProducts(type))} className="btn btn-outline-secondary">Clear Filters</button>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="row g-4">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  ></ProductCard>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
