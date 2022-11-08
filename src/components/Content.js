import Menu from "./Menu";
import { useState } from "react";

const Content = ({ data }) => {
  const [cart, setCart] = useState([]);
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
          <button>Valider mon panier</button>
          {cart.map((elem, index) => {
            return (
              <div key={index}>
                <div className="cart-row" key={index}>
                  <div>compteur</div>
                  <div>{elem.title}</div>
                  <div>{elem.price} €</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
