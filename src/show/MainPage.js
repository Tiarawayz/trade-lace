import React, {useState} from 'react'
import Nav from '../components/Nav';
import Home from '../components/Home';


const MainPage = () => {

  const [laces, setlaces] = useState([]);


  return (
    <div>
      <Nav laces={laces} setlaces={setlaces}/>
      <Home laces={laces} setAllLace={setlaces}/>
    </div>
  )
}

export default MainPage