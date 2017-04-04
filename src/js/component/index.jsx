import 'whatwg-fetch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { AppContainer } from 'react-hot-loader';
import App from './app';


// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(applyMiddleware(sagaMiddleware), []);
const store = createStore(function a() {
}, []);
store.subscribe(() =>
  console.log(store.getState()),
);

// sagaMiddleware.run();

const renders = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#root'),
  );
};

renders(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    renders(App);
  });
}

