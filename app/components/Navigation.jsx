var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <nav className="navbar navbar-inverse container-fluid">
      <div className="navbar-left">
        <ul className="nav navbar-nav">
          <li className="navbar-text">React Timer App</li>
          <li>
            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active">Countdown</Link>
          </li>
        </ul>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="navbar-text">
          Created by Pavel Boček
        </li>
      </ul>
    </nav>
  )
}

module.exports = Navigation;
