import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = { mealCollection: [] };
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

    dataTable() {
        return this.state.mealCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="text-center">
                <div className="content">
                    <table className="table">
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
