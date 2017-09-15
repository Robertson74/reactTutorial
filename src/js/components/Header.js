import React from "react";

import { Title } from './header/Title';

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Title title={this.props.title}/>
      </div>
    );
  }
}
