import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Id", field: "created_at_i"
      }, {
        headerName: "Title", field: "title"
      }, {
        headerName: "Url", field: "url"
      }],
      rowData: []
    }
  }


  componentDidMount() {
  
    axios.get("http://hn.algolia.com/api/v1/search?tags=front_page").then(res => {
        this.setState({
          rowData: [...res.data.hits]
        })

    })

}

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <AgGridReact
         enableFilter={true}
          enableSorting={true}
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default App;