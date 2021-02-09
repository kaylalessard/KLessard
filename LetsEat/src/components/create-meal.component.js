// ** create-meal.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';
export default class CreateMeal extends Component {

    //constructor to add meals to database
    constructor(props) {
        super(props)

        this.onChangeMeal = this.onChangeMeal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            meal: '',
        }
    }

    onChangeMeal(e) {
        this.setState({ meal: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const mealObject = {
            meal: this.state.meal,
        };
        //post meal object to database
        axios.post('http://localhost:4000/meal/create', mealObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ meal: ''})
    }


    render() {
        return (
            //this is where we see our create kids and create meal components
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.name} onChange={this.onChangeMeal} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Adult Meal" className="button" />
                    </div>
                </form>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" value={this.state.name} onChange={this.onChangeKids} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Kids Meal" className="button" />
                    </div>
                </form>
            </div>
        )
    }
}