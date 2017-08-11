import AppLogin from "../components/AppLogin"
import Router from "next/router"
import {Form, Col, FormGroup, FormControl, ControlLabel, Button, Panel, Modal, Redirect} from 'react-bootstrap'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formSuccess: false};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    /* TODO: setState() */
    this.state.email = event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    /* TODO: setState(), fuzzy matching */
    this.state.redirectTo = undefined;
    if (this.state.email == 'asmith@email.com') {
      this.state.redirectTo = '/internal';
    } else if (this.state.email == 'bmoody@email.com') {
      this.state.redirectTo = '/external';
    }
    if (this.state.redirectTo) {
      Router.push(this.state.redirectTo);
    }
  }

  render() {
    return <AppLogin>
      <Panel className="gd-login-panel" header="Login">
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password"/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
      </Panel>

    </AppLogin>
  }
}