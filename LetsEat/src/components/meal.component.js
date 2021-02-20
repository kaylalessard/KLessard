import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = { mealCollection: [] };
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick() {
        this.setState(state => ({

        }));
      }

    componentDidMount() {
        axios.get('http://localhost:4000/meal')
            .then(res => {
                this.setState({ mealCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        const { mealCollection } = this.state;

        return (
            
            <div className="text-center">

            {mealCollection.map(meal => 
            <div>{meal.meal}</div>)}
 
            </div>
        )
    }
}
