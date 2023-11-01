import {Link} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import '../styles/donatenow.css'
import Amount from '../components/amount'
const hidebtns=()=>{
  document.getElementById("fixedamount").style.display='none';}

  const showbtns=()=>{
    document.getElementById("fixedamount").style.display='block';}
function Donatenow() {
  
  

  const[show, hide]=useState(false)
  const[active, setactive]=useState("1500")
  return (
    
    <div className='donate'> 
      <div className='donatebox'>
        <h3>Select Donation Amount</h3>
        
        <button onClick={()=>{setactive("600")
        showbtns()
      hide(false) }}>₹600</button>
        <button onClick={()=>{setactive("1200")
        showbtns()
        hide(false)
        }}>₹1200</button>
        <button onClick={()=>{setactive("1500")
      showbtns()
      hide(false)
      }}>₹1500</button>
        <button onClick={()=>{
          hide(true) 
          hidebtns()}} >OTHER</button>
        {show &&
        (<div className="other">
          <p>ENTER AMOUNT</p><input type='number' placeholder='₹' id="textin"></input>
        </div>)
        }
        
        <div id="fixedamount">
          {active==="600"&& <Amount title={600}/>}
          {active==="1200"&& <Amount title={1200}/>}
          {active==="1500"&& <Amount title={1500}/>}
        </div>
        <p>Registered under Section 8 of the Indian Companies Act, 2013. Donations to Pure Devotion are tax exempted under 80G of the Indian Income Tax Act.</p>
        <Link to="/donateform"><button id='checkout'>Donate now</button></Link>
    </div>
      
    </div>
  )
}

export default Donatenow
