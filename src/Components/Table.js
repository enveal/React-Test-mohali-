import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import {data} from '../Utils/DummyData'

const TableExampleSingleLine = () => (
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
      {data.map((d,key) => {
      return(

          <Table.Row>
        <Table.Cell>{d.Date}</Table.Cell>
        <Table.Cell>{d.Time}</Table.Cell>
        <Table.Cell>{`${d.Availabliity} seats available`}</Table.Cell>
        <Table.Cell><Button style={{minWidth:"35%"}} color= {d.Availabliity >0 ? 'orange' : 'red'} > {d.Availabliity >0 ? "Book Now" : "Full"} </Button></Table.Cell>
      </Table.Row>
        
    )})}  


    </Table.Body>
  </Table>
)

export default TableExampleSingleLine
