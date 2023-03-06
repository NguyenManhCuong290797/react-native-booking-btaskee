/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { appId } from './app.json';
import MiniApi from '@momo-miniapp/api';
import { Provider } from 'react-redux';
import configureStore from './src/redux/reducer';

const store = configureStore()

class MiniApp extends React.Component {
    constructor(props) {
        super(props);
        /**
         * do not remove code bellow
         */
        MiniApi.init(props);
    }

    render() {
        return <Provider store={store}>
            <App {...this.props} />
        </Provider>;
    }
}

AppRegistry.registerComponent(appId, () => MiniApp);
AppRegistry.registerComponent('MiniApp', () => MiniApp);
