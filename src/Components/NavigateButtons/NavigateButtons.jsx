import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center py-4">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="me-4">
              <Link to={"/filteredProducts/" + button}>
                <button
                  onClick={() => dispatch(filterProducts(button))}
                  className="btn btn-outline-secondary btn-lg"
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-warning text-white rounded text-center p-1 w-50 mx-auto">
        <h4 className="mb-0">SALES UP TO 50%</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center p-4">
        <img
          src={clothes}
          className="img-fluid rounded shadow-lg w-75 clothes-img"
          alt="clothes"
        ></img>
      </div>
    </div>
  );
};

export default NavigateButtons;
