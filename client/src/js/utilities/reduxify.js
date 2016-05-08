// ==========================
// ./utilities/reduxify.js
// desc: Development tools to automatically bind actions and storestate to props.
// ==========================
// More Details:
//
// Reduxify might not be the "standard" way of doing Redux; certainly,
// not every component will need access to every action, not everyone will
// need to pass the dispatcher or the getState() method to their components,
// and certainly, some users would prefer that each appliction exists on a
// "need to know basis," and not need access to all values in the store.
//
// This is probably best practices for any production app. However, since almost
// every component that uses Redux has some form of the following code at the
// end of the file, it made more sense to me to abstract it to a single utility,
// which you can then import into your container components.  You don't have
// to remember what to import from 'redux' and 'react-redux'.
//
// Additionally, by having this code written only once, it helps keep things
// DRY.
//
// Your mileage may vary.
// ==========================



import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// here we're grabbing "store.getState" from the store, passed in as a function
// called getStore. We can input that function (or for that matter, any other
// function,) as a prop to our component.

import { getStore } from '../store/storeConfig'


export function reduxify(actions, component){ // pass in all actions you want to bind, and the component itself.

  let mapStateToProps = (state) => {
    state = Object.assign({}, state, {store: state}, {getStore: getStore});
    // In the component, we can access:
    // * this.props[reducer] directly.
    // * this.props.store[reducer] (there are some who prefer this syntax - see below)
    // * this.props.getStore() (which allows any function to call store.getState(),
    //   and pass it in through dependency injection to utilities such as APIs)

    return (state);
  }
  let prepareActions = (actions) => (dispatch) =>
    ({ actions: bindActionCreators(actions.default, dispatch),
       dispatch: dispatch,
     })
     // Here we're taking all of our actions, and binding them to the dispatch,
     // as normal, but we're also putting it inside an object.
     // So to access an action, you would have to type
     // this.props.actions[action name].  This is preferred for a number
     // of reasons. First, action names and reducers can often be quite
     // similar, and it can be difficult to tell at a glance if you're
     // dispatching an action or retrieiving a value from this.props[whatever].
     // For added clarity, this.props.store can be used, as above, to distinguish
     // between actions and values in the store.

  let mapDispatchToProps = (dispatch) => (prepareActions(actions, dispatch))

  return connect(mapStateToProps, mapDispatchToProps)(component);

}
