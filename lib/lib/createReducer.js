Object.defineProperty(exports,"__esModule",{value:true});exports.default=createReducer;function createReducer(initialState,handlers){return function reducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;if(handlers.hasOwnProperty(action.type)){return handlers[action.type](state,action);}else{return state;}};}