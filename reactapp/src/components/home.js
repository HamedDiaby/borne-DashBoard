import React from 'react';
import {Router, Route} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';//css for reactstrap
// import 'antd/dist/antd.css';//css for antd

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faListOl } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
        style={{backgroundColor: '#06d6a0'}}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <FontAwesomeIcon icon={faHome} style={{fontSize: '1.75em'}} />
                </NavIcon>
                <NavText>
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="orders">
                <NavIcon>
                    <FontAwesomeIcon icon={faListOl} style={{fontSize: '1.75em'}} />
                </NavIcon>
                <NavText>
                    Orders
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <FontAwesomeIcon icon={faChartLine} style={{fontSize: '1.75em'}} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
  );
}

export default Home;
