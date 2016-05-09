// ==========================
// ./store/configureStore.js
// ==========================

import { createStore, applyMiddleware, compose } from 'redux';
// Thunk middleware allows us to dispatch functions through our reducers,
//  instead of just objects.
// This is useful for writing asynchronous code.
import thunkMiddleware from 'redux-thunk';

// Multi is a tool that allows us to dispatch multiple actions at once. (It just
//  helps with keeping code clean and maintainable.);
import multi from 'redux-multi';

// rootReducer is a collection of all our reducers, put into a single passage.
import rootReducer from '../reducers';

// Redux Logger will display previous state, the action, and the next state in
// the console automatically. This is *extremely* helpful for debugging.
import createLogger from 'redux-logger';

// Eventually, we will have functionality which will allow us to capture all the actions
// as they are created, and store it in a local variable: localLog. (logToLocal is the
// function which we use to add items to localLog)

// import { localLog, logToLocal } from '../utilities/loggers'

// We only need
import { HYDRATE } from '../constants/actions'

let logger = createLogger({
  duration: true,
  timestamp: true, // I prefer to create timestamps. This way I have an idea of how long it took each action to render; I also can use this data to simulate 'real time' recreations.
  collapsed: true,
});

if (window === undefined){
  var window = {};
} // needed for testing.

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware, // allows you to dispatch functions as actions.
    multi, // allows you to dispatch multiple actions from one action creator
    logger, // visual displays for the console.log (remove/commentout in production)
    //logToLocal // similar to logger but logs to local memory and can be accessed by application. s
  ),
    window.devToolsExtension ? window.devToolsExtension() : f => f // for chrome Redux Dev Tools.
);

function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.  if (window !== undefined){ // need this line because tests do not run in browser

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const storeFunc = createStore(rootReducer, initialState, enhancer);

  return storeFunc;
}

// since both the redux application store and each react component can have a "state,"
// it can get confusing when referring to them.
// I'll be referring to the store (here) as "store", or "application store", and the
// values currently in the storea as the "application state."
// For components, I'll likely refer to it as the "state" or "component state".

const store = configureStore();

// We may want to take a "snapshot" of the store and save it somewhere, so that we can load
// an entirely different store.  For example,
// a progam might be in the middle of an interaction, but the user may wish to
// pause it to view a tutorial. Instead of coding an entirely different interface
// for the tutorial, we can take a backup snapshot, hydrate() the store with tutorial
// data, and when we are done, restore the state we saved.
//
// Naturally, we MUST make sure we've got a confirmed backup store before we continue on.
// this uses a closure so that the backup is stored in memory outside of the function.
// For semi-obvious reasons, you typically don't want to put your own backup state of the
// store into the store itself.  Sure, it could be done.  But it seems a bit complex.
var backup = {};
function backupStore(){
  backup = store.getState();
  // note that we are not *returning* the backup. That's not the point of this function.
  // we're just making sure that we have a backup in scope for restoreStore().
}

// Rather than creating a seperate action to restore the store, since "backup" is
// in scope, let's just dispatch the hydrate action directly.
function restoreStore(){
  store.dispatch({type: HYDRATE, payload: backup});
}

var getStore = store.getState;

export {
  store as default,
  backupStore,
  restoreStore,
  getStore,
  backup,
}
