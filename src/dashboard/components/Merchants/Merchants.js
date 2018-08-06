import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Merchant from '../Merchant';
import './Merchants.css'

const propTypes = {
  merchants: PropTypes.array.isRequired,
};

class Merchants extends Component {

  state = {
    merchants: [],
  };

  componentDidMount(){
    this.props.getMerchants()
  }

  render(){
    const { merchants } = this.props;
    return (
      <div className='container'>
        <h1>Merchants</h1>
        { merchants.map(merchant => {
          return (
            <Merchant key={merchant.id} merchant={merchant} />
          )
        }) }
      </div>
    )
  }
}

Merchants.propTypes = propTypes;

export default Merchants;