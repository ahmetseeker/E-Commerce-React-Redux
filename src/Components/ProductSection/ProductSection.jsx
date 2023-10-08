import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

const ProductSection = () => {
  return (
    <div>
      <div className="bg-warning text-center text-white w-50 mx-auto rounded py-1">
        <h3 className="mb-0">Summer T-Shirt SALE 30%</h3>
      </div>
      <div className="row container mx-auto my-4 g-3">
        {storeData.slice(0, 6).map((product, index) => {
          return (
              <div key={index} className="col-xl-4 col-lg-6">
                <ProductSectionItem  
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  price={product.price}
                  img={product.img}
                  color={product.color}
                  size={product.size}
                ></ProductSectionItem>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;
