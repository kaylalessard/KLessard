import React, { Component } from 'react';

// DataTable class simply displays the meal object from collections
class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.meal}
                </td>
                

            </tr>
        );
    }
}

export default DataTable;