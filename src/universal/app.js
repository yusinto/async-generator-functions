import React, {Component} from 'react';
import createAsyncIterator from './createAsyncIterator';

export default class App extends Component {

  state = {result: 'Nothing yet.'};

  onClickPurchase = async () => {
    console.log('onClickPurchase');

    const it = createAsyncIterator();
    for await (const n of it) {
      this.setState({result: n});
    }

    this.setState({result: 'Done! Your receipt has been emailed to you. Thank you!'});
  };

  render() {
    return (
      <div>
        <h1>Async Generator Function Demo</h1>
        <div>
          <button onClick={this.onClickPurchase}>Purchase</button>
          <div style={{paddingTop: 15}}>{this.state.result}</div>
        </div>
      </div>
    );
  }
}