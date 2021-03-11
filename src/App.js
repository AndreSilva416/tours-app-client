import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link, withRouter } from "react-router-dom";
import axios from 'axios';
import config from './config'
import MyNav from "./components/MyNav"
import SignIn from "./components/SignIn"
import SignUp from "./components/SingUp"
import Profile from "./components/Profile"
import TourList from "./components/TourList"
import TourDetails from "./components/TourDetails"
import AddForm from "./components/AddForm"
import EditForm from "./components/EditForm"
import Home from "./components/Home"
import PageNotFound from "./components/PageNotFound"




class App extends Component {
  
  
  state = {
    tours: [],
    loggedInUser: null,
    error: null
  }

  componentDidMount(){
    axios.get(`${config.API_URL}/api/tours`)
      .then((response) => {
        console.log('This is the response', response.data)
        this.setState({ tours: response.data})
      })
      .catch(() => {
        console.log('Details Fecth failed')
      })

    if (!this.state.loggedInUser) {
      axios.get(`${config.API_URL}/api/user`, {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data
            })
        })
        .catch(() => {

        })
    }  
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    let title = event.target.title.value
    let description = event.target.description.value
    let location = event.target.location.value
    let date = event.target.date.value

    console.log('name',title, 'desc', description, 'loc', location, 'date', Date.parse(date))

    axios.post(`${config.API_URL}/api/create`, {
      title: title,
      description: description,
      location: location,
      date: Date.parse(date)
    })
      .then((response) => {
          this.setState({
            tours: [response.data, ...this.state.tours]
          }, () => {
            this.props.history.push('/')
          })

      })
      .catch((err) => {
        console.log('Failed to create', err)
      })
  }

  handleDelete = (tourId) => {

      axios.delete(`${config.API_URL}/api/tours/${tourId}`)
        .then(() => {
            let filteredTours = this.state.tours.filter((tour) => {
              return tour._id !== tourId
            })
  
            this.setState({
              tours: filteredTours
            }, () => {
              this.props.history.push('/')
            })
        })
        .catch((err) => {
          console.log('Delete failed', err)
        })
  
  }

  handleEditTour = (tours) => {
    axios.patch(`${config.API_URL}/api/tours/${tours._id}`, {
      title: tours.title,
      description: tours.description,
      location: tours.location,
      date: tours.date
    })
      .then(() => {
          let newTours = this.state.tours.map((singleTour) => {
              if (tours._id === singleTour._id) {
                singleTour.name  = tours.name
                singleTour.description = tours.description
                singleTour.location = tours.location
                singleTour.date = tours.date
              }
              return singleTour
          })
          this.setState({
            tours: newTours
          }, () => {
            this.props.history.push('/')
          })

          
      })
      .catch((err) => {
        console.log('Edit failed', err)
      })

  }

  handleSignUp = (event) => {
      event.preventDefault()
     
      let user = {
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value
      } 

      axios.post(`${config.API_URL}/api/signup`, user)
        .then((response) => {
            this.setState({
              loggedInUser: null
            }, () => {
              this.props.history.push('/signin')
            })
        })
        .catch((err) => {
          console.log(err)
          /*
            this.setState({
              error: err.response.data
            })*/
        })
  }

  handleSignIn = (event) => {
    event.preventDefault()
    let user = {
      email: event.target.email.value,
      password: event.target.password.value
    } 

    axios.post(`${config.API_URL}/api/signin`, user, {withCredentials: true})
      .then((response) => {
          this.setState({
            loggedInUser: response.data
          }, () => {
            this.props.history.push('/')
          })
      })
      .catch((err) => {
          console.log('Something went wrong', err)
          this.setState({
            error: err.response.data            
          })
      })
  }

  handleLogout = () => {
    
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
    .then(() => {
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/')
        })
    })

  }
  
  
  
  render() {
    return (
      <div>
        <MyNav onLogout={this.handleLogout} user={this.state.loggedInUser}/>
        
        
        <Switch>
            <Route exact path="/" render={(routeProps) => {
              return <Home />
            }}/>
            <Route path="/addform" render={(routeProps) => {
              return <AddForm onAdd={this.handleSubmit} />
            }}/>
            <Route path="/editform/:tourId" render={(routeProps) => {
              return <EditForm {...routeProps} />
            }}/>
            <Route path="/tourlist" render={(routeProps) => {
              return <TourList tourlist={this.state.tours} />
            }}/>
            <Route path="/tourDetails/:tourId" render={(routeProps) => {
              return <TourDetails onDelete={this.handleDelete} onEdit={this.handleEditTour} {...routeProps} />
            }}/>
            <Route  path="/signin"  render={(routeProps) => {
              return  <SignIn error={this.state.error} onSignIn={this.handleSignIn} {...routeProps}  />
            }}/>
            <Route  path="/signup"  render={(routeProps) => {
              return  <SignUp error={this.state.error} onSignUp={this.handleSignUp} {...routeProps}  />
            }}/>
            <Route component={PageNotFound} />
            
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);


