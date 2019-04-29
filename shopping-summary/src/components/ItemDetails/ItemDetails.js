import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import Media from "react-bootstrap/Media";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </Button>

        <Collapse in={this.state.open}>
          <Media>
            <img
              width={100}
              height={100}
              src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              alt="thumbnail"
            />

            <Media.Body>
              <p>
                Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,
                Red
              </p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${this.props.price}`}</strong>
                  <br />
                  <strong className="price-strike">{`$${
                    this.props.price
                  }`}</strong>
                </Col>
                <Col md={6}>
                  <strong>Qty: 1</strong>
                </Col>
              </Row>
            </Media.Body>
          </Media>
        </Collapse>
      </div>
    );
  }
}
