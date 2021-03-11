import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './AddForm.css';
import {Form} from 'react-bootstrap'


class AddForm extends Component {
    render() {
        return (
            <div className='add-form'>
                
                <Form onSubmit={this.props.onAdd}>                      
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter title"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Location</Form.Label>
                        <Form.Control name="location" type="text" placeholder="Enter location"/> 
                    </Form.Group><Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" placeholder="Enter description"/> 
                    </Form.Group><Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control name="date" type="date" className="form-control"/>
                    </Form.Group>
                    <Button type="submit" >Submit</Button>
                </Form> 
                    
                      
            </div>
        )
    }
}

export default AddForm



