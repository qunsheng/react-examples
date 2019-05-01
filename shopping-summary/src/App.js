import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import SubTotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import ItemDetails from "./components/ItemDetails/ItemDetails";

import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import PromoCodeDiscount from "./components/PromoCode/PromoCode";
import "./App.css";

// Import redux provider
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100.0,
      taxes: 0,
      pickupSavings: -3.85,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }
  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <Container>
        <SubTotal price={this.state.total.toFixed(2)} />
        <PickupSavings price={this.state.pickupSavings} />
        <TaxesFees taxes={this.state.taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
        <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
        <hr />
        <PromoCodeDiscount
          giveDiscount={() => this.giveDiscountHandler()}
          isDisabled={this.state.disablePromoButton}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

// connect is high order component
// it can take parameters
// it will return a function
// the returned function can still take parameters
export default connect(
  mapStateToProps,
  {
    handleChange
  }
)(App);
