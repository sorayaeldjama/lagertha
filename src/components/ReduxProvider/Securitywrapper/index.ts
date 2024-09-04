'use client'
import { connect } from 'react-redux';

import ViewModel from './Model';
import { RootState } from '@/store';
import { Dispatch } from 'redux';
import { checkIsLogged } from '@/actions/main';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: RootState) => ({
    securityLoader: state.main.securityLoader,
    isLogged: state.main.isLogged
});

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch: Dispatch) => ({
    checkIsLogged: () => {
        dispatch(checkIsLogged())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ViewModel);
