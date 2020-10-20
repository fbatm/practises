import React from 'react';
import {Router, Route, BrowserRouter, IndexRoute} from 'react-router-dom';
import {HomePage} from '../containers';

export default function renderRoutes(){
	return (
		<BrowserRouter>
			<Route path='/' component={HomePage}/>
		</BrowserRouter>
	)
}