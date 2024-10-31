import React from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

function HeaderBottom(open, setOpen) {
  const olMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="header__mobil-top">
        <div className="continer">
          <div className="header__mobil-wrap">
            <div className="header__mobil-left">
              <div className="header__mobil-logo">
                <img
                  src="	https://olcha.uz/_nuxt/app-logo.CBV98dim.png"
                  alt="mobil"
                  className="header__mobil-img"
                />
                <p className="header__mobil-text">
                  Olcha <br />
                  Mobil ilovani yuklab oling
                </p>
              </div>
            </div>
            <div className="header__mobil-right">
              <a href="#" className="header__mobil-btn">
                Yuklab olish
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__mobil-centr">
        <div className="continer">
          <div className="header__mobil-centr-inner">
            <a href="#" className="header__mobil-links">
              <span className="fa fa-phone "></span>
            </a>
            <img
              src="/public/bootm.png"
              alt="centr"
              className="header__mobil-centr-logo"
            />
            <select className="header__chouse">
              <option value="" className="header__language">
                Ўзб
              </option>
              <option value="" className="header__language">
                O'z
              </option>
              <option value="" className="header__language">
                Рус
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="header__mobil-bootm">
        <div className="continer">
          <div className="header__mobil-bootm-wrap">
            <button className="header__mobil-bootm-btn" onClick={olMenu}>
              <span className="fa fa-bars"></span>
            </button>
            <div className="header__mobil-bootm-serch">
              <button>
                <img
                  src="/public/search.png"
                  alt="p"
                  className="header__mobil-bootm-buuton"
                />
              </button>
              <input
                type="text"
                className="header__mobil-bootm-input"
                placeholder="Katalog bo'yicha qidirish"
              />
            </div>
          </div>
          <div className={`menu__catalogs ${open ? "open" : ""}`}>
            <div className="menu__item">
              <MenuLeft />
              <MenuRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBottom;
