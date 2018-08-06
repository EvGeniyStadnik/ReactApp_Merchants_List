import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { checkEmptyValuesBids } from '../../selectors/checkEmtyValuesBids';
import FormBids from './FormBids';

const propTypes = {
  bids: PropTypes.array.isRequired,
  createNewFieldBid: PropTypes.func.isRequired,
  handleCarTitleChange: PropTypes.func.isRequired,
  handleAmountCarChange: PropTypes.func.isRequired,
};

class CreatingBids extends Component {

  state = {
    newBids: []
  };

  componentDidUpdate(prevProps){
    const { bids } = this.props;
    // when we edit existing Merchant previous data in form will be cleared
    if (prevProps.bids !== bids && bids.length === 0){
      this.setState({
        newBids: [],
      })
    }

  };

  componentDidMount(){
    const { bids } = this.props;

    if(bids.length !== 0){
      this.setState({
        newBids: bids,
      })
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    const { bids, createNewFieldBid } = this.props;
    const emptyValueBid = checkEmptyValuesBids(bids);

    if(emptyValueBid && bids.length !== 0){
      alert('Please fill previous Bid before create a new');
      return;
    }

    const id = `${ Math.floor(Math.random() * 1e6) }`;
    const dateNow = Date.now();

    const emptyBid = {
      id,
      carTitle: '',
      amount: '',
      created: dateNow,
    };

    this.setState((state) => {
      const newBids = [...state.newBids, emptyBid];
      this.setState({
        newBids,
      });

      createNewFieldBid(emptyBid);
    });

  };

  render(){
    const { handleCarTitleChange, handleAmountCarChange } = this.props;

    return (
      <div>
        <FormBids
          bids={ this.state.newBids }
          disabled={false}
          handleCarTitleChange={ handleCarTitleChange }
          handleAmountCarChange={ handleAmountCarChange }
        />
        <button onClick={this.handleClick}>+ Create new Bid</button>
      </div>
    )
  }
}

CreatingBids.propTypes = propTypes;

export default CreatingBids;