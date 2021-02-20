import React, { Component } from 'react';
import axios from 'axios';

export default class Kids extends Component {

    constructor(props) {
        super(props);
        this.state = { kidsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/kids')
            .then(res => {
                this.setState({ kidsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        const { kidsCollection } = this.state;

        return (
            
            <div className="text-center">

            {kidsCollection.map(meal =>
            <div>{meal.meal}</div>)}
 
            </div>
        )
    }
    

}
