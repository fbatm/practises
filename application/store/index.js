import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducers from '../reducers';

export default function configureStore(initState){
	return createStore(
		rootReducers,
		initState,
		applyMiddleware(
			createLogger()
		)
	);
}