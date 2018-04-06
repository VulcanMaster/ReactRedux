import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions'
import { loadAuthors } from './actions/authorActions'
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

store.dispatch(loadCourses()); // let to load the courses during the page load
store.dispatch(loadAuthors()); // let to load the courses during the page load

store.subscribe(()=>{
  console.log("store has changed");
})

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('app')
);

/* eslint-disable no-console */
console.log('hi from index.js');