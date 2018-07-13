import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="./">HOME</a>
          </li>
          <li>
            <a href="./page1">page1</a>
          </li>
          <li>
            <a href="./page2">page2</a>
          </li>
        </ul>
      </nav>
    );
  }
}
