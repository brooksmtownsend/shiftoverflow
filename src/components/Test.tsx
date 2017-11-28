import * as React from 'react';
import '../styles/Test.css';

export class Test extends React.Component<{text: string}, {}> {
  render() {
    return (
      <div>
        <h2> Hello World </h2>
        <h1> {this.props.text} </h1>
      </div>
    );
  }
}