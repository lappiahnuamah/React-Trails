import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown,Form, FormControl,Button, Table }  from 'react-bootstrap';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { fetchInfo } from '../actions/actions_info';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchInfo());
  }

  handleChange(selectedOption) {
    this.setState({
      selectedOption :  selectedOption ? selectedOption : ''
    });
  }

  render() {

    const selectList = this.props.info.map(item => {
      return { value : item.name, label : item.name }
    });

    return (
      <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Victory page</h1>
              <p>Here we'll list some data from a bunch of smokin' sources!</p>
              <div className="row">
                <div className="col-sm-3">
                  <Select
                    name="form-field-name"
                    value={this.state.selectedOption.value}
                    onChange={this.handleChange.bind(this)}
                    options={selectList}
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-9">
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Age</th>
                        <th>Company</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.info.map(item => {
                        console.log(this.state.selectedOption)
                        if(this.state.selectedOption===''||item.name===this.state.selectedOption.value) {
                          return (
                            <tr key={"item-"+item.name}>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.age}</td>
                              <td>{item.company}</td>
                            </tr>
                          )
                        }
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
