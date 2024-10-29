import CompareIcon from "../../../assets/icons/CompareIcon";
import LikeButtonIcon from "../../../assets/icons/LikeButtonIcon";
import ShopCartIcon from "../../../assets/icons/ShopCartIcon";
import { PhoneCard } from "../../../constants/data";

function PhoneCards() {
  return (
    <section className="phonecard">
      <div className="container">
        <div className="phonecard__wrap">
          <div className="phonecard__top">
              {PhoneCard.map((items) => (
                <div className="phonecard__sale" key={items.id}>
                  <div className="phonecard__img">
                    <img src={items.image} alt="img" />
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
                    <p className="content__title">{items.title}</p>
                    <div className="money">
                      <span className="first-child">{items.firstChild}</span>
                      <span className="other">{items.other}</span>
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
