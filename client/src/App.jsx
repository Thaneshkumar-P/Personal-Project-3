import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Comments from "./components/Comments";
import DisplayCard from "./components/DisplayCard";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.esm'






const App = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "black"
  })

  return (
    <>
      {/* <Header />
      <Carousel />
      <DisplayCard /> */}
      <Comments />
    </>
  )
}

export default App;