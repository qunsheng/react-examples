import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  handleChange = e => {
    // the setState below will be sent to redux
    // this.setState({ value: e.target.value });
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </Button>

        <Collapse in={this.state.open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <Form.Group controlId="formInlineName">
                  <Form.Label>Promo Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter promo code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </Form.Group>{" "}
                <Button
                  block
                  className="btn-round"
                  // type="submit"
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default PromoCodeDiscount;
