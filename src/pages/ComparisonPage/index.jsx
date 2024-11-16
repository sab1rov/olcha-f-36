import { useNavigate } from "react-router-dom"


function ComparisonPage() {
    const  Sahifa = useNavigate();

    const AsosiySahifa = () => {
        Sahifa('/');
    };
 
    return(
        <section className="catalog-page">
          <div className="container">
            <div className="catalog-page__wrap">
                 <div className="catalog-page__title">
                    <h1>Tovarlarni solishtirish</h1>
                 </div>
                  <div className="catalog-page__row">
                    <div className="catalog-page__div">
                        <img src="https://olcha.uz/_nuxt/empty-icon.DX6S2-bK.png" alt="catalog-page img" className="catalog-page__img"/>
                    </div>
                    <p className="catalog-page__row-title">Afsuski, bunday mahsulot hozirda mavjud emas.</p>
                    <p className="catalog-page__row-subtitle">Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi mumkin</p>
                    <button className="catalog-page__button"  onClick={AsosiySahifa}>Asosiy sahifaga</button>
                  </div>
            </div>
          </div>
        </section>
    )
};
export default ComparisonPage