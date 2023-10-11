import Nav from "./Nav"
import Carousel from "./Carousel"
import Intro from "./Intro"


function App() {


  return (
    <>
    <Nav />
    <div>
    <Intro />
    </div>
    <div className="h-screen w-screen fixed">
      <Carousel />   
    </div>
    </>
  )
}

export default App
