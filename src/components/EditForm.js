import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import {Form} from 'react-bootstrap'
import './EditForm.css'

class EditForm extends Component {

  state = {
    tours: {}
  }

  componentDidMount(){
    let tourId = this.props.match.params.tourId
    axios.get(`${config.API_URL}/api/tours/${tourId}`)
      .then((response) => {
        this.setState({
          tours: response.data
        })
      })
      .catch(() => {
        console.log('Detail fecth failed')
      })
  }

  handleTitleChange = (event) => {
    let text = event.target.value
    console.log(text)
    let cloneTour = JSON.parse(JSON.stringify(this.state.tour))
    cloneTour.title = text

    this.setState({
      tours: cloneTour
    })
  }

  handleDescChange = (event) => {
    let text = event.target.value
    let cloneTour = JSON.parse(JSON.stringify(this.state.tour))
    cloneTour.description = text

    this.setState({
      tour: cloneTour
    })
  }
  
  handleLocationChange = (event) => {
    let text = event.target.value
    console.log(text)
    let cloneTour = JSON.parse(JSON.stringify(this.state.tour))
    cloneTour.location = text

    this.setState({
      tour: cloneTour
    })
  }

  handleDateChange = (event) => {
    let text = event.target.value
    console.log(text)
    let cloneTour = JSON.parse(JSON.stringify(this.state.tour))
    cloneTour.date = date

    this.setState({
      tour: cloneTour
    })
  }


  render() {
    const {tours} = this.state
    const {onEdit} = this.props
    
    return (
      <div className="editform">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1" className="inputedit">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" onChange={this.handleTitleChange} value={tours.title}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className="inputedit">
                <Form.Label>Decription</Form.Label>
                <Form.Control type="text" onChange={this.handleDescChange} value={tours.description}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className="inputedit">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" onChange={this.handleLocationChange} value={tours.location}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className="inputedit">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" className="form-control" onChange={this.handleDateChange} value={tours.date}/>
            </Form.Group>
          </Form>
          <button onClick={ () => { onEdit(tours) } }  >Submit</button>
      </div>
    )
  }
}

export default EditForm


