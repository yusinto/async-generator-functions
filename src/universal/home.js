import React, {Component} from 'react';

const Home = () => <div>This is the homepage</div>;

export default class Home extends Component {

  async function* asyncIteratorCreator() {
    yield await 1;
    yield await 2;
  }

  render() {
    return <div>this is home</div>;
  }
}

