import React, { Fragment } from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = props => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name="your" title="cart" />
                <CartColumn />
                <CartList value={value} />
                <CartTotals value={value} history={props.history} />
              </Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};
export default Cart;
