import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import Nav from '../components/Nav';
import './SideBar.css'

export default class SideBar extends React.Component {
  state = {
    sideMenuOpen: false,
  }

  handleStateChange =  state => {
    this.setState({
      sideMenuOpen: state.isOpen
    });  
  }

  closeSideMenu = e => {
    e && e.preventDefault();
    this.setState({
      sideMenuOpen: false
    });
  }

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


