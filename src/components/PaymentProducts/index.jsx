import React from "react";

function index() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="container">
          <div className="payment">
            {/*PAYMENT TILE  */}
            <div className="payment__title">
              <h2>olcha-Muddatli to`lov</h2>
              <h2>Xozir sotib oling, keyin to`lang</h2>
            </div>
            {/* PAYMENT PRODUCTS */}
            <div className="payment__products">
              {/* <div className="payment__products-parent"> */}
              <div className="payment__left">
                <div className="payment__products-item first">
                  <div className="payment-products-item__img">
                    <img
                      className="payment__products-item__img"
                      src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-11-21/SWYmuhQmRalYISx5IsNDxoe38wy7C2XSgOtYsgyifDWIbLusemegEE9YqWcK.jpg"
                      alt=""
                    />
                  </div>
                  {/* text */}
                  <div className="payment__products-item__right">
                    <div className="payment__products-item__right-top">
                      <span className="xiomi">xiaomi-14-black-12/256</span>
                      <img src=".//icons/like.svg" alt="like" />
                    </div>
                    <div className="payment__products-item__right-center">
                      <span className="text">8 914 169 cum</span>
                      <img src="./assets/icons/diagram.svg" alt="diagram" />
                    </div>
                    <div className="payment__products-item__right-bottom">
                      <h2 className="payment__products-item__right-bottom-text">
                        8 614 169
                      </h2>
                    </div>
                    <div className="payment__products-item__right-yellow">
                      <span className="payment__products-item__right-bottom-yellow">
                        1 009 000 сум x 12 мес
                      </span>
                    </div>
                  </div>
                </div>
                <div className="payment__products-item second">
                  <div className="payment-products-item__img">
                    <img
                      className="payment__products-item__img"
                      src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-11-21/SWYmuhQmRalYISx5IsNDxoe38wy7C2XSgOtYsgyifDWIbLusemegEE9YqWcK.jpg"
                      alt=""
                    />
                  </div>
                  {/* text */}
                  <div className="payment__products-item__right">
                    <div className="payment__products-item__right-top">
                      <span className="xiomi">xiaomi-14-black-12/256</span>
                      <img src="./assets/icons/like.svg" alt="like" />
                    </div>
                    <div className="payment__products-item__right-center">
                      <span className="text">8 914 169 cum</span>
                      <img src="./assets/icons/diagram.svg" alt="diagram" />
                    </div>
                    <div className="payment__products-item__right-bottom">
                      <h2 className="payment__products-item__right-bottom-text">
                        8 614 169
                      </h2>
                    </div>
                    <div className="payment__products-item__right-yellow">
                      <span className="payment__products-item__right-bottom-yellow">
                        1 009 000 сум x 12 мес
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}

              <div className="payment__right">
                <div className="payment__products-item three">
                  <div className="three__top">
                    <img
                      className="three__top-img"
                      src="https://mini-io-api.texnomart.uz/catalog/product/3556/355622/188751/ebb6f19b-2c95-4061-aa42-e291bb9683d2.jpg"
                      alt=""
                    />
                    <span>
                      Huawei Nova 11 i <br /> 8/128GB Green
                    </span>
                    <span className="three__top-text">1 736 000 sum</span>
                    <span className="three__top-price">3 776 000 sum</span>
                    <span className="three__top-yellow">204 000 sum x 12</span>
                  </div>
                </div>

                <div className="payment__products-item four">
                  <div className="three__top">
                    <img
                      className="three__top-img"
                      src="https://mini-io-api.texnomart.uz/catalog/product/3556/355622/188751/ebb6f19b-2c95-4061-aa42-e291bb9683d2.jpg"
                      alt=""
                    />
                    <span>
                      Huawei Nova 11 i <br /> 8/128GB Green
                    </span>
                    <span className="three__top-text">1 736 000 sum</span>
                    <span className="three__top-price">3 776 000 sum</span>
                    <span className="three__top-yellow">204 000 sum x 12</span>
                  </div>
                </div>
                <div className="payment__products-item five">
                  <div className="three__top">
                    <img
                      className="three__top-img"
                      src="https://mini-io-api.texnomart.uz/catalog/product/3556/355622/188751/ebb6f19b-2c95-4061-aa42-e291bb9683d2.jpg"
                      alt=""
                    />
                    <span>
                      Huawei Nova 11 i <br /> 8/128GB Green
                    </span>
                    <span className="three__top-text">1 736 000 sum</span>
                    <span className="three__top-price">3 776 000 sum</span>
                    <span className="three__top-yellow">204 000 sum x 12</span>
                  </div>
                </div>
                <div className="payment__products-item last">
                  <div className="three__top">
                    <img
                      className="three__top-img"
                      src="https://mini-io-api.texnomart.uz/catalog/product/3556/355622/188751/ebb6f19b-2c95-4061-aa42-e291bb9683d2.jpg"
                      alt=""
                    />
                    <span>
                      Huawei Nova 11 i <br /> 8/128GB Green
                    </span>
                    <span className="three__top-text">1 736 000 sum</span>
                    <span className="three__top-price">3 776 000 sum</span>
                    <span className="three__top-yellow">204 000 sum x 12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default index;
