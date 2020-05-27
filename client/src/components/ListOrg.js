import React, { Component } from 'react';
import Table from './Table';

class ListOrg extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        response: [{}]
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:9000/listorg")
        .then(res => res.json())
        .then(response => this.setState({ response }));
    }
  
    render() {
      return (
        <div>
          <br />
          <div className="container">
            <header>
              <h1>All Orgs</h1>
            </header>
            <Table data={this.state.response} />
          </div>
        </div>
      );
    }
  }
  
  export default ListOrg;