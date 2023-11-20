import React, { Component } from 'react';
import axios from 'axios';
import './person.css';

export default class PersonList extends Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className='container'>
        <h2>User List</h2>
        
          {this.state.persons.map((person, index) => (
            <div key={index} className='person-con'>
                 <div className='person-title'>
                   {person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}
                </div>
               <div className='person'> 
                <div className='person-image'>
                   
                   <img src={person.picture.large} /><br/>
                   <button>Details</button>
                </div>
             
                <div className='person-info'>
                <div>
                    <span>Username:</span> <strong>{person.login.username}</strong>
                </div>

                <div>
                    <span>Gender:</span> {person.gender}
                </div>

                <div>
                    <span>Time Zone Description:</span> {person.location.timezone.description}
                </div>

                <div>
                    <span>Address:</span> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}
                </div>

                <div>
                    <span>Email:</span> {person.email}
                </div>

                <div>
                    <span>Birth Date and Age:</span> {person.dob.date} ({person.dob.age})
                </div>

                <div>
                    <span>Registered Date:</span> {person.registered.date}
                </div>

                <div>
                    <span>Phone number:</span> {person.phone}
                </div>

                <div>
                    <span>Cell number:</span> {person.cell}
                </div>
                </div>
                
            </div>
            </div>
          ))}
    
      </div>
    );
  }
}
