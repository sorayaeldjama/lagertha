'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { Dispatch } from '@reduxjs/toolkit';
import { getProducts, selectCreditsPack } from '@/actions/credits';
import { RootState } from '@/store';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  products: state.credits.products,
  coins: state.main.coins
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getProducts: () => {
    dispatch(getProducts())
  },
  selectCreditsPack: (productId: string) => {
    dispatch(selectCreditsPack(productId))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModel);
  