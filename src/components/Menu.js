import Meals from "./Meals";

const Menu = ({ elem, cart, setCart }) => {
  return (
    <div className="items-container">
      {elem.meals.length === 0 ? null : (
        <div>
          <h2 className="menu-item-title">{elem.name}</h2>
          <div className="menu-items">
            {elem.meals.map((elem, index) => {
              return (
                <Meals key={index} elem={elem} cart={cart} setCart={setCart} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
