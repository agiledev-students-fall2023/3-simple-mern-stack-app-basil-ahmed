import axios from 'axios';
import React, { Component } from 'react';

class AboutUs extends Component {
  state = {
    paragraphs: [],
    imageUrl: '',
  };

  componentDidMount() {
    // Fetch data from the backend API endpoint
    fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/info`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          paragraphs: data.paragraphs,
          imageUrl: data.imageUrl,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <div className="about-us">
        <h1>About Us</h1>
        {this.state.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p> 
        ))}
        <img src={this.state.imageUrl} alt="About Us" />
      </div>
    );
  }
}

export default AboutUs;
