"use client";
import { connect } from "react-redux";

import ViewModel from "./Model";
import { RootState } from "@/store";
import { Dispatch } from "@reduxjs/toolkit";
import { getProducts } from "@/actions/credits";
import {
  changeFinanceproductsPageFields,
  deleteProduct,
  submitNewProduct,
} from "@/actions/financeproducts";
import { FinanceproductsState } from "@/reducers/financeproductsReducer";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  products: state.credits.products,
  newTitle: state.financeProducts.newTitle,
  newDescription: state.financeProducts.newDescription,
  newAmount: state.financeProducts.newAmount,
  newCredits: state.financeProducts.newCredits,
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getProducts: () => {
    dispatch(getProducts());
  },
  deleteProduct: (product_id: string) => {
    dispatch(deleteProduct(product_id));
  },
  changeFinanceproductsPageFields: (payload: Partial<FinanceproductsState>) => {
    dispatch(changeFinanceproductsPageFields(payload));
  },
  submitNewProduct: () => {
    dispatch(submitNewProduct())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
