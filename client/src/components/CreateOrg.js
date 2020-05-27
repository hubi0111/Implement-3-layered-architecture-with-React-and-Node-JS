import React, { Component } from 'react';
import axios from 'axios';

const validNameRegex = /^((?!a|A)[\s\S])*$/;

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class CreateOrg extends Component {
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
      }
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name = !validNameRegex.test(value) ? 'Name can not have an A or a' : '';
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

    e.preventDefault();

    if (validateForm(this.state.errors)) {
      console.info('Valid Form');
      const { name, address, type } = this.state;

      const org = {
        name,
        address,
        type,
      };

      axios
        .post('http://localhost:9000/createorg', org)
        .then(() =>
          console.log('Organization Created'),
          this.props.history.push('/listOrg')
        )
        .catch(err => {
          console.error(err);
        });
    } else {
      console.error('Invalid Form')
    }

  };

  render() {
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
      </div>
    );
  }
}

export default CreateOrg;