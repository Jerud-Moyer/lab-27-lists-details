import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="character-link" to={`/detail/${name.id}`} 
        key={`${name.id}`}>
        <li key={name}>
          <span>{name.name}</span>
        </li>
      </Link>
    ));

    return (
      <ul>
        {nameElements}
      </ul>
    );
  }

}
