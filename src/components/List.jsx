import React, { Component } from 'react';
import { getCharacters } from '../services/characters-api';
export default class List extends Component {
  state = { names: [] }

  componentDidMount = async() => {
    const data = await getCharacters();
    
    this.setState({
      names: data
    });
  }

  render() {
    const { names } = this.state;

    const nameElements = names.map(name => (
      <li key={name}>
        <span>{name.name}</span>
      </li>
    ));

    return (
      <ul>
        {nameElements}
      </ul>
    );
  }

}
