const Meals = ({ elem, cart, setCart }) => {
  const handleClick = (elem) => {
    const newCart = [...cart];
    newCart.push(elem);
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <div
      className="menu-item"
      onClick={() => {
        handleClick(elem);
      }}
    >
      <div>
        <h3 className="menu-item-h3">{elem.title}</h3>
        {elem.description ? (
          <p className="menu-item-description">{elem.description}</p>
        ) : null}

        <div className="menu-item-price-popular">
          <span className="menu-item-price">{elem.price} €</span>
          {elem.popular && <span className="menu-item-popular">Popular</span>}
        </div>
      </div>
      {elem.picture ? (
        <div>
          <img className="menu-item-img" src={elem.picture} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Meals;
