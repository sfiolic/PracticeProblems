import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react'

export class ContactFormComponent extends Component {


    DATA;

    constructor(props) {
        super(props);
        const { user } =  this.props.auth0;

        this.eventFirstName = this.eventFirstName.bind(this);
        this.eventLastName = this.eventLastName.bind(this);
        this.eventAddress = this.eventAddress.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName: '',
            Address: ''
        }
    }

    // Event handlers
    eventFirstName(event) {
        this.setState({ FirstName: event.target.value })
    }

    eventLastName(event) {
        this.setState({ LastName: event.target.value })
    }

    eventAddress(event) {
      this.setState({ Address: event.target.value })
    }

    onFormSubmit(event) {
      event.preventDefault()
    }


    componentDidMount() {
        const { user } =  this.props.auth0;
        if (user){
        this.DATA = JSON.parse(localStorage.getItem(`contact_form_${user.email}`));

        if (localStorage.getItem(`contact_form_${user.email}`)) {
            this.setState({
                FirstName: this.DATA.FirstName,
                LastName: this.DATA.LastName,
                Address: this.DATA.Address
            })
        } else {
            this.setState({
                FirstName: '',
                LastName: '',
                Address: ''
            })
        }
      }
    }

    componentWillUpdate(nextProps, nextState) {
      const { user } =  this.props.auth0;
      if (user)
      {localStorage.setItem(`contact_form_${user.email}`, JSON.stringify(nextState));};

    }

    render()
    {
      const { user } =  this.props.auth0;
        return (
          <div className="container">
            { user && (

                 <div className="card">
                     <div className="card-body">
                        <form onSubmit={this.onFormSubmit}>
                            <div className="form-group mb-3">
                                <label><strong>First Name</strong></label>
                                <input type="text" className="form-control" value={this.state.FirstName} onChange={this.eventFirstName} />
                            </div>
                            <div className="form-group mb-3">
                                <label><strong>LastName</strong></label>
                                <input type="text" className="form-control" value={this.state.LastNameLastName} onChange={this.eventLastName} />
                            </div>
                            <div className="form-group mb-3">
                                <label><strong>Address</strong></label>
                                <textarea className="form-control" value={this.state.Address} onChange={this.eventAddress} />
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                      </div>
                  </div>
          )}
          </div>
        )
    }
}

export default withAuth0(ContactFormComponent)
