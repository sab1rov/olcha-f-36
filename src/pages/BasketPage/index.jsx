import { useNavigate } from "react-router-dom"

function BasketPage() {
    const Sahifa = useNavigate();

    const AsosiySahifa = () => {
        Sahifa(`/`);
    };

    return (
        <section className="basket-page">
            <div className="container">
                <div className="basket-page__content">
                    <div className="basket-page__cart">
                        <div className="div">
                        <img src="https://olcha.uz/_nuxt/cart.DYGF4swC.png" alt="basketPage img" className="basket-page__img" />
                        </div>
                        <h2 className="basket-page__title">Savatchangiz bo'sh</h2>
                        <p className="basket-page__subtitle">Lekin siz uni har doim to'ldirishingiz mumkin</p>
                        <button className="basket-page__button" onClick={AsosiySahifa}>Asosiy sahifaga</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BasketPage