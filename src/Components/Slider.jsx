import React from 'react'

export default function Slider() {
  return (
    <>
{/* Carousel */}
<div id="demo" className="carousel slide" data-bs-ride="carousel">
  {/* Indicators/dots */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to={0} className="active" />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
    <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
  </div>
  {/* The slideshow/carousel */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images\WhatsApp Image 2024-01-22 at 9.05.52 AM (1).jpeg" alt="Los Angeles" className="d-block" style={{width: '100%'}} />
      <div className="carousel-caption">
        <h3>Don't miss amazing grocery deals</h3>
        <p>sign up for the daily newsletter</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images\WhatsApp Image 2024-01-22 at 9.05.52 AM.jpeg" alt="Chicago" className="d-block" style={{width: '100%'}} />
      <div className="carousel-caption">
      <h3>Don't miss amazing grocery deals</h3>
        <p>sign up for the daily newsletter</p>  
      </div>
    </div>
     <div className="carousel-item">
      <img src="images\WhatsApp Image 2024-01-22 at 9.05.52 AM.jpeg" alt="New York" className="d-block" style={{width: '100%'}} />
      <div className="carousel-caption mb-5">
      <h3>Don't miss amazing grocery deals</h3>
        <p>sign up for the daily newsletter</p>  
      </div>  
    </div>
  </div>
  {/* Left and right controls/icons */}
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" />
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" />
  </button>
</div>


    </>
  )
}
