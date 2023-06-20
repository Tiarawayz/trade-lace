import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=' d-flex flex-column align-items-center' >
      <h1>More About Us</h1>
      <div class="card">
  <h5 class="card-header">Trade Lace</h5>
  <div class="card-body">
    <h5 class="card-title">Our Intentions</h5>
    <p class="card-text">We dont want our customers to buy shoes from each other instead trade shoes, so you can have a different experience with them.</p>
    <Link to='/' class="btn btn-primary">Home</Link>
  </div>
</div>
    </div>
  )
}

export default About