import React, { Component} from 'react';
import { MenuItems } from "./Menuitems";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {



    state={ clicked: false}

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){ 
        
        return(
            <nav className=" NavbarItems">
                
                <NavLink className="navbar-brand" to="/Home">
                  <img src="madcaplogot.png" alt="logo img" width="100" height="100" className="d-inline-block align-top"/>
                 
                </NavLink>
                <div className="menu-icon" onClick={this.handleClick}>
                     <i className={this.state.clicked ? 'fas fa-times' :  'fas fa-bars'}></i> 

                </div>
                <	ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                                <li key={index}>
                                 <a className={item.cName} href={item.url}>
                                {item.titles}
                            </a> 
                            </li>
                        ) 
                    })}

                </ul>
                      

            </nav>

                ) 

    }}
export default Navbar;