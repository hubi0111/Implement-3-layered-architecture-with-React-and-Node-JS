import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from './Table';

const validNameRegex1 = /^((?!a)[\s\S])*$/;
const validNameRegex2 = /^((?!A)[\s\S])*$/;

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      type: 'Gov',
      errors: {
        name: '',
        address: '',
        type: '',
      },
      response: [{}]
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/org")
      .then(res => res.json())
      .then(response => this.setState({ response }));
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name =
          !validNameRegex1.test(value) || !validNameRegex2.test(value)
            ? 'Name can not have an A or a'
            : '';
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors)
    })

    console.log("setting " + e.target.name + " to " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    console.log('submitting...');

    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
    } else {
      console.error('Invalid Form')
    }

    const { name, address, type } = this.state;

    const org = {
      name,
      address,
      type,
    };

    axios
      .post('http://localhost:9000/org', org)
      .then(() => console.log('Organization Created'))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    console.log(this.state.response)
    const { errors } = this.state;
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <label>Name: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Your Name"
                onChange={this.handleInputChange}
              />
            </div>
            {errors.name.length > 0 &&
              <span style={{ color: "red" }} className='error'>{errors.name}</span>}
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <label>Address: </label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Your Address"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <label>Type: </label>
              <select
                type="text"
                className="form-control"
                name="type"
                placeholder="Gov"
                onChange={this.handleInputChange}>
                <option value="Gov">Gov</option>
                <option value="Hospital">Hospital</option>
                <option value="SuperMarket">SuperMarket</option>
              </select>
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
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

export default App;