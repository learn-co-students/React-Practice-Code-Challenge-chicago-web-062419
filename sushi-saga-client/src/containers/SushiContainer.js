import React, { Component, Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

export default class SushiContainer extends Component {

  render() {
    let sushis = this.props.allSushi
    let fourSushi = sushis.slice(0, 4).map(sushi => {
      return <Sushi sushi={sushi} eatSushi={this.props.eatSushi} updateSushi={this.props.updateSushi} wallet={this.props.wallet}/>
    })

    return (
      <Fragment>
      <div className="belt">
        {fourSushi}
        <MoreButton />
      </div>
      </Fragment>
    )
  }
}

