// ** create-kids.component.js ** //

import React, { Component } from 'react';
import axios from 'axios';

export default class CreateKids extends Component {

    //constructor to add kids meals to the database 
    constructor(props) {
        super(props)

        this.onChangeKids = this.onChangeKids.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            kids: '',
        }
    }

    onChangeKids(e) {
        this.setState({ kids: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const kidsObject = {
            kids: this.state.kids,
        };
        // axios post kids meal object to database
        axios.post('http://localhost:4000/kids/create', kidsObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ kids: ''})
    }


    render() {
        return (
            //this is where we define our submission form
            <div className="wrapper">
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