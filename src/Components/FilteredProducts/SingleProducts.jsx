import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

const SingleProducts = () => {
  const product = useSelector((state) => state.productsReducer.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productSize = product[0].size ? product[0].size[0] : "";
  const [size, setSize] = useState(productSize);

  const productColor = product[0].color ? product[0].color[0] : "";
  const [color, setColor] = useState(productColor);

  return (
    <div className="container">
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="row m-5 p-5">
              <div className="col-md-12 col-lg-4">
                <img
                  src={item.img}
                  className="img-fluid object-fit-cover rounded-3"
                  alt={item.name}
                ></img>
              </div>
              <div className="col-md-12 col-lg-8 px-4 py-2 mt-2 d-flex flex-column">
                <h4>{item.name}</h4>
                <p className="fw-bold fst-italic">15% OFF</p>
                <p>{item.text}</p>
                <div className="pb-3">
                  <label htmlFor="size" className="form-label">
                    Pick a size
                  </label>
                  {item.size ? (
                    <select
                      onChange={(e) => setSize(e.target.value)}
                      name="size"
                      id="size"
                      className="form-select"
                    >
                      {item.size.map((itemSize, index) => {
                        return (
                          <option key={index} value={itemSize}>
                            {itemSize}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <div className="alert alert-danger">There isn't any size option!</div>
                  )}
                </div>

                <div className="pb-3">
                  <label htmlFor="color" className="form-label">
                    Pick a color
                  </label>
                  {item.color ? (
                    <select
                      onChange={(e) => setColor(e.target.value)}
                      name="color"
                      id="color"
                      className="form-select"
                    >
                      {item.color.map((itemColor, index) => {
                        return (
                          <option key={index} value={itemColor}>
                            {itemColor}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <div className="alert alert-danger">There isn't any color option!</div>
                  )}
                </div>
                <button onClick={() => dispatch(addToCart({id: item.id, name: item.name, size: size, img: item.img, text: item.text, color: color, price: item.price, amount: 1, totalPrice: item.price}))} className="btn btn-warning">Add To Cart</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProducts;
