import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

function HeaderTop({ open, setOpen }) {
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="header__centr">
        <div className="header__bac">
          <div className="container">
            <div className="header__wrap">
              <div className="header__buttons">
                <a href="#" className="header__instalement">
                  0% Muddatli to'lov
                </a>
                <a href="#" className="header__discound">
                  Chegirmalar
                </a>
                <a href="#" className="header__winning-gemas">
                  Yutuqli o'yinlar
                </a>
                <a href="#" className="header__link">
                  Sayt xaritasi
                </a>
              </div>
              <div className="header__right">
                <a href="#" className="header__tels">
                  {" "}
                  +998 (71) 202 202 1{" "}
                </a>
                <a href="#" className="header__sell">
                  olcha da soting
                </a>
                <div className="header__langs">
                  <nav className="header__lang">
                    <a href="#" className="header__lnks">
                      Ўзб
                    </a>
                    <a href="#" className="header__lnks">
                      O'z
                    </a>
                    <a href="#" className="header__lnks">
                      Рус
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header__bootm">
        <div className="container">
          <div className="header__bootm-inner">
            <div className="header__bootm-imgs">
              <img
                src="/public/bootm.png"
                alt="bootm"
                className="header__bootm-png"
              />
              <div className="header__katalog">
                <button className="header__bootm-btn" onClick={toggleMenu}>
                  {/* <span className="fa fa-bars  header__bootm-btn-menu" ></span> 
                                    <span className="fa fa-close header__close"></span> */}
                  {open ? (
                    <span className="fa fa-close"></span>
                  ) : (
                    <span className="fa fa-bars"></span>
                  )}
                  <span>Kotalog</span>
                </button>
              </div>
            </div>

            <div className="header__search">
              <input
                type="text"
                className="header__input"
                placeholder="Katalog bo'yicha qidirish"
              />
              <button className="header__search-btn">
                <img
                  src="/public/search.png"
                  alt="png"
                  className="header__searcht"
                />
              </button>
            </div>
            <div className="header__rights">
              <div className="header__icons">
                <a href="#" className="header__icons-link">
                  <span className="fa fa-bar-chart"></span>
                  <small className="header__smal">Taqqoslash</small>
                </a>
              </div>

              <div className="header__icons">
                <a href="#" className="header__icons-link">
                  <span className="	fa fa-heart-o"></span>
                  <small className="header__smal">Sevgi</small>
                </a>
              </div>
              <div className="header__icons">
                <a href="#" className="header__icons-link">
                  <span className="	fa fa-shopping-cart"></span>
                  <small className="header__smal">Savat</small>
                </a>
              </div>
              <div className="header__icons">
                <a href="#" className="header__icons-link">
                  <span className="fa fa-user-o"></span>
                  <small className="header__smal">Kirish</small>
                </a>
              </div>
            </div>
          </div>
          <div className={`menu__catalog ${open ? "open" : ""}`}>
            <div className="menu__wrap">
              <MenuLeft />
              <MenuRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
