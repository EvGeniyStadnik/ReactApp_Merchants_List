import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../../shared/components/Input';
import { getDate } from '../../selectors/getDate';

const propTypes = {
  bids: PropTypes.array.isRequired,
};

const FormBids = ({ bids, disabled=true, handleAmountCarChange, handleCarTitleChange }) => (
  <div>
    { bids.map(bid => {
      return (
        <div key={bid.id}>
          <Input
            id={ bid.id }
            value={ bid.carTitle }
            onChange={ handleCarTitleChange }
            placeholder='Car Title'
            type="text"
            disabled={ disabled }
          />
          <Input
            id={ bid.id }
            value={ bid.amount }
            onChange={ handleAmountCarChange }
            placeholder='Amount'
            disabled={ disabled }
            type="text"
          />
          <Input
            value={ getDate(+bid.created) }
            placeholder='Created'
            disabled={ disabled }
            type="text"
          />
        </div>
      )
    }) }
  </div>
);

FormBids.propTypes = propTypes;

export default FormBids;