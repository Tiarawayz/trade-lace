import React, {useState} from 'react'
import{useNavigate, Link} from "react-router-dom";
import axios from "axios";
import './home.css';

const NewLace = ({lace,setAllLace}) => {
  const navigate = useNavigate();
  const [laceDetails, setLaceDetails] = useState({
    yourname:"",
    lacebrand:"",
    lacename:"",
    lacecolor:"",
    lacesize:"",
    lacevalue:""
  });

  const handleChange = (e) =>{
    e.preventDefault();
    setLaceDetails({...laceDetails, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault();

    axios.post("http://localhost:8000/api/newlace", laceDetails)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setAllLace([...lace,res.data.lace]);
      navigate('/');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='display d-flex flex-column align-items-center'>
      <h2>Put Your Bid In</h2>
      <span className='mx-2'></span>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Your Name:</label>
        <input type='text' name='yourname' onChange={handleChange} value={laceDetails.yourname}></input>
      </div>
      <span className='mx-2'></span>

      <div>
      <label>Lace Brand:</label> 
      <input type='text' name='lacebrand' onChange={handleChange} value={laceDetails.lacebrand}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Name:</label>
        <input type='text' name='lacename' onChange={handleChange} value={laceDetails.lacename}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Color:</label>
        <input type='text' name='lacecolor' onChange={handleChange} value={laceDetails.lacecolor}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Size:</label>
        <input type='number' name='lacesize' onChange={handleChange} value={laceDetails.lacesize}></input>
      </div>
      <span className='mx-2'></span>

      <div>
        <label>Lace Value:</label>
        <input type='number' name='lacevalue' onChange={handleChange} value={laceDetails.lacevalue}></input>
      </div>
      <span className='mx-2'></span>
      <div>
      <button className="btn btn-outline-success" type='submit' to='/'>Add New Lace</button>
      </div>
      <span className='mx-2'></span>
      <div>
      <Link className='btn btn-outline-success' to='/' type='submit'>Home</Link>
      </div>
      </form>

    </div>
  )
}

export default NewLace