import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log("cart", cart);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="container">
          <div className="card m-3 w-75 mx-auto">
            <div className="card-header">
              <h2>Shopping Bag</h2>
            </div>
            <div className="card-body">
              {cart.map((cartItem, index) => {
                return (
                  <div className="row p-3 border-top border-bottom m-2" key={index}>
                    <div className="col-lg-4"><img src={cartItem.img} alt={cartItem.className} className="img-fluid rounded"></img></div>
                    <div className="col-lg-8">
                        <h4>{cartItem.name}</h4>
                        <p className="fst-italic mb-4">{cartItem.text}</p>
                        <div className="fw-bold fst-italic">Selected Size: {cartItem.size}</div>
                        <div className="fw-bold fst-italic">Selected Color: {cartItem.color}</div>
                        <div className="fw-bold fst-italic">Price: {cartItem.price} $</div>
                        <div className="fw-bold fst-italic">Amount: {cartItem.amount}</div>
                        <div className="fw-bold fst-italic">Total Price: {cartItem.totalPrice} $</div>
                        <button onClick={() => dispatch(removeFromCart(cartItem))} className="btn btn-danger my-3">Remove</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card-footer bg-white text-center">
                <span>Total Price Of All Products: <strong>{totalPrice} $</strong></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-info p-3 m-3 text-white w-50 mx-auto text-center h4">
          Empty Cart!
        </div>
      )}
    </div>
  );
};

export default Cart;
