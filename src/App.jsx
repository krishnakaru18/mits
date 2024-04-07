import { Nav, Home, About, Tech, NonTech, Footer } from "./components"
import Headroom from "react-headroom"

const App = () => {
  return (
    <>
    <Headroom>
    <div>
      <Nav />
    </div>
    </Headroom>
    <div>
      <Home />
    </div>
    <div>
      <About />
    </div>
    <div>
      <Tech />
    </div>
    <div>
      <NonTech />
    </div>
    <div>
      <Footer />
    </div>
    </>
    
  )
}

export default App