import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProducts from "./Components/FilteredProducts/SingleProducts";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";

function App() {

  const user = useSelector((state) => state.authReducer.user)
  const { authUser } = user;
  console.log("user", user);
  console.log("auth", authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={ authUser ? <Main></Main> : <Login></Login>}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProducts></SingleProducts>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          {/* <Route path="/auth" element={<Login></Login>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
