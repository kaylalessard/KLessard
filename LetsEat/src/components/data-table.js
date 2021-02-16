import React, { Component } from 'react';

// DataTable class simply displays the meal object from collections
class DataTable extends Component {

    
    render() {
        return (

                    <li>{this.props.obj.meal}</li>
        );
    }
}

export default DataTable; 
