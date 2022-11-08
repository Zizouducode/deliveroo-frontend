const Meals = ({ elem, cart, setCart }) => {
  const handleClick = (elem) => {
    let isPresent = false;

    const newCart = [...cart];
    for (let i = 0; i < cart.length; i++) {
      if (newCart[i].id === elem.id) {
        isPresent = true;
        newCart[i].quantity = newCart[i].quantity + 1;
      }
    }
    console.log(isPresent);
    if (!isPresent) {
      newCart.push(elem);
      elem.quantity = 1;
    }

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
