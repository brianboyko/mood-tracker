
// ==========================
// ./js/index.js (main file)
// ==========================
'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import {getStore} from './store/storeConfig';
import injectTapEventPlugin from 'react-tap-event-plugin'; // required for Material UI until React 1.0 comes out.
import App from './containers/App';

export default class Root extends Component {
  render() {
    const { store, getStore } = this.props;
    return (
      <Provider getStore={getStore} store={store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<Root store={store} getStore={getStore} />
, document.getElementById('root'));

injectTapEventPlugin();
