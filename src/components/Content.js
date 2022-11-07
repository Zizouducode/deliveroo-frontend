const Content = ({ data }) => {
  return (
    <div className="content">
      <div className="content-center">
        <div className="menu">
          {data.categories.map((elem, index) => {
            return (
              <div key={index} className="items-container">
                {elem.meals.length === 0 ? null : (
                  <div>
                    <h2 className="menu-item-title">{elem.name}</h2>
                    <div className="menu-items">
                      {elem.meals.map((elem, index) => {
                        return (
                          <div key={index} className="menu-item">
                            <div>
                              <h3 className="menu-item-h3">{elem.title}</h3>
                              {elem.description ? (
                                <p className="menu-item-description">
                                  {elem.description}
                                </p>
                              ) : null}

                              <div className="menu-item-price-popular">
                                <span className="menu-item-price">
                                  {elem.price} €
                                </span>
                                {elem.popular && (
                                  <span className="menu-item-popular">
                                    Popular
                                  </span>
                                )}
                              </div>
                            </div>
                            {elem.picture ? (
                              <div>
                                <img
                                  className="menu-item-img"
                                  src={elem.picture}
                                  alt=""
                                />
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="cart">cart</div>
      </div>
    </div>
  );
};

export default Content;
