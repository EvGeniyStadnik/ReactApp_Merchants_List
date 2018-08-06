import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MerchantForm  from './MerchantForm';

import { changeFormField } from '../../actions/changeFormField';
import { addNewMerchant } from '../../actions/addNewMerchant';
import { updateMerchant } from '../../actions/updateMerchant';
import { createNewFieldBid } from '../../actions/createNewFieldBid';
import { changeBidFormField } from '../../actions/createNewFieldBid';

const mapStateToProps = (state) => ({
  merchantFormFields: state.dashboard.merchantForm.fields,
  isEditMode: state.dashboard.merchantForm.isEditMode,
});

const mapDispatchToProps = (dispatch) =>  bindActionCreators({
  changeFormField,
  addNewMerchant,
  updateMerchant,
  createNewFieldBid,
  changeBidFormField,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MerchantForm)