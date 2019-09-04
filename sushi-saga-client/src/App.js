import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushi: [],
    wallet: 200,
    eatenSushi: []
  };

  componentDidMount() {
    this.fetchSushi();
  }

  fetchSushi = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ allSushi: data }));
  };

  eatSushi = price => {
    if (price < this.state.wallet) {
      this.setState(prevState => ({ wallet: prevState.wallet - price }));
    }
  };

  updateSushi = id => {
    let eatenS = this.state.allSushi.filter(s => s.id === id);
    let newSushi = this.state.allSushi.filter(s => s.id !== id);
    this.setState({ eatenSushi: [...this.state.eatenSushi, eatenS] });
    this.setState({ allSushi: newSushi });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          eatSushi={this.eatSushi}
          updateSushi={this.updateSushi}
          wallet={this.state.wallet}
        />
        <Table wallet={this.state.wallet} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
