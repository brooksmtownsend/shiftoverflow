import * as React from 'react';
interface State {
  messages: Array<string>;

}

export class SwapUpdater extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      messages: []
    };
  }
  
    // for testing: sending a message to the echo service every 2 seconds, 
    // the service sends it right back
  componentDidMount() {
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('message', e => this.setState({messages: this.state.messages.concat([e.data])}));
    // socket.addEventListener('open', e => socket.send('Hello Server!'));
  }
  render() {
    const messageRows = this.state.messages.map((message) =>
      <p> {message} </p>
    );
    return (
      <fieldset>
        <legend>Update Board</legend>
        <input/>
        {messageRows}
      </fieldset>

    );
  }
}
