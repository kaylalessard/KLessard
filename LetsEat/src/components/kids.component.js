import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

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

    dataTable() {
        return this.state.kidsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="text-center">
                <div className="container">
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