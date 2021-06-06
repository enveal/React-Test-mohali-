import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

let seats=Math.floor(Math.random() * 11) + 5

const HeaderExamplePage = () => ( 
  <div>
    <div>
    <Header as='h2' style= {{color:"#f86801", display: "inline"}}>Claim your Free Trial Class</Header>
    <NavLink to="/cart"><Icon style= {{float: "right", fontSize: "x-large"}} name='cart' /> <span> 4 </span></NavLink>
   
    </div>
    <div></div>
    <div>
    <Header as='h2' style= {{color: "#1f2672", display: "inline"}}>Class schedule</Header> 
     <Header as='h4' style= {{float:"right"}}>Free Seats Available : {seats}</Header>
    </div>
  </div>
)

export default HeaderExamplePage
