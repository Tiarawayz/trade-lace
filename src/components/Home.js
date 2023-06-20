import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';
import 'react-slideshow-image/dist/styles.css';
import {Slide} from "react-slideshow-image";


const Home = () =>{

  const [allLace, setAllLace] = useState([]);
  const slideImages = [
    '/images/frozen.jpg',
    '/images/raised.jpg',
    '/images/yea.jpg',
    '/images/yo.jpg',
    '/images/IMG_7136.jpg',
    '/images/IMG_7135.jpg',
    '/images/IMG_7134.jpg',
    '/images/IMG_7133.jpg',
    '/images/IMG_7132.jpg',
    '/images/IMG_7131.jpg'
  ];

  useEffect(() =>{
    axios.get("http://localhost:8000/api/alllace", setAllLace)
    .then((res) =>{
      console.log(res);
      console.log(res.data);
      setAllLace(res.data.lace);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  const deleteLace = (laceId) => {
    axios.delete("http://localhost:8000/api/deletelace/" + laceId)
    .then((res)=>{
      setAllLace(allLace.filter(p => p._id !== laceId));
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div className='display'>
      <h1>Explore New Lace</h1>
      {/* <div className='button'>
      <Link to='/create'>Create</Link>|
      <Link to='/about'>About</Link>
      </div> */}
        <p>Old To Someone But New To You</p>
      <div class='index-table'>
        <div class=''>
        <table class="table table-bordered table-hover table-secondary">
        <thead>
          <tr class='warning'>
            <th>Shoes Name</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
      {
        allLace.map((lace,index)=>{
          return <tr key={lace._id}>
            <td><Link className='btn btn-outline-info' to={"/onelace/"+ lace._id}>{lace.lacename}</Link></td>
            <td>{lace.lacesize}</td>
            <td><Link className='btn btn-warning badge-pill' to={"/onelace/" + lace._id + "/edit"}>Edit</Link> | <a href="#" className='btn btn-danger badge-pill' onClick={() => deleteLace(lace._id)}>Delete</a></td>
          </tr>
        })
      }
      </tbody>
      </table>
      </div>
      </div>
      <h2>Upcoming Shoes</h2>
      <span className='mx-2'></span>
      <div className='slide-container'>
        <Slide>
          {slideImages.map((slideImgUrl, index) => {
            return (<div key={index} className="image-slider-image">
              <img src={slideImgUrl} />
            </div>);
          })}
          </Slide>
      </div>
    </div>
    
  )
    }

export default Home;