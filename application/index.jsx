import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider}	from 'react-redux';
import configureStore from './store';
import renderRoutes from './routes';
import {test, deco} from './containers';
var decoObj = new deco();
// decoObj.a = 2;

let store = configureStore();

const App = function(props){
	return (
		<Provider store={store}>
			{renderRoutes()}
		</Provider>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'));