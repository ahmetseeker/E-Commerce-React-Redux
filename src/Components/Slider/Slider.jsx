import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slideReducer.value);
  const dispatch = useDispatch();

  return (
    <div className="position-relative">
      <div>
        {sliderData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex ? "sliderMainImg" : "sliderImg"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img src={item.img} className="img-fluid" alt="shoes"></img>
                )}
              </div>
              <div className="slide-text">
                <p className="text-white fw-bold h3">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center dots">
        {sliderData.map((dot, index) => {
          return (
            <div className="me-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "btn-secondary rounded-5 p-4 btn"
                    : "btn-white rounded-5 p-4 btn"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <div
          className="btn btn-danger rounded-3 slide-btn-left"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div
          className="btn btn-danger rounded-3 slide-btn-right"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
