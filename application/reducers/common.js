export default function common(state={}, action){
	switch(action.type){
		case 'SETCOMMONDATA':
			Object.assign({}, state, action.data);
			break;
		default:
			break;

	}
	return state;
}