import React, {Component} from 'react';
import createPurchaseLogicAsyncIterator from './purchaseLogic';

export default class App extends Component {
  state = {result: 'Click purchase to start the demo.'};

  onClickPurchase = async () => {
    const it = createPurchaseLogicAsyncIterator();

    for await (const result of it) {
      console.log(result.value);
      if(result.done) break;
      this.setState({result: result.value});
    }

    this.setState({result: 'Purchase completed. Thank you!'});
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