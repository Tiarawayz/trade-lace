import './App.css';
import MainPage from './show/MainPage';
import NewLace from './components/NewLace';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CreatePage from './show/CreatePage';
import EditPage from './show/EditPage';
import ShowLace from './components/ShowLace';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
        <Route path='/onelace/:id/edit' element={<EditPage/>}></Route>
        <Route path='/onelace/:id' element={<ShowLace/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
