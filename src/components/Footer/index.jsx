import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="container">
          <div className="footer__start">
            <div className="footer__left">
              <h2 className="fotter__text">
                Наше мобильное приложение доступно в AppGallery, App store и
                Google play
              </h2>
              <div className="footer__left-img">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store-1.svg"
                  alt=""
                />
                <img
                  src="https://play-lh.googleusercontent.com/77IGZLd_ycZCUXYgHwGNmH2_0lQCYnRQl3ErBx7SwChAAzS1t8dK6-T_Q5LfIITwCXcV3y6i4hg=w416-h235-rw"
                  alt=""
                />
                <img
                  src="https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-11/img/icon/ag-app.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="footer__img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjPkBcwsbf_QaG5qybSuuUjN_OMkmhk0O48tfQIgZiX8mg8bq9bkgJCtY1JWxd5UU5xM&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="footer__center">
            <div className="footer__olcha">
              <h1 className="footer__olcha-text">olcha</h1>
              <p>Телефон поддержки</p>
              <a className="footer__tel" href="">
                +998 (93)0651760
              </a>
              <a href="#">Козитарнов, Ташкент</a>
              <a className="footer__olchauz" href="info@olcha.uz">
                info@olcha.uz
              </a>
            </div>
            <div className="footer__infarmatsiya">
              <h2 className="footer__infarmatsiya-text">Информация</h2>
              <a>О компании</a>
              <a>Вакансии</a>
              <a>Публичная оферта</a>
              <a>Возврат и обмен товаров</a>
              <a>Условия рассрочки</a>
            </div>
            <div className="footer__title">
              <h2></h2>
              <a href="">Eco-friendly</a>
              <a href="">Политика обработки</a>
              <a href="">персональных данных</a>
              <a href="">Оплата и Доставка Товара</a>
              <a href="">Бонусы и акции</a>
              <a href="">Оферта для продавцов товаров</a>
              <a href="">на Olcha.uz</a>
            </div>
            <div className="footer__center-carts">
              <a href="https://uzum.uz/uz?srsltid=AfmBOoqCfl27YGPccfASukMRPb_-NF91e-zopE67mWlCmx_5MiX9P8NL">
                <img
                  src="https://images.seeklogo.com/logo-png/53/1/uzum-market-logo-png_seeklogo-531745.png"
                  alt=""
                />
              </a>
              <a href="https://click.uz/ru">
                <img
                  src="https://minora.uz/images/logo/click-logo.png"
                  alt=""
                />
              </a>
              <a href="https://payme.uz/home/main">
                <img
                  src="https://www.fibernet.uz/wp-content/uploads/payme-logo.png"
                  alt=""
                />
              </a>
              <a href="https://humocard.uz/ru/">
                <img
                  src="https://kdb.uz/storage/cards/October2021/jMrl5N5B9FAwoIwfSNtC.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <hr />
          <div className="footer__end">
            <p>© 2017-2024. ООО "Olcha store"</p>
            <a href="">Публичная оферта</a>
            <a href="">Политика конфиденциальности</a>
            <img src="./src/assets/image/image.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
