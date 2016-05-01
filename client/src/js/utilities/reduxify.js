// ==========================
// ./utilities/reduxify.js
// desc: Development tools to automatically bind actions and storestate to props.
// ==========================


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getStore} from '../store/storeConfig'

export function reduxify(actions, component){

  let mapStateToProps = (state) => {
    // yo dawg...
    state = Object.assign({}, state, {store: state}, {getStore: getStore});
    // this allows us to access:
    // -- the entire state with this.props.store
    // -- an indivdual property "foo" with either this.props.store.foo OR this.props.foo
    return (state);
  }
  let prepareActions = (actions) => (dispatch) =>
    ({ actions: bindActionCreators(actions.default, dispatch),
       dispatch: dispatch,
     })
  let mapDispatchToProps = (dispatch) => (prepareActions(actions, dispatch))

  return connect(mapStateToProps, mapDispatchToProps)(component);

}
