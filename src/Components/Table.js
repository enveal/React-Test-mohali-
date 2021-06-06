import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import {data} from '../Utils/DummyData'

import shopContext from "../Context/shop-Context";

const TableExampleSingleLine = () => {
  return(
  <shopContext.Consumer>
 {context => (    
  <Table inverted celled>
    <Table.Header>
      <Table.Row style={{backgroundColor:"#171f6d"}}> 
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
        <Table.HeaderCell>Availabliity</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body  style={{backgroundColor:"white",color:"black"}}>
      {console.log(context)}
      {context.products.map(d => {
        return(
        <Table.Row key={d.id}>
        <Table.Cell>{d.Date}</Table.Cell>
        <Table.Cell>{d.Time}</Table.Cell>
        <Table.Cell>{`${d.Availabliity} seats available`}</Table.Cell>
        <Table.Cell>
            <Button style={{minWidth:"35%"}} color= {d.Availabliity >0 ? 'orange' : 'red'} onClick={() => {context.addProductToCart(d);console.log(d)}}>
            {d.Availabliity >0 ? "Book Now" : "Full"} 
           </Button>
      </Table.Cell>
      </Table.Row>
      )
      })}  

    </Table.Body>
    </Table>
  )}
  </shopContext.Consumer>  
      )
    }

export default TableExampleSingleLine
