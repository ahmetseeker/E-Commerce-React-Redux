import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  color,
  price,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
        <div class="card shadow-lg text-center p-3">
          <img class="card-img-top rounded clothes-img img-fluid object-fit-cover" src={img} alt={name} />
          <div class="card-body">
            <h5 class="card-title fw-bold">{name}</h5>
            <p class="card-text text-muted">{text}</p>
            <div className="d-flex align-items-center justify-content-between my-2">
                <div className="text-muted fw-bold badge" >Size: {defaultSize}</div>
                <span className="text-muted fw-bold badge" style={{backgrounColor: defaultColor}}>Color: {defaultColor}</span>
            </div>
            <button type="button"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              class="btn btn-outline-secondary"
            >
              Add To Cart
            </button>
          </div>
        </div>
  );
};

export default ProductSectionItem;
