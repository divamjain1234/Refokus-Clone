import LocomotiveScroll from 'locomotive-scroll';
import Navbar from "./Components/Navbar"
import Work from "./Components/Work"
import Stripes from "./Components/Stripes"
import Products from "./Components/Products"
import Marquees from "./Components/Marquees"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-zinc-900 h-full w-full">
      <Navbar/>
      <Work></Work>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
      </div>
  )
}

export default App