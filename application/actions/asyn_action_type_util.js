export default function createAsyncActionsTypes(types){
	types = [].concat(types);
	let actionTypes = {};
	if(Array.isArray(types)){
		types.forEach(type => {
			actionTypes[type] = {
				request: `${type}_REQUEST`,
				done: `${type}_DONE`,
				fail: `${type}_FAIL`
			}
		})
	}

	return actionTypes;
}