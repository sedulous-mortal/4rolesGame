import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <ul className="header-links-list">
        <li>
          <Link
            to="/"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/mining"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Mining
          </Link>
        </li>
        <li>
          <Link
            to="/farming"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Farming
          </Link>
        </li>
        <li>
          <Link
            to="/fishing"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Fishing
          </Link>
        </li>
        <li>
          <Link
            to="/combat"
            activeOnlyWhenExact
            activeClassName="active"
          >
            Combat
          </Link>
        </li>
      </ul>
      </div>
    );
  }
}

export default Header;