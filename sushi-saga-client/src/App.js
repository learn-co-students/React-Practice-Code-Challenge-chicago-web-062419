import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushi: [],
      eatenSushi: [],
      wallet: 100,
      begin: 0
    }
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({
      allSushi: sushi
    }))
  }

  componentDidMount(){
    this.fetchSushi()
    this.viewableSushi()
  }

  moreSushi = () => {
    this.setState(prevState => ({
      begin: prevState.begin + 4 >= 100 ? 0 : prevState.begin + 4
    }))
    console.log(this.state.begin)
    this.viewableSushi()
  }

  viewableSushi = () => {
    return this.state.allSushi.slice(this.state.begin, this.state.begin + 4)
  }

  eatSushi = (sushi) => {
    this.onEatWallet(sushi.price)
    this.fillEatenArray(sushi)
  }

  fillEatenArray = (sushi) => {
    this.setState(prevState => ({
      eatenSushi: [...prevState.eatenSushi, sushi]
    }))
  }

  onEatWallet(price){
    if(price < this.state.wallet){
      this.setState(prevState => ({
        wallet: prevState.wallet - price
      }))
    }
  }

  updateWallet = (dollars) => {
    this.setState(prevState =>({
      wallet: parseInt(prevState.wallet) + parseInt(dollars)
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer wallet={this.state.wallet} moreSushi={this.moreSushi} sushi={this.viewableSushi()} eatSushi={this.eatSushi}/>
        <Table handleSubmit={this.updateWallet} eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;