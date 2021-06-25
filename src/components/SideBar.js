import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import Nav from '../components/Nav';
import './SideBar.css'

export default class SideBar extends React.Component {
  state = {
    sideMenuOpen: false,
  }

  /**
   * Sets the state of side menu to open
   * @param {object}state the state of the sideMenu
   */
  handleStateChange =  state => {
    this.setState({
      sideMenuOpen: state.isOpen
    });  
  }

  /**
   * Sets the state to false (closes sidemenu) and handles any default action of selected element
   * @param {event} e click event for Side Menu
   */
  closeSideMenu = e => {
    e && e.preventDefault();
    this.setState({
      sideMenuOpen: false
    });
  }

  /**
   * Toggles the SideMenu
   */
  toggleSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    });
  }
  
  render() {
    return (
      <div>
        <Menu 
          isOpen={this.state.sideMenuOpen} 
          onClose={this.closeSideMenu}
          onStateChange={(state) => this.handleStateChange(state)}
          pageWrapId={'page-wrap'} 
          outerContainerId={'outer-container'}
          disableAutoFocus={true}
          >
          <div className="link-block" onClick={this.closeSideMenu}>
           <Nav navLinkClass="menu-item" showSeparators={true} />
          </div>
        </Menu>
      </div>
    )
  }
}


