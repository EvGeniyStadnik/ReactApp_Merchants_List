import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bid from './Bid';
import { sortBids } from '../../selectors/sortBids';

import './Merchant.css'

const propTypes = {
  merchant: PropTypes.object.isRequired,
  removeMerchant: PropTypes.func.isRequired,
  editMerchant: PropTypes.func.isRequired,
};

class Merchant extends Component {

  handleRemoveMerchantClick = () => {
    const { removeMerchant, merchant } = this.props;
    removeMerchant(merchant.id);
  };

  handleEditMerchantClick = () => {
    const { editMerchant, merchant } = this.props;
    editMerchant(merchant.id);
  };

  render(){
    const { merchant } = this.props;
    return(
      <div className='merchantWrapper'>
        <div className='merchantRow'>
          <div className='item'>
            <img src={`${merchant.avatarUrl}`} alt="avatar url" />
          </div>
          <div className='item'>{ merchant.firstName }</div>
          <div className='item'>{ merchant.lastName }</div>
          <div className='item'>{ merchant.email }</div>
          <div className='item'>{ merchant.phone }</div>
          <div className='MerchantControls'>
            <button onClick={this.handleRemoveMerchantClick}> X Remove Merchant</button>
            <button onClick={this.handleEditMerchantClick}>Edit Merchant</button>
          </div>
        </div>
        { merchant.bids.sort(sortBids).map(bid => {
          return <Bid key={bid.id} bid={bid}/>
        }) }
      </div>
    )
  }
}

Merchant.propTypes = propTypes;

export default Merchant;