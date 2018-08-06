import React from 'react';
import PropTypes from 'prop-types';

import { getDate } from '../../selectors/getDate';

const propTypes = {
  bid: PropTypes.shape()
};

const defaultProps = {
  bid: {}
};

const Bid = ({ bid }) => (
  <div className='bidRow'>
    <div className='item'> Car: { bid.carTitle }</div>
    <div className='item'>Amount: { bid.amount }</div>
    <div className='item'>Created: { getDate(+bid.created) }</div>
  </div>
);

Bid.propTypes = propTypes;
Bid.defaultProps = defaultProps;

export default Bid;