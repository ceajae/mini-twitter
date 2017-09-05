import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Header from '../../../components/Header/';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import Main from '../../Templates/Main/';

export default class Home extends Component {
  render() {
    return (
       <Main>
          Home
       </Main>
    );
  }
}
