import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';//css for reactstrap
// import 'antd/dist/antd.css';//css for antd

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faListOl, faHamburger, faWineBottle, faPepperHot, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

import Home from './components/home';
import Charts from './components/charts';
import Orders from './components/orders';

function App(props) {

  return (
    <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
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
                        <NavItem eventKey="menu">
                            <NavIcon>
                                <FontAwesomeIcon icon={faConciergeBell} style={{fontSize: '1.75em'}} />
                            </NavIcon>
                            <NavText>
                                Menu
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="burgers">
                            <NavIcon>
                                <FontAwesomeIcon icon={faHamburger} style={{fontSize: '1.75em'}} />
                            </NavIcon>
                            <NavText>
                                Burgers
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="boissons">
                            <NavIcon>
                                <FontAwesomeIcon icon={faWineBottle} style={{fontSize: '1.75em'}} />
                            </NavIcon>
                            <NavText>
                                Boissons
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="sauces">
                            <NavIcon>
                                <FontAwesomeIcon icon={faPepperHot} style={{fontSize: '1.75em'}} />
                            </NavIcon>
                            <NavText>
                                Sauces
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
                <main>
                    <Route path="/" exact component={props => <Home />} />
                    <Route path="/home" exact component={props => <Home />} />
                    <Route path="/charts" component={props => <Charts />} />
                    <Route path="/orders" component={props => <Orders />} />
                </main>
            </React.Fragment>
        )}
        />
    </Router>
  );
}

export default App;
