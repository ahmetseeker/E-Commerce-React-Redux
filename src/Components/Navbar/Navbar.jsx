import React from "react";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  const user = useSelector((state) => state.authReducer.user);
  const { name, img, authUser } = user;
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-dark p-2 w-100">
        <h3 className="text-white fw-bold text-center">Welcome All</h3>
      </div>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white p-0">
          <a href="/" class="navbar-brand">
            <img src={logo} alt="logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto text-end p-1 mb-2 fw-bold">
              {authUser && (
                <li className="nav-item">
                  <div className="nav-link btn text-end" onClick={() => dispatch(logout())}>
                    Logout
                  </div>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i class="fa-solid fa-heart me-1"></i>Wish List
                </a>
              </li>
              <Link to={"/cart"} className="text-decoration-none">
                <li className="nav-item">
                  <div className="nav-link">
                    {totalAmount > 0 ? (
                      <span className="badge bg-danger p-1 me-1">
                        {totalAmount}
                      </span>
                    ) : (
                      <i class="fa-solid fa-bag-shopping me-1"></i>
                    )}
                    Shopping Bag
                  </div>
                </li>
              </Link>
              {authUser && <li className="nav-item">
                <a className="nav-link" href="/">
                  <img src={img} alt="profile" className="img-fluid img-thumbnail rounded-circle p-0 me-1" style={{width: 30 + "px"}}/>Hi, {name}
                </a>
              </li>
              }
            </ul>
          </div>
        </nav>
      </div>
      <div className="bg-dark text-white d-flex justify-content-around align-items-center w-100 py-3">
        <div>50% OFF</div>
        <div>Free Shipping And Returns</div>
        <div>Different Payment Methods</div>
      </div>
    </>
  );
};

export default Navbar;
