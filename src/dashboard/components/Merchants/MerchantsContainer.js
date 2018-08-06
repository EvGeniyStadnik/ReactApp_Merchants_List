import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMerchants } from './../../actions/getMerchants';

import Merchants  from './Merchants';

const mapStateToProps = (state) => ({
  merchants: state.dashboard.merchants.value,
});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  getMerchants,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Merchants)