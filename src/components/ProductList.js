import React, { Fragment } from "react";
import { ProductConsumer } from "../context";
import Product from "./Product";
import Title from "./Title";

const ProductList = () => {
  return (
    <Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductList;
