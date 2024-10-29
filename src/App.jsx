import Banner from "./components/main/Banner"
import Card from "./components/main/Card"
import BannerSwiper from "./components/main/BannerSlider"


function App() {

  return (
    <>
      <main className="main">
        <Banner/>
        <div className="swiper__wrap">
          <BannerSwiper/>          
        </div>
        <Card/>
      </main>
    </>
  )
}

export default App