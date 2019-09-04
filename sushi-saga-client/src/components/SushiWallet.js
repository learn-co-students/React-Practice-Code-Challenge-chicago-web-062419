import React, { Component } from 'react';

class SushiWallet extends Component {
    constructor(){
        super()
        this.state = {
            wallet: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.wallet)
        this.setState({
            wallet: ''
        })
    }

    render() {
        return (
            <div>
                Add money to you wallet:
                <form onSubmit={this.handleSubmit}>
                    <input name="wallet" type="text" value={this.state.wallet} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
                
            </div>
        );
    }
}

export default SushiWallet;