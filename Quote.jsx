import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
    state ={
        advice: ""
    };
    componentDidMount(){

        this.fetchQuote();
    }
    fetchQuote = () =>{
        axios.get("https://api.adviceslip.com/advice")
        .then((response) =>{
            const {advice} = response.data.slip;
            console.log(advice);
            this.setState({advice})

        })
        .catch((error) =>{
            console.log(error);

        })
    }
    render() {
        const {advice} = this.state
        return (
            <div className='app'>
                <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button className='button' onClick={this.fetchQuote}>
                    <span>Next Quote</span>
                </button>
                </div>
            </div>
        );
    }
}

export default Quote;
