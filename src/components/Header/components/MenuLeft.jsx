import { list } from "../../../constants/list"

function MenuLeft() {
    return(
        <>
            <div className="menu__left">
                <div  id="" className="menu__sel">
                    <div className="menu__inner">
                        <img src="	https://olcha.uz/eco-products/eco-products-logo.svg" alt="menu-logo" className="menu__logo" />
                        <span >Olcha Market</span>

                    </div>
                    <div className="menu__inner">
                        <img src="		https://olcha.uz/eco-products/nasiya-logo.svg" alt="menu-logo" className="menu__logo" />
                        <span >Olcha Nasiya</span>

                    </div>
                    <div className="menu__inner">

                        <img src="	https://olcha.uz/eco-products/pay-logo.svg" alt="menu-logo" className="menu__logo" />
                        <span >Olcha Nasiya</span>
                    </div>
                    <div className="menu__inner">

                        <img src="	https://olcha.uz/eco-products/b2b-logo.svg
                        " alt="menu-logo" className="menu__logo" />
                        <span >Olcha B2B</span>
                    </div>
                </div>
                
                <div className="menu__links">
                    <div className="menu__link">
                        {

                            list.map(item => {
                                return(
                                    <div key={item.id} >
                                        <a className="menu__items" href="#">{item.title}</a>
                                    </div>
                                )
                            })
                        }
                
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default MenuLeft