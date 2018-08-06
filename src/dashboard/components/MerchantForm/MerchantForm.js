import React, { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from 'lodash/debounce';

import FormBids from './FormBids';
import CreatingBids from './CreatingBids';

import Input from '../../../shared/components/Input';

import { DEBOUNCE_TIME } from '../../constants'

import './MerchantForm.css';

const propTypes = {
  merchantFormFields: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bids: PropTypes.array.isRequired,
  }),
  isEditMode: PropTypes.bool.isRequired,
  changeFormField: PropTypes.func.isRequired,
  changeBidFormField: PropTypes.func.isRequired,
  updateMerchant: PropTypes.func.isRequired,
  addNewMerchant: PropTypes.func.isRequired,
};

class MerchantForm extends Component{

  handleFirstNameChange = debounce(value => {
    this.props.changeFormField('firstName', value);
  }, DEBOUNCE_TIME);

  handleLastNameChange = debounce(value => {
    this.props.changeFormField('lastName', value);
  }, DEBOUNCE_TIME);

  handleEmailChange = debounce(value => {
    this.props.changeFormField('email', value);
  }, DEBOUNCE_TIME);

  handlePhoneChange = debounce(value => {
    this.props.changeFormField('phone', value);
  }, DEBOUNCE_TIME);

  handleCarTitleChange = debounce((value, id) => {
    this.props.changeBidFormField(id, 'carTitle', value);
  }, DEBOUNCE_TIME);

  handleAmountCarChange = debounce((value, id) => {
    this.props.changeBidFormField(id, 'amount', value);
  });

  createNewFieldBid = (id, created) => {
    this.props.createNewFieldBid(id, created)
  };

  render(){
    const { merchantFormFields: { firstName, lastName, email, phone, bids }, isEditMode } = this.props;

    return (
      <div className='container'>
        <h1>Merchant Form</h1>
        <form onSubmit={
          isEditMode ?
            this.props.updateMerchant :
            this.props.addNewMerchant
        }>
          <Input
            onChange={ this.handleFirstNameChange }
            value={ firstName }
            placeholder='First Name'
            type="text"
          />
          <Input
            onChange={ this.handleLastNameChange }
            value={ lastName }
            placeholder='Last Name'
            type="text"
          />
          <Input
            onChange={ this.handleEmailChange }
            value={ email }
            placeholder='Email'
            type="text"
          />
          <Input
            onChange={ this.handlePhoneChange }
            value={ phone }
            placeholder='Phone'
            type="text"
          />
          <div className='bidsContainer'>
            {
              isEditMode ?
                <FormBids bids={bids}/> :
                <CreatingBids
                  bids={bids}
                  handleCarTitleChange={ this.handleCarTitleChange}
                  handleAmountCarChange={ this.handleAmountCarChange}
                  createNewFieldBid={this.createNewFieldBid}
                />
            }
          </div>
          <div>
            {
              isEditMode ?
                <button type='submit'>Edit merchant</button> :
                <button type='submit'>Add new merchant</button>
            }
          </div>
        </form>
      </div>
    )
  }
}

MerchantForm.propTypes = propTypes;

export default MerchantForm;