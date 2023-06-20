import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OneLace = () => {
  const [editLace, setEditLace] = useState({});
  const {id} = useParams();
  const navigate = useNavigate ();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/onelace/" + id)
          .then((res)=>{
            console.log(res);
            console.log(res.data);
            setEditLace(res.data.lace);
          })
          .catch((err)=>{
            console.log(err);
          })
  }, [id])

  const handleChange = (e) => {
    e.preventDefault();
    setEditLace({...editLace, [e.target.name]:e.target.value})
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.patch("http://localhost:8000/api/updatelace/" + id, editLace)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setEditLace(res.data.lace);
      navigate("/");
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (

    <div className='display d-flex flex-column align-items-center'>
      <span className='mx-2'></span>
      <h1>Update Lace</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Name:</label>
        <input type='text' name='yourname' onChange={handleChange} value={editLace.yourname}></input>
      </div>
      <span className='mx-2'></span>

      <div>
      <label>Lace Brand:</label> 
      <input type='text' name='lacebrand' onChange={handleChange} value={editLace.lacebrand}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Name:</label>
        <input type='text' name='lacename' onChange={handleChange} value={editLace.lacename}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Color:</label>
        <input type='text' name='lacecolor' onChange={handleChange} value={editLace.lacecolor}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Size:</label>
        <input type='number' name='lacesize' onChange={handleChange} value={editLace.lacesize}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Value:</label>
        <input type='number' name='lacevalue' onChange={handleChange} value={editLace.lacevalue}></input>
      </div>
      <span className='mx-2'></span>

      
      <button type='submit'>Update Lace</button>
      </form>
      

    </div>
  )
}

export default OneLace;