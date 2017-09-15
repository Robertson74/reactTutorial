import React from "react";
import ReactDOM from "react-dom";

import { Layout } from './components/Layout';

const app = document.getElementById('app');

class Test extends React.Component {
  render() {
    return (
      <h1>testing...</h1>
    );
  }
}
ReactDOM.render(<Test/>, app);
ReactDOM.render(<Layout/>, app);
