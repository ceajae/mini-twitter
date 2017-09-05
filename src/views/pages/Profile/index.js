import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Content from '../../../components/Content/';
import Menu from '../../../components/Menu/';
import Header from '../../../components/Header/';
import Main from '../../Templates/Main/';

export default class Profile extends Component {
  render() {
    return (
       <Main>
          My Profile
       </Main>
    );
  }
}
