'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { NewLinkState } from '@/reducers/newLink';
import { changeNewLinkPageFields } from '@/actions/newLink';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
 coins: state.main.coins
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: any) => ({
  changeNewLinkPageFields: (payload: Partial<NewLinkState>) => {
    dispatch(changeNewLinkPageFields(payload))
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);

