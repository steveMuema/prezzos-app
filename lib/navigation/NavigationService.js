Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNavigation=require("react-navigation");var _navigator;function setTopLevelNavigator(navigatorRef){_navigator=navigatorRef;}function navigate(routeName,params){_navigator.dispatch(_reactNavigation.NavigationActions.navigate({routeName:routeName,params:params}));}function goBack(key){_navigator.dispatch(_reactNavigation.NavigationActions.back({key:key}));}var _default={navigate:navigate,goBack:goBack,setTopLevelNavigator:setTopLevelNavigator};exports.default=_default;