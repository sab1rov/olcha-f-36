import React from "react";
import { useEffect, useState } from "react";
import CompareIcon from "../../../assets/icons/CompareIcon";
import LikeButtonIcon from "../../../assets/icons/LikeButtonIcon";
import ShopCartIcon from "../../../assets/icons/ShopCartIcon";
import { API } from "../../../api";
import { urls } from "../../../constants/urls";


function PhoneCards() {
   const [products, setProducts] = useState([]);

   const getProducts = async () => {
    const { data } = await API.get(urls.products.get);
    setProducts(data);
    
   };

   useEffect(() => {
    getProducts();
   },[])
  

  return (
    <section className="phonecard">
      <div className="container">
        <div className="phonecard__wrap">
          <div className="phonecard__top">
              {products.map((item) => (
                <div className="phonecard__sale" key={item.id}>
                  <div className="phonecard__img">
                    <img src={item.image} alt="product image" />
                    <div className="phonecard__buttons">
                      <button>
                        <LikeButtonIcon />
                      </button>
                      <button>
                        <CompareIcon />
                      </button>
                    </div>
                  </div>
                  <div className="phonecard__content">
                    <p className="content__title">{item.name}</p>
                    <div className="money">
                      <span className="first-child">{item.price}</span>
                      <span className="other">{item.price} x 12 oy som</span>
                    </div>
                    <div className="phonecard__button">
                      <button className="shopcart">
                        <ShopCartIcon />
                      </button>
                      <button className="payment">Muddatli to'lov</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* <div className="phonecard__bottom">
            <div className="phonecard__sale"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PhoneCards;
