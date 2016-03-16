import { Provider } from 'react-redux';
import React from 'react';
import store from './redux/store';
import App from './component/App';
class ReduxApp extends React.Component {
    render(){
        return (
            <Provider store={store} key={"provider"}>
                <App />
            </Provider>  
        );
    }   
}

export default ReduxApp;