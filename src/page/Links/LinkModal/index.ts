"use client";
import { connect } from "react-redux";

import ViewModel from "./Model";
import { RootState } from "@/store";
import { Dispatch } from "@reduxjs/toolkit";
import { changeLinksPageFields, getLinkOpenning, getLinkSent } from "@/actions/links";
import { LinkState } from "@/reducers/linkReducer";

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
  currentLink: state.links.currentLink,
  opennings: state.links.opennings,
  links_sent: state.links.links_sent
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLinksPageFields: (payload: Partial<LinkState>) => {
    dispatch(changeLinksPageFields(payload));
  },
  getLinkOpenning: () => {
    dispatch(getLinkOpenning())
  },
  getLinkSent: () => {
    dispatch(getLinkSent())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewModel);
