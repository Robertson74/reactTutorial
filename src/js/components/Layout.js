import React from "react";
import ReactDOM from "react-dom";

import { Footer } from './Footer';
import { Header } from './Header';

export class Layout extends React.Component {
  render() {
    const name = "Mike";
    const title = "Welcome " + name + "!";
    return (
      <div>
        <Header title={title}/>
        <Footer />
      </div>
    );
  }
}
