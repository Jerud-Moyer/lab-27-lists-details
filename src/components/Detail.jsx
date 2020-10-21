import React, { Component } from 'react';
import { fetchCharById } from '../services/characters-api.js';
import PropTypes from 'prop-types'; 

export default class Detail extends Component {
  state = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount = async() => {
    const data = await fetchCharById(this.props.match.params.id);
    console.log(data);

    this.setState({
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin.name,
      image: data.image
    });
  }

  render() {
    return (
      <div>
        <h1 className="char-name">{this.state.name}</h1>
        <h1>Status: {this.state.status}</h1>
        <h1>Species: {this.state.species}</h1>
        <h1>Gender: {this.state.gender}</h1>
        <h1>Origin: {this.state.origin}</h1>
        <img src={this.state.image} alt={this.state.name}/>
        
      </div>
    );
  }
}

