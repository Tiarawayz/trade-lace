import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams} from 'react-router-dom';

const ShowLace = () => {
  const [showlace, setShowLace] = useState({});
  const {id} = useParams();

  useEffect(() =>{
    axios.get("http://localhost:8000/api/onelace/" + id)
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      setShowLace(res.data.lace);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <div className=' d-flex flex-column align-items-center'>
      <h1>More Details</h1>
      <p>User Name: {showlace.yourname}</p>
      <p>Lace Brand: {showlace.lacebrand}</p>
      <p>Lace Name: {showlace.lacename}</p>
      <p>Lace Color: {showlace.lacecolor}</p>
      <p>Lace Size: {showlace.lacesize}</p>
      <p>Lace Value: {showlace.lacevalue}</p>
      <Link className='btn btn-outline-info' to='/'>Back Home</Link>
    </div>
  )
}

export default ShowLace