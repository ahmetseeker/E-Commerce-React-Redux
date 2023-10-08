import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/slices/productsSlice";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <div>
      <Link to={`/filteredProducts/${type}/` + id} className="text-decoration-none text-dark">
        <div className="card" onClick={() => dispatch(singleProduct(id))}>
          <img
            src={img}
            alt="filteredImg"
            className="card-img img-fluid object-fit-cover"
            style={{ height: 25 + "rem" }}
          />
          <div className="card-body">
            <h6>{name}</h6>
            <p>{text}</p>
          </div>
          <div className="card-footer">
            <div className="mb-1">
              {colors.map((color, index) => (
                <i
                  className="badge me-1"
                  style={{ backgroundColor: color }}
                  key={index}
                >
                  {color}
                </i>
              ))}
            </div>
            <div className="fw-bold">{price} $</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
