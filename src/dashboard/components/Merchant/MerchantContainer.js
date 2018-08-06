import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeMerchant } from './../../actions/removeMerchant';
import { editMerchant } from './../../actions/editMerchant';
import Merchant  from './Merchant';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  removeMerchant,
  editMerchant,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Merchant)