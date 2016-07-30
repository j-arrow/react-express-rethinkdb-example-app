import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore.js';

const store = configureStore();

const App = ({
    children,
}) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default App;
