var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=Login;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _nativeBase=require("native-base");var _reactRedux=require("react-redux");var loginActions=_interopRequireWildcard(require("app/actions/loginActions"));var _styles=_interopRequireDefault(require("./styles"));var _lottieReactNative=_interopRequireDefault(require("lottie-react-native"));var _jsxFileName="/home/stevehitchens/projects/wherevr-mydev/majengo/app/screens/Login/index.js";function Login(){var id=(0,_reactRedux.useSelector)(function(state){return state.loginReducer.id;});var dispatch=(0,_reactRedux.useDispatch)();var onLogin=function onLogin(){return dispatch(loginActions.requestLogin('test','1234'));};return _react.default.createElement(_nativeBase.Container,{__source:{fileName:_jsxFileName,lineNumber:15}},_react.default.createElement(_reactNative.View,{style:_styles.default.form,__source:{fileName:_jsxFileName,lineNumber:16}},_react.default.createElement(_nativeBase.H3,{style:{fontWeight:'bold'},__source:{fileName:_jsxFileName,lineNumber:17}},' ',"Join the fight against the COVID-19 Monster",' ')),_react.default.createElement(_nativeBase.Content,{__source:{fileName:_jsxFileName,lineNumber:22}},_react.default.createElement(_reactNative.View,{style:_styles.default.image,__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_lottieReactNative.default,{source:require('./17699-covid-19.json'),autoPlay:true,loop:true,height:350,width:350,__source:{fileName:_jsxFileName,lineNumber:24}})),_react.default.createElement(_nativeBase.Form,{__source:{fileName:_jsxFileName,lineNumber:33}},_react.default.createElement(_nativeBase.Item,{__source:{fileName:_jsxFileName,lineNumber:34}},_react.default.createElement(_nativeBase.Input,{placeholder:"Username",__source:{fileName:_jsxFileName,lineNumber:35}})))),_react.default.createElement(_nativeBase.Button,{block:true,success:true,large:true,__source:{fileName:_jsxFileName,lineNumber:40}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:41}},"Continue")));}