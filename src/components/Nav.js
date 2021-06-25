import React from 'react'
import {NavLink} from 'react-router-dom';

/**
 * Renders Nav component for navigation
 */
const Nav = props => {
  const styles = {
    className:props.navLinkClass,
    activeClassName: props.navLinkClass,
    id:'menu-item'
  }
  const links = [
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/',
      name: 'HOME'
    },
    {
      className: styles.className,
      activeClassName: styles.activeClassName,
      to: '/perfumes',
      name: 'PERFUMES'
    },
    {
      className:styles.className,
      activeClassName: styles.activeClassName,
      to: '/bath_and_body',
      name: 'BATH/BODY'
    },
    {
      className:styles.className,
      activeClassName: styles.activeClassName,
      to: '/gifts',
      name: 'GIFTS'
    },
  ]
  return (
    <div>
      {links.map(link =>  [
      <NavLink 
        className={link.className} 
        activeClassName={link.activeClassName} 
        to={link.to}
        id={link.id}
        key={link.name}
        >
        {link.name}
      </NavLink>, 
      props.showSeparators &&  <hr key={link.name + 'hr'}/> 
    ])}
    </div>
  )
}

export default Nav;

