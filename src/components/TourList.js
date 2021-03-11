import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './TourList.css';


class   TourList extends Component {
    
 
    
    render() {
        const {tourlist} = this.props
        console.log('This is the tourlist', tourlist)
        return (
            <div className="tourlist">
                <h1 className="findtour">Find a Tour!</h1>
                <div className="tours">
                {
                    tourlist.map((tour) => {
                        return(
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.ibb.co/4WnSYDr/Captura-de-ecr-2021-03-11-s-00-49-25-2.jpg" />
                        <Card.Body>
                        <Card.Title>{tour.title}</Card.Title>
                        <Card.Text>
                        {tour.description}
                        </Card.Text>
                        <Link key={tour._id} to={`/tourDetails/${tour._id}`}> <Button variant="primary">Details</Button></Link>
                        </Card.Body>
                        </Card>
                        )
                    })
            
                }
                </div>
        </div>
    )
}
}


export default TourList



