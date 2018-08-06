import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  id: '',
  value: ''
};

class Input extends Component {

  state = {
    value: this.props.value,
  };

  componentDidUpdate(prevProps){
    if (prevProps.value !== this.props.value){
      this.setState({ value: this.props.value })
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    const value = e.target.value || '';
    const id = e.target.dataset.id;

    this.setState({ value });
    onChange(value, id);
  };

  render() {
    const { placeholder, type, disabled, id='' } = this.props;
    return (
      <input
        data-id={ id }
        value={ this.state.value }
        onChange={ this.handleChange }
        placeholder={ placeholder }
        type={ type }
        disabled={ disabled }
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
