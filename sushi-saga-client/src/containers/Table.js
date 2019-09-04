import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eatenSushi)
          }
        </div>
          <SushiWallet handleSubmit={props.handleSubmit}/>
      </div>
    </Fragment>
  )
}

export default Table