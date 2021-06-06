import React, { useContext, useEffect } from 'react'
import { Table, Button, Header, Icon } from 'semantic-ui-react'
import {cartData} from '../Utils/DummyData'

import ShopContext from "../Context/shop-Context";


const Cart = () => {

  const context = useContext(ShopContext);
  useEffect(() => {
    console.log(context);
  }, []);

   return(
   <div>
    <div>
    <Header as='h2' style= {{color:"#18206c", display: "inline", fontWeight :"bolder"}}>Cart</Header>
    <Icon style= {{float: "right", fontSize: "x-large"}} name='cart' />
    </div>    
  <Table inverted celled>
    <Table.Header>
      <Table.Row style={{backgroundColor:"#171f6d"}}> 
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Availabliity</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
    <Table.Body  style={{backgroundColor:"white",color:"black"}}>
      {console.log(context)}
    {context.cart.map(d => {
        return(
          
          <Table.Row>
        <Table.Cell>{d.Date}</Table.Cell>
        <Table.Cell>{d.Time}</Table.Cell>
        <Table.Cell>{`${d.Availabliity} seats available`}</Table.Cell>
        <Table.Cell><Button style={{minWidth:"35%"}} color= 'orange' onClick={()=>{console.log(d);context.removeProductFromCart(d)}}> Cancel </Button></Table.Cell>
      </Table.Row>
        
        )})}  


    </Table.Body>
  </Table>
  </div>  
 )
}


export default Cart