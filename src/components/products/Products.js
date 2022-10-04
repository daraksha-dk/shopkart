import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/product/products-selectors";
import ProductsPreview from "./ProductsPreview";

const Products = () => {
  const productData = useSelector(selectProducts, shallowEqual);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(204 218 234 / 80%)",
      }}
    >
      {productData.map(({ id, ...otherData }) => {
        return <ProductsPreview key={id} {...otherData} />;
      })}
    </div>
  );
};

export default Products;
