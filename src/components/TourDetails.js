import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import { Link } from 'react-router-dom'
import './TourDetails.css'
import {Card} from 'react-bootstrap'


class AddForm extends Component {

  state = { 
    tours: {}
  }

  componentDidMount() {
    let tourId = this.props.match.params.tourId
    axios.get(`${config.API_URL}/api/tours/${tourId}`)
    .then((response) => {
      console.log(response.data)
      this.setState({ tours: response.data})
    })
    .catch(() => {
      console.log('Fecthing failed')
    })
  }

  render() {
    const {tours} = this.state
    const {onEdit, onDelete} = this.props
    return (
      <div className="contnr">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.ibb.co/4WnSYDr/Captura-de-ecr-2021-03-11-s-00-49-25-2.jpg" />
        <Card.Body>
          <Card.Title>Title: {tours.title}</Card.Title>
          <Card.Text>Description: { tours.description}</Card.Text>
          <Card.Text>Date: {tours.date}</Card.Text>
          <Card.Text>Location: {tours.location}</Card.Text>
        </Card.Body>
        <button><Link to={`/editform/${tours._id}`}>Edit</Link></button>
        <button onClick={() => onDelete(tours._id)}>Delete</button>
      </Card>
        
      </div>  
    )
  }
}


export default AddForm

