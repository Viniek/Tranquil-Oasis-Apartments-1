import React from 'react'
import hero1 from '../../assets/hero1.jpg'
import './Properties.css'
import one_bedroom from "../../assets/one_bedroom.jpg"
import two_bedroom from "../../assets/two_bedroom.jpg"
import three_bedroom from "../../assets/three_bedroom.jpg"
import four_bedroom from "../../assets/4bedroom.webp"
import five_bedroom from "../../assets/five_bedroom.jpg"
import six_bedroom from "../../assets/six_bedroom.jpg"
import specialoffer from "../../assets/specialoffer.jpg"

function Heroproperties() {
  return (
    <>
    <div className='heroproperties'>
        <h2>Tranquil Oasis Properties</h2>
    </div>

    <div className='grey'>
      <div className='ourspacestext'>Available Spaces</div>
    <form className="our_Spaces_form">
          <label htmlFor="our_spaces"></label>
          <select onChange={(e) => window.location.href = 'dwelling1'}>
           {/* <option><Link to='dwelling1'>One bedroom</Link></option>
           <option><Link to='dwelling1'>Two Bedroom</Link></option>
           <option><Link to='dwelling1'>Three Bedroom</Link></option>
           <option><Link to='dwelling1'>Four Bedroom</Link></option>
           <option><Link to='dwelling2'>Five Bedroom</Link></option>
           <option><Link to='dwelling2'>Six Bedroom</Link></option> */}
            <option>one_bedroom</option>
            <option>two_bedroom</option>
            <option>three_bedroom</option>
            <option>four_bedroom</option>
            <option>five_bedroom</option>
            <option>six_bedroom</option> 
          </select>
        </form></div>

        <section className='dwelling1' id="dwelling1">
    {/* card1 */}
    <div className='dcard'>
      <img src={three_bedroom} alt="dining"/>
      <h2>One Bedroom</h2>
      <p>Cozy 1 Bedroom Master En-Suite + DSQ </p>
      <p className='vacant'>vacant</p>
    </div>

     {/* card2*/}
     <div className='dcard'>
      <img src={one_bedroom} alt="dining"/>
      <h2>Two Bedroom</h2>
      <p>Luxurious and Trendy 2 Bedroom Master En-Suite + DSQ </p>
       <p className='booked'><strike>vacant</strike></p>  
    </div>

       {/* card3*/}
       <div className='dcard'>
      <img src={two_bedroom} className='bd3'/>
      <h2>Three Bedroom</h2>
      <p>Deluxe 3 Bedroom Master En-Suite + DSQ</p>
      <p className='booked'>vacant</p>
    <img src={specialoffer}alt="specialoffer"/>
    
    </div>
    </section>  


      <section className='dwelling2'>
    {/* card4*/}
    <div className='dcard'>
      <img src={five_bedroom} alt="dining"/>
      <h2>Four Bedroom</h2>
      <p>Opulent 4 Bedroom Master En-Suite + DSQ </p>
       <p className='booked'>vacant</p> 
    </div>

     {/* card5*/}
     <div className='dcard'>
      <img src={six_bedroom} alt="dining"/>
      <h2>Five Bedroom</h2>
      <p>Lavish 5 Bedroom Master En-Suite + DSQ</p>
      <p className='vacant'>vacant</p>

    </div>

{/* card6*/}
<div className='dcard'>
      <img src={five_bedroom} alt="dining"/>
      <h2>Six Bedroom</h2>
      <p>Palatial 6 Bedroom Master En-Suite + DSQ </p>
      <p className='booked'>vacant</p>
    </div>
       
    </section> 
    </>
  )
}

export default Heroproperties