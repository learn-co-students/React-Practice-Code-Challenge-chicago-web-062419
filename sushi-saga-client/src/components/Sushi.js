import React, { Component } from 'react'

class Sushi extends Component {
  constructor(){
    super()
    this.state = {
      eaten: false
    }
  }

  handleClick = () => {
    this.setState({
      eaten: true
    })
    this.props.eatSushi(this.props.sushiInfo)
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" onClick={this.state.eaten || this.props.wallet < this.props.sushiInfo.price ? null : this.handleClick}>
          { this.state.eaten ? null:
          <img src={this.props.sushiInfo.img_url} width="100%" alt={this.props.sushiInfo.name}/>}
        </div>
        <h4 className="sushi-details">
          {this.props.sushiInfo.name} - ${this.props.sushiInfo.price}
        </h4>
      </div>
    )
  }
}

export default Sushi