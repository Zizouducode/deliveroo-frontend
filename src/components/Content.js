import Menu from "./Menu";
import { useState } from "react";

const Content = ({ data }) => {
  const [cart, setCart] = useState([]);
  const deliveryFees = 2.5;
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + Number(cart[i].price * cart[i].quantity);
  }

  const handleChangePlus = (index) => {
    const newCart = [...cart];

    newCart[index].quantity = newCart[index].quantity + 1;
    setCart(newCart);
  };

  const handleChangeMinus = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = newCart[index].quantity - 1;
    // console.log(newCart);
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };
  return (
    <div className="content">
      <div className="content-center">
        <div className="menu">
          {data.categories.map((elem, index) => {
            return (
              <Menu key={index} elem={elem} cart={cart} setCart={setCart} />
            );
          })}
        </div>
        <div className="cart-container">
          <button className="cart-button">Valider mon panier</button>
          <div className="cart-items">
            {cart.map((elem, index) => {
              return (
                <div key={index}>
                  {elem.quantity && (
                    <div>
                      <div className="cart-row" key={index}>
                        <div className="cart-row-left">
                          <div
                            onClick={() => {
                              handleChangeMinus(index);
                            }}
                          >
                            -
                          </div>
                          <div>{elem.quantity}</div>
                          <div
                            onClick={() => {
                              handleChangePlus(index);
                            }}
                          >
                            +
                          </div>
                        </div>
                        <div className="cart-row-right">
                          <div>{elem.title}</div>
                          <div>{(elem.price * elem.quantity).toFixed(2)} €</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="cart-price-details">
            <div className="cart-item-price">
              <span>Sous-total </span>
              <span>{totalPrice} €</span>
            </div>
            <div className="cart-item-price">
              <span>Frais de livraison </span>
              <span>{deliveryFees} €</span>
            </div>
          </div>
          <div className="cart-price-total">
            <span>Total </span>
            <span>{totalPrice + deliveryFees} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
